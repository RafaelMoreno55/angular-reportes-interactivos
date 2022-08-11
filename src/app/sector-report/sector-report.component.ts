import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import 'anychart';
import { DataReportService, Options } from 'app/data-report.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoreInformationComponent } from 'app/more-information/more-information.component';
import * as module from 'Utilities/UtilityObject';
// import 'jspdf-autotable';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import * as domtoimage from 'dom-to-image-more';

// declare var jsPDF: any; // Important

@Component({
  selector: 'app-sector-report',
  templateUrl: './sector-report.component.html',
  styleUrls: ['./sector-report.component.css']
})
export class SectorReportComponent implements OnInit, OnDestroy {

  @ViewChild('container') container: ElementRef;

  // línea de código utilizado para declarar un tipo de gráfico en AnyChart
  gauge: anychart.charts.LinearGauge = null;

  selectedIndex: number = -1;
  selectedComponent: number = 0;
  isShowInfo: boolean = false;
  // interfaz utilizado para almacenar la información que retorna el servicio
  selection: Options = {
    selectedComponent: 0,
    selectedIndex: -1
  };
  // interfaz utilizado para suscribirse al servicio
  private subscription: Subscription | undefined;

  result: string[] = [
    "no-recomendado",
    "recomendado",
    "revision-asesor"
  ];
  resultado: string = this.result[2];

  rows: any = [];
  indexs: any = [];
  indexsAux: any = [];
  arrayGeneral: any = [];
  arrayQualitative: any = [];
  arrayQuantitative: any = [];
  arrayReferenceDescription: any = [];
  arrayReferences: any = [];
  graphicsContainer: any = [];
  sectors: any = [];
  rowsSubSector: any = [];
  obtainedScore: string;
  range1Red: any = [];
  range2Orange: any = [];
  range3Yellow: any = [];
  range4Green: any =[];
  title: string;
  ranges: any = [];
  colorConfig: number;
  totalVariables1: number = 0;
  totalVariables2: number = 0;
  totalVariables3: number = 0;
  totalVariables4: number = 0;
  range1RedFraud: any = [];
  range2OrangeFraud: any = [];
  range3YellowFraud: any = [];
  range4GreenFraud: any =[];
  titleFraud: string;
  rangesFraud: any = [];
  colorConfigFraud: number;
  totalVariables1Fraud: number = 0;
  totalVariables2Fraud: number = 0;
  totalVariables3Fraud: number = 0;
  totalVariables4Fraud: number = 0;
  range1RedRisk: any = [];
  range2OrangeRisk: any = [];
  range3YellowRisk: any = [];
  range4GreenRisk: any =[];
  titleRisk: string;
  rangesRisk: any = [];
  colorConfigRisk: number;
  totalVariables1Risk: number = 0;
  totalVariables2Risk: number = 0;
  totalVariables3Risk: number = 0;
  totalVariables4Risk: number = 0;
  range1RedSection: any = [];
  range2OrangeSection: any = [];
  range3YellowSection: any = [];
  range4GreenSection: any =[];
  titleSection: string;
  rangesSection: any = [];
  colorConfigSection: number;
  totalVariables1Section: number = 0;
  totalVariables2Section: number = 0;
  totalVariables3Section: number = 0;
  totalVariables4Section: number = 0;
  variableScore: number;
  averageValue: number;
  range: number;
  propertyName: string;
  propertyValue: number;
  propertyColorConfig: number;
  multiplier1: number = 0.25;
  multiplier2: number = 0.50;
  multiplier3: number = 0.75;
  recommendedScore: number;
  itemDoughnut: number = -1;
  competenceVariables: any = [];
  descriptionText: string;
  fraudText: string = "";
  competenciesText: string = "";
  risksText: string = "";
  referencesText: string = "";
  variableDescriptionText: string = "";
  descriptionTextSubsector: string;
  isExport: boolean = false;
  fraudReportSection: any = [];
  competenciesReportSection: any = [];
  risksReportSection: any = [];
  referencesReportSection: any = [];
  colorConfigReferences: number;
  // newArrayComp: any = [];
  // newArrayVerac: any = [];
  // colorConfigRisks: number;

  constructor(private optionsSvc: DataReportService, private activeRoute: ActivatedRoute, private el: ElementRef, private modalService: NgbModal) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    // Servicio que permite actualizar el índice del componente seleccionado y con ello poder realizar la navegación entre componentes
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => this.selection = option);
    // Servicio nativo que permite obtener los parámetros de la url y con ello poder seleccionar el parámetro star. La información es mostrada en la interfaz
    this.activeRoute.params.subscribe((params: Params) => {
      this.obtainedScore = params.star;
    });
    // se obtiene la información de los objetos y se almacena en el arreglo rows
    this.rows = this.optionsSvc.getRows();
    // se obtiene todos los índices de las secciones de reporte que aparecen en el arreglo rows
    this.indexs = this.optionsSvc.indices;
    // arreglo auxiliar para descartar los índices de sección de reporte que no se graficarán en un Tank gauge
    this.indexsAux = this.indexs.filter(function(index){
      return index != 1 && index != 4 && index != 5 && index != 11;
    });
    // se orden los índices de las secciones de reporte de menor a mayor
    this.indexs.sort(function(a,b) {
      return a - b;
    });
    // el arreglo rows es ordenado de menor a mayor y por índice de sección de reporte
    this.SortAsc(this.rows, 'seccionReport');

    let i = 0;
    let sum = 0;
    let count = 0;
    let rango1 = 0;
    let rango2 = 0;
    let rango3 = 0;
    let last = this.rows.length - 1;
    let configColor = 0;
    let indexAuto = -1;
    let indexVera = -1;
    let indexApeg = -1;
    let indexPers = -1;
    let indexEnto = -1;
    let splitNameArray = [];
    let countAuto = 0;
    let sumAuto = 0;
    let countVera = 0;
    let sumVera = 0;
    let countApeg = 0;
    let sumApeg = 0;
    let countPers = 0;
    let sumPers = 0;
    let countEnto = 0;
    let sumEnto = 0;
    let range1Comp = 0;
    let range2Comp = 0;
    let range3Comp = 0;
    let configColorComp = 0;
    let range1Ries = 0;
    let range2Ries = 0;
    let range3Ries = 0;
    let configColorRies = 0;

    /** 
     * Se recorre el arreglo rows para obtener y almacenar información de las siguientes secciones de reporte:
     * (4)Información cualitativa, (5)Información cuantitativa, (1 y 11)Generales, (16)Competencias,
     * (18)Factores de riesgos y (29)Referencias.
     */
    this.rows.forEach(element => {
      /**
       * La información almacenada en el arreglo arrayQualitative, arrayQuantitative y arrayGeneral es utilizado en el modal para brindar más información,
       * ya que no se crea un gráfico Tank Gauge para las siguientes secciones de reporte: (4)Información cualitativa, (5)Información cuantitativa y (1 y 11)Generales
       */
      if (element['seccionReport'] === 4) {
        let qualitativeData = new Object();
        qualitativeData['name'] = element['name'];
        qualitativeData['value'] = element['value'];
        qualitativeData['sectionReport'] = element['seccionReport'];
        this.arrayQualitative.push(qualitativeData);
      } else {
        if (element['seccionReport'] === 5) {
          let quantitativeData = new Object();
          quantitativeData['name'] = element['name'];
          quantitativeData['value'] = element['value'];
          quantitativeData['sectionReport'] = element['seccionReport'];
          this.arrayQuantitative.push(quantitativeData);
        } else {
          if (element['seccionReport'] === 11 || element['seccionReport'] === 1) {
            let generalData = new Object();
            generalData['name'] = element['name'];
            generalData['value'] = element['value'];
            generalData['sectionReport'] = element['seccionReport'];
            this.arrayGeneral.push(generalData);
          } else {
            /**
               * Se verifica si se trata de la sección de reporte: Competencias.
               * Dentro de la condición se realiza la suma de todas la variables de competencias de apego, competencias de veracidad y
               * competencias de autocalificación por separado con sus respectivos contadores para tener la cantidad de variables de 
               * cada tipo de competencias. Esto con el fin de calcular el promedio de competencias de apego, competencias de veracidad y
               * competencias de autocalificación
               */
            if (element['seccionReport'] === 16) {
              splitNameArray = element['name'].split(' ');
              indexApeg = splitNameArray.indexOf("apego");
              indexVera = splitNameArray.indexOf("veracidad");
              indexAuto = splitNameArray.indexOf("autocalificación");
              range1Comp = element['rango1'];
              range2Comp = element['rango2'];
              range3Comp = element['rango3'];
              configColorComp = element['configColor'];
              if (indexApeg != -1) {
                sumApeg += parseFloat(element['value']);
                countApeg += 1;
              } else {
                if (indexVera != -1) {
                  sumVera += parseFloat(element['value']);
                  countVera += 1;
                } else {
                  if (indexAuto != -1) {
                    sumAuto += parseFloat(element['value']);
                    countAuto += 1;
                  }
                }
              }
            }
            else {
              /**
               * Se verifica si se trata de la sección de reporte: Factores de riesgos.
               * Dentro de la condición se realiza la suma de todas la variables de riesgos personales y
               * las variables de riesgos entorno por separado con sus respectivos contadores para 
               * tener la cantidad de variables de cada tipo de riesgo. Esto con el fin de calcular 
               * el promedio de riesgos personales y riesgos entorno
               */
              if (element['seccionReport'] === 18) {
                splitNameArray = element['name'].split(' ');
                indexPers = splitNameArray.indexOf("personal");
                indexEnto = splitNameArray.indexOf("entorno");
                range1Ries = element['rango1'];
                range2Ries = element['rango2'];
                range3Ries = element['rango3'];
                configColorRies = element['configColor'];
                if (indexPers != -1) {
                  sumPers += parseFloat(element['value']);
                  countPers += 1;
                } else {
                  if (indexEnto != -1) {
                    sumEnto += parseFloat(element['value']);
                    countEnto += 1;
                  } 
                }
              } else {
                /**
                 * Se verifica si se trata de la sección de reporte: referencias.
                 * Dentro de la condición se almacenan los campos name y value de los objectos que no tienen una
                 * cantidad numérica, por lo que estos datos solo se muestran en la interfaz como información adicional
                 */
                if (element['seccionReport'] === 29) {
                  if (isNaN(element['value'])) {
                    let referenceData = new Object();
                    referenceData['nameDescrip'] = element['name'];
                    referenceData['description'] = element['value'];
                    this.arrayReferenceDescription.push(referenceData);
                  }
                }
              }

            }
          }
        }
      }
    });
    /**
     * Se recorre el arreglo rows para ir almacenando en el arreglo sctors los promedios de cada sección de reporte,
     * la cantidad de variables que conforman a cada sección de reporte, los 3 tipos de rangos, el número de sección de reporte
     * y la configuración de color. Esta información se usa posteriormente para crear los gráficos Tank Gauge
     */
    this.rows.forEach((element, index)=> {
      /**
       * Condición que se utiliza para realizar la suma y el conteo de las variables que tengan el mismo tipo de sección de reporte.
       * Excepto las secciones de reporte: (1 y 11)Generales, (4)Información cualitativa, (5)Información cuantitativa y
       * las variables de la sección (29)Referencias que no contengan una cantidad numérica en su campo value,
       */
      if (this.indexs[i] === element['seccionReport']) {
        if (this.indexs[i] !== 1 && this.indexs[i] !== 4 && this.indexs[i] !== 5 && this.indexs[i] !== 11 && !isNaN(element['value'])) {
          sum += parseFloat(element['value']);
          rango1 = element['rango1'];
          rango2 = element['rango2'];
          rango3 = element['rango3'];
          configColor = element['configColor'];
          count += 1;
        }
      } else {
        /**
         * Se crea un nuevo objeto el cual almacena el promedio, número de elementos, rangos, número de sección de reporte
         * y la configuración de color correspondiente a la sección de reporte. El nuevo objeto se almacena en el arreglo sectors.
         * Excepto las secciones de reporte: (4)Información cualitativa, (5)Información cuantitativa y (1 y 11)Generales
         */
        if (this.indexs[i] !== 1 && this.indexs[i] !== 4 && this.indexs[i] !== 5 && this.indexs[i] !== 11) {
          let graphicData = new Object();
          graphicData['average'] = this.Round(sum/count);
          graphicData['numItems'] = count;
          graphicData['range1'] = rango1;
          graphicData['range2'] = rango2;
          graphicData['range3'] = rango3;
          graphicData['sectionReport'] = this.indexs[i];
          graphicData['colorConfig'] = configColor;
          this.sectors.push(graphicData);
        }
        /**
         * En caso de tratarse de secciones de reporte: (1 y 11)Generales, (4)Información cualitativa, (5)Información cuantitativa y
         * las variables de la sección (29)Referencias que no contengan una cantidad numérica en su campo value. No se realizará 
         * ninguna acción en caso contrario se almacenan los datos de la siguiente variable de sección de reporte en variables auxiliares
         */
        if (element['seccionReport'] === 1 || element['seccionReport'] === 4 || element['seccionReport'] === 5 || element['seccionReport'] === 11 || isNaN(element['value'])) {
          sum = 0;
          rango1 = 0;
          rango2 = 0;
          rango3 = 0;
          configColor = 0;
          count = 0;
        } else {
          sum = parseFloat(element['value']);
          rango1 = element['rango1'];
          rango2 = element['rango2'];
          rango3 = element['rango3'];
          configColor = element['configColor'];
          count = 1;
        }
        i += 1;
      }
      /**
       * Se crea un nuevo objeto el cual almacena el promedio, número de elementos, rangos, número de sección de reporte
       * y la configuración de color correspondiente al último elemento del arreglo rows
       */
      if (index === last) {
        if (this.indexs[i] !== 1 && this.indexs[i] !== 4 && this.indexs[i] !== 5 && this.indexs[i] !== 11) {
          let graphicData = new Object();
          graphicData['average'] = this.Round(sum/count);
          graphicData['numItems'] = count;
          graphicData['range1'] = rango1;
          graphicData['range2'] = rango2;
          graphicData['range3'] = rango3;
          graphicData['sectionReport'] = this.indexs[i];
          graphicData['colorConfig'] = configColor;
          this.sectors.push(graphicData);
        }
      }
    });

    /**
     * Se itera el arreglo rows para formar los arreglos con la información correspondiente a la sección de reporte:
     * (12)Fraude, (16)Competencias, (18)Factores riesgos y (29)Referencias
     */
    this.rows.forEach(element => {
      if (!isNaN(element['value'])) {
        // arreglo de la sección de reporte fraude
        if (element['seccionReport'] == 12) {
          this.fraudReportSection.push(element);
        } else {
          // arreglo de la sección de reporte competencias
          if (element['seccionReport'] == 16) {
            this.competenciesReportSection.push(element);
          } else {
            // arreglo de la sección de reporte: factores de riesgo
            if (element['seccionReport'] == 18) {
              this.risksReportSection.push(element);
            } else {
              if (element['seccionReport'] == 29) {
                // arreglo de la sección de reporte: referencias
                this.referencesReportSection.push(element);
              } 
            }
          }
        }  
      } 
    });
    /**
     * Se itera el arreglo fraudReportSection para calcular los valores requeridos para el componente subsector-report
     * el cual muestra información de la sección de reporte Fraude
     */
    if (this.fraudReportSection.length > 0) {
      [this.totalVariables1Fraud, this.totalVariables2Fraud, this.totalVariables3Fraud, this.totalVariables4Fraud, this.colorConfigFraud] = this.GetInformationForComponent(this.fraudReportSection, this.rangesFraud, this.range1RedFraud, this.range2OrangeFraud, this.range3YellowFraud, this.range4GreenFraud);
      this.titleFraud = this.optionsSvc.GetNameSectorReport(this.fraudReportSection[0]['seccionReport']);
    }
    /* let range1 = this.fraudReportSection[0]['rango1'];
    let range2 = this.fraudReportSection[0]['rango2'];
    let range3 = this.fraudReportSection[0]['rango3'];
    this.ranges.push(range1);
    this.ranges.push(range2);
    this.ranges.push(range3);
    this.colorConfig = this.fraudReportSection[0]['configColor'];
    this.title = this.optionsSvc.GetNameSectorReport(this.fraudReportSection[0]['seccionReport']);
    this.fraudReportSection.forEach(element => {
      if (this.colorConfig == 1 ) { // verde a rojo
        if (parseFloat(element['value']) <= range1) {
          this.range4Green.push(element['name']);
        } else {
          if (parseFloat(element['value']) > range1 && parseFloat(element['value']) <= range2) {
            this.range3Yellow.push(element['name']);
          } else {
            if (parseFloat(element['value']) > range2 && parseFloat(element['value']) <= range3) {
              this.range2Orange.push(element['name']);
            } else {
              if (parseFloat(element['value']) > range3) {
                this.range1Red.push(element['name']);
              }
            }
          }
        }
      } else {// rojo a verde
        if (this.colorConfig == 2) {
          if (parseFloat(element['value']) <= range1) {
            this.range1Red.push(element['name']);
          } else {
            if (parseFloat(element['value']) > range1 && parseFloat(element['value']) <= range2) {
              this.range2Orange.push(element['name']);
            } else {
              if (parseFloat(element['value']) > range2 && parseFloat(element['value']) <= range3) {
                this.range3Yellow.push(element['name']);
              } else {
                if (parseFloat(element['value']) > range3) {
                  this.range4Green.push(element['name']);
                }
              }
            }
          }
        }
      }
    }); */
    /**
     * Se utiliza un bucle para calcular los valores requeridos para el componente subsector-reference-report
     * el cual muestra información de la sección de reporte Referencias. El número de iteraciones depende de la 
     * cantidad de elementos almacenados en el arreglo referencesReportSection
     */
    if (this.referencesReportSection.length > 0) {
      let objectSector = this.sectors.find(sector => {return sector['sectionReport'] == 29});
      this.averageValue = objectSector['average'];
      this.colorConfigReferences = this.referencesReportSection[0]['configColor'];
      if (this.colorConfigReferences == 1) {
        this.range = this.referencesReportSection[0]['rango3'];
      } else {
        this.range = this.referencesReportSection[0]['rango2'];
      }
      for (let i = 0; i < this.referencesReportSection.length; i++) {
        let referenceData = new Object();
        referenceData['nameDescrip'] = this.arrayReferenceDescription[i]['nameDescrip'];
        referenceData['description'] = this.arrayReferenceDescription[i]['description'];
        referenceData['name'] = this.referencesReportSection[i]['name'];
        referenceData['value'] = this.referencesReportSection[i]['value'];
        referenceData['configColor'] = this.referencesReportSection[i]['configColor'];
        referenceData['rango1'] = this.referencesReportSection[i]['rango1'];
        referenceData['rango2'] = this.referencesReportSection[i]['rango2'];
        referenceData['rango3'] = this.referencesReportSection[i]['rango3'];
        this.arrayReferences.push(referenceData);
      }
    }
    /**
     * Se itera el arreglo competenciesReportSection para calcular los valores requeridos para el componente subsector-line
     * el cual muestra información de la sección de reporte Competencias
     */
    if (this.competenciesReportSection.length > 0) {
      let newArrayComp = [];
      let newArrayVerac = [];
      let indexComp = -1;
      let indexVerac = -1;
      let varName = "";
  
      this.competenciesReportSection.forEach(element=> {
        splitNameArray = element['name'].split(' ');
        indexComp = splitNameArray.indexOf("competencia");
        indexVerac = splitNameArray.indexOf("veracidad");
        varName = "";
        /**
         * Se copia el resto del string después de la cadena 'competencia' o 'veracidad' del campo 'name' la cual corresponde
         * al nombre de la variable de la sección de reporte Competencias
         */
        if (indexComp != -1) {
          for (let i = indexComp+1; i < splitNameArray.length; i++) {
            varName = varName + " " + splitNameArray[i];
          }
          newArrayComp.push({name: varName.trim(), value: element['value'], full_name: element['name']});
        } else {
          if (indexVerac != -1) {
            for (let i = indexVerac+1; i < splitNameArray.length; i++) {
              varName = varName + " " + splitNameArray[i];
            }
            newArrayVerac.push({name: varName.trim(), value: element['value'], full_name: element['name']});
          }
        }
      });
      newArrayComp.forEach(elementComp => {
        let words = elementComp['name'].split(' ');
        let stringSequenceObject = this.MakeMap(words[0]);
        let stringSequenceObjectLast = this.MakeMap(words[words.length-1]);
        newArrayVerac.forEach(elementVerac => {
          let dictionary = elementVerac['name'].split(' ');
          if (this.IsSubsequence(dictionary[0], stringSequenceObject) && this.IsSubsequence(dictionary[dictionary.length-1], stringSequenceObjectLast)) {
            this.competenceVariables.push({name: elementComp['name'], comp: elementComp['full_name'], value1: elementComp['value'], verac: elementVerac['full_name'], value2: elementVerac['value']});
          }
        });
      });
    }
    // this.competenceVariables = this.competenceVariables.slice();
    /**
     * Se itera el arreglo risksReportSection para calcular los valores requeridos para el componente subsector-doughnut
     * el cual muestra información de la sección de reporte Riesgos
     */
    if (this.risksReportSection.length > 0) {
      [this.totalVariables1Risk, this.totalVariables2Risk, this.totalVariables3Risk, this.totalVariables4Risk, this.colorConfigRisk] = this.GetInformationForComponent(this.risksReportSection, this.rangesRisk, this.range1RedRisk, this.range2OrangeRisk, this.range3YellowRisk, this.range4GreenRisk);
      this.titleRisk = this.optionsSvc.GetNameSectorReport(this.risksReportSection[0]['seccionReport']);
    }
    /* range1 = this.risksReportSection[0]['rango1'];
    range2 = this.risksReportSection[0]['rango2'];
    range3 = this.risksReportSection[0]['rango3'];
    this.colorConfigRisks = this.risksReportSection[0]['configColor'];
    this.risksReportSection.forEach(element => {
      if (this.colorConfigRisks == 1 ) { // verde a rojo
        if (parseFloat(element['value']) <= range1) {
          this.totalVariables4 += 1;
        } else {
          if (parseFloat(element['value']) > range1 && parseFloat(element['value']) <= range2) {
            this.totalVariables3 += 1;
          } else {
            if (parseFloat(element['value']) > range2 && parseFloat(element['value']) <= range3) {
              this.totalVariables2 += 1;
            } else {
              if (parseFloat(element['value']) > range3) {
                this.totalVariables1 += 1;
              }
            }
          }
        }
      } else {// rojo a verde
        if (this.colorConfigRisks == 2) {
          if (parseFloat(element['value']) <= range1) {
            this.totalVariables1 += 1;
          } else {
            if (parseFloat(element['value']) > range1 && parseFloat(element['value']) <= range2) {
              this.totalVariables2 += 1;
            } else {
              if (parseFloat(element['value']) > range2 && parseFloat(element['value']) <= range3) {
                this.totalVariables3 += 1;
              } else {
                if (parseFloat(element['value']) > range3) {
                  this.totalVariables4 += 1;
                }
              }
            }
          }
        }
      }
    }); */    
    /**
     * Se realizan los cálculos para obtener los puntajes de las secciones de reporte: 
     * Fraude, Referencias, Competencias(Apego, Veracidad y Autocalificación) y Riesgos(Personales y Entorno)
     */
    let fraudScope = "";
    let competenciesScope = "";
    let competenciesAttachmentScope = "";
    let competenciesSelf_qualificationScope = "";
    let competenciesTruthfulnessScope = "";
    let risksScope = "";
    let risksPersonalScope = "";
    let risksEnvironmentScope = "";
    let referencesScope = "";

    this.sectors.forEach(element => {
      if (element['sectionReport'] == 12) {
        fraudScope = this.GetFactorScore(element['range1'], element['range2'], element['range3'], element['average'], element['colorConfig']);
      } else {
          if (element['sectionReport'] == 29) {
            referencesScope = this.GetFactorScore(element['range1'], element['range2'], element['range3'], element['average'], element['colorConfig']);
          }
      }
    });
    if (countApeg != 0 && countVera != 0 && countAuto != 0) {
      let averageApeg = this.Round(sumApeg/countApeg);
      competenciesAttachmentScope = this.GetFactorScore(range1Comp, range2Comp, range3Comp, averageApeg, configColorComp);
      let averageVera = this.Round(sumVera/countVera);
      competenciesTruthfulnessScope = this.GetFactorScore(range1Comp, range2Comp, range3Comp, averageVera, configColorComp);
      let averageAuto = this.Round(sumAuto/countAuto);
      competenciesSelf_qualificationScope = this.GetFactorScore(range1Comp, range2Comp, range3Comp, averageAuto, configColorComp);
      competenciesScope = this.GetFactorScore(range1Comp, range2Comp, range3Comp, this.Round((averageApeg + averageVera + averageAuto)/3), configColorComp);
    }
    if (countPers != 0 && countEnto != 0) {
      let averagePers = this.Round(sumPers/countPers);
      risksPersonalScope = this.GetFactorScore(range1Ries, range2Ries, range3Ries, averagePers, configColorRies);
      let averageEnto = this.Round(sumEnto/countEnto);
      risksEnvironmentScope = this.GetFactorScore(range1Ries, range2Ries, range3Ries, averageEnto, configColorRies);
      risksScope = this.GetFactorScore(range1Ries, range2Ries, range3Ries, this.Round((averagePers + averageEnto)/2), configColorRies);
    }
    /**
     * Se manda a llamar el árbol de decisión para obtener el texto general que se mostrará en el reporte principal. Además, de obtener de manera
     * individual los textos correspondientes a cada sección de reporte
     */    
    let [Text1, Text2, Text3, Text4, Text5] = module.metodoArbolDecision(fraudScope, competenciesScope, competenciesAttachmentScope, competenciesSelf_qualificationScope, competenciesTruthfulnessScope, risksScope, risksPersonalScope, risksEnvironmentScope, referencesScope);
    this.fraudText = Text1;
    this.referencesText = Text2;
    this.competenciesText = Text3;
    this.risksText = Text4;
    this.descriptionText = Text5;
  }
  
  SortAsc(rows, key): void {
    rows.sort(function (a, b) {
      return a[key] - b[key];
    });
  }

  ShowTankGaugeChart(container: any, rowsData: any): void {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);
    let stage = anychart.graphics.create(container);
    // create data
    let data = [rowsData['average']];
    // set the gauge type
    this.gauge = anychart.gauges.tank();
    // set the data for the gauge
    this.gauge.data(data);
    // create the first pointer (tank)
    let tank = this.gauge.tank(0);
    let name = this.optionsSvc.GetNameSectorReport(rowsData['sectionReport']);
    let color = this.optionsSvc.GetRangeColor(rowsData['range1'], rowsData['range2'], rowsData['range3'], rowsData['average'],rowsData['colorConfig']);
    tank.name(name);
    tank.color(color);
    // set the width and offset of the tank pointer (both as percentages of the gauge width)
    tank.width('50%');
    tank.offset('-20%');
    // configure the scale
    let scale = this.gauge.scale();
    scale.minimum(0);
    scale.maximum(100);
    //configure a linear scale
    let lScale = anychart.scales.linear();
    lScale.minimum(0);
    lScale.maximum(100);
    lScale.ticks().interval(10);
    lScale.minorTicks().interval(1);
    // configure the axis
    let axis = this.gauge.axis();
    axis.minorTicks(true);
    axis.minorTicks().stroke('#cecece');
    axis.offset('-35%');
    axis.scale(lScale);
    // Get legend.
    let legend = this.gauge.legend();
    legend.enabled(true);
    legend.position('top');
    legend.itemsLayout('horizontal');
    legend.align('left');
    // listener
    const self = this;
    this.gauge.listen('pointClick', function (e) {
      self.averageValue = e['currentTarget']['Rf'][0];
      self.itemDoughnut = -1;
      let sectionReport = 0;
      self.sectors.forEach(element => {
        if (self.averageValue === element['average']) {
          sectionReport = element['sectionReport'];
        }
      });
      // sección de reporte Fraude
      if (sectionReport == 12) {
        self.selection['selectedComponent'] = 1;
        self.descriptionTextSubsector = self.fraudText.slice();
        self.range1Red = self.range1RedFraud.slice();
        self.range2Orange = self.range2OrangeFraud.slice();
        self.range3Yellow = self.range3YellowFraud.slice();
        self.range4Green = self.range4GreenFraud.slice();
        self.ranges = self.rangesFraud.slice();
        self.title = self.titleFraud.slice();
        self.colorConfig = self.colorConfigFraud;
      } else {
        // sección de reporte Competencias
        if (sectionReport == 16) {
          self.selection['selectedComponent'] = 5;
        } else {
          // sección de reporte Riesgos
          if (sectionReport == 18) {
            self.selection['selectedComponent'] = 4;
            self.descriptionTextSubsector = self.risksText.slice();
            self.totalVariables1 = self.totalVariables1Risk;
            self.totalVariables2 = self.totalVariables2Risk;
            self.totalVariables3 = self.totalVariables3Risk;
            self.totalVariables4 = self.totalVariables4Risk;
            self.range1Red = self.range1RedRisk.slice();
            self.range2Orange = self.range2OrangeRisk.slice();
            self.range3Yellow = self.range3YellowRisk.slice();
            self.range4Green = self.range4GreenRisk.slice();
            self.ranges = self.rangesRisk.slice();
            self.title = self.titleRisk.slice();
            self.colorConfig = self.colorConfigRisk;
          } else {
            // sección de reporte Referencias
            if (sectionReport == 29) {
              self.selection['selectedComponent'] = 2;
            } else {
              // sección de reporte Varios
              self.selection['selectedComponent'] = 1;
              self.rowsSubSector.length = 0;
              self.rows.forEach(element => {
                if (sectionReport === element['seccionReport'] && !isNaN(element['value'])) {
                  self.rowsSubSector.push(element);
                }
              });
              [self.totalVariables1, self.totalVariables2, self.totalVariables3, self.totalVariables4, self.colorConfig] = self.GetInformationForComponent(self.rowsSubSector, self.ranges, self.range1Red, self.range2Orange, self.range3Yellow, self.range4Green);
              self.title = self.optionsSvc.GetNameSectorReport(self.rowsSubSector[0]['seccionReport']);
              self.descriptionTextSubsector = "";
            }
          }
        }
      }
      self.selection['selectedIndex'] = sectionReport;
      self.SetOption(self.selection);
      /* self.competenceVariables.length = 0;
      self.itemDoughnut = -1;
      self.totalVariables1 = 0;
      self.totalVariables2 = 0;
      self.totalVariables3 = 0;
      self.totalVariables4 = 0;
      self.ranges.length = 0;
      self.range1Red.length = 0;
      self.range2Orange.length = 0;
      self.range3Yellow.length = 0;
      self.range4Green.length = 0;
      self.rowsSubSector.length = 0;
      self.arrayReferences.length = 0;
      self.averageValue = e['currentTarget']['Rf'][0];
      let sectionReport = 0;
      self.sectors.forEach(element => {
        if (self.averageValue === element['average']) {
          sectionReport = element['sectionReport'];
        }
      });
      self.rows.forEach(element => {
        if (sectionReport === element['seccionReport'] && !isNaN(element['value'])) {
          self.rowsSubSector.push(element);
        }
      });
      // sección de reporte Riesgos
      if (sectionReport == 18) {
        self.selection['selectedComponent'] = 4;
        self.descriptionTextSubsector = self.risksText.slice();
      } else {
        // sección de reporte Competencias
        if (sectionReport == 16) {
          self.selection['selectedComponent'] = 5;
          let newArrayComp = [];
          let newArrayVerac = [];
          let splitNameArray = [];
          let indexComp = -1;
          let indexVerac = -1;
          let varName = "";

          self.rowsSubSector.forEach(element=> {
            splitNameArray = element['name'].split(' ');
            indexComp = splitNameArray.indexOf("competencia");
            indexVerac = splitNameArray.indexOf("veracidad");
            varName = "";
            if (indexComp != -1) {
              for (let i = indexComp+1; i < splitNameArray.length; i++) {
                varName = varName + " " + splitNameArray[i];
              }
              newArrayComp.push({name: varName.trim(), value: element['value'], full_name: element['name']});
            } else {
              if (indexVerac != -1) {
                for (let i = indexVerac+1; i < splitNameArray.length; i++) {
                  varName = varName + " " + splitNameArray[i];
                }
                newArrayVerac.push({name: varName.trim(), value: element['value'], full_name: element['name']});
              }
            }
          });
          newArrayComp.forEach(elementComp => {
            let words = elementComp['name'].split(' ');
            let stringSequenceObject = self.MakeMap(words[0]);
            let stringSequenceObjectLast = self.MakeMap(words[words.length-1]);
            newArrayVerac.forEach(elementVerac => {
              let dictionary = elementVerac['name'].split(' ');
              if (self.IsSubsequence(dictionary[0], stringSequenceObject) && self.IsSubsequence(dictionary[dictionary.length-1], stringSequenceObjectLast)) {
                self.competenceVariables.push({name: elementComp['name'], comp: elementComp['full_name'], value1: elementComp['value'], verac: elementVerac['full_name'], value2: elementVerac['value']});
              }
            });
          });
          self.competenceVariables = self.competenceVariables.slice();
        } else {
          // sección de reporte Referencias
          if (sectionReport == 29) {
            self.selection['selectedComponent'] = 2;
            if (self.rowsSubSector[0]['configColor'] == 1) {
              self.range = self.rowsSubSector[0]['rango3'];
            } else {
              self.range = self.rowsSubSector[0]['rango2'];
            }
            for (let i = 0; i < self.rowsSubSector.length; i++) {
              let referenceData = new Object();
              referenceData['nameDescrip'] = self.arrayReferenceDescription[i]['nameDescrip'];
              referenceData['description'] = self.arrayReferenceDescription[i]['description'];
              referenceData['name'] = self.rowsSubSector[i]['name'];
              referenceData['value'] = self.rowsSubSector[i]['value'];
              referenceData['configColor'] = self.rowsSubSector[i]['configColor'];
              referenceData['rango1'] = self.rowsSubSector[i]['rango1'];
              referenceData['rango2'] = self.rowsSubSector[i]['rango2'];
              referenceData['rango3'] = self.rowsSubSector[i]['rango3'];
              self.arrayReferences.push(referenceData);
            }
          } else {
            // sección de reporte Fraude
            if (sectionReport == 12) {
              self.selection['selectedComponent'] = 1;
              self.descriptionTextSubsector = self.fraudText.slice();
            } else {
              self.selection['selectedComponent'] = 1;
            }
          }
        }
      } 
      self.selection['selectedIndex'] = sectionReport;
      self.SetOption(self.selection);

      let range1 = self.rowsSubSector[0]['rango1'];
      let range2 = self.rowsSubSector[0]['rango2'];
      let range3 = self.rowsSubSector[0]['rango3'];
      self.colorConfig = self.rowsSubSector[0]['configColor'];
      self.ranges.push(range1);
      self.ranges.push(range2);
      self.ranges.push(range3);
      self.title = self.optionsSvc.GetNameSectorReport(self.rowsSubSector[0]['seccionReport']);
      self.rowsSubSector.forEach(element => {
        if (self.colorConfig == 1 ) { // verde a rojo
          if (parseFloat(element['value']) <= range1) {
            self.range4Green.push(element['name']);
            self.totalVariables4 += 1;
          } else {
            if (parseFloat(element['value']) > range1 && parseFloat(element['value']) <= range2) {
              self.range3Yellow.push(element['name']);
              self.totalVariables3 += 1;
            } else {
              if (parseFloat(element['value']) > range2 && parseFloat(element['value']) <= range3) {
                self.range2Orange.push(element['name']);
                self.totalVariables2 += 1;
              } else {
                if (parseFloat(element['value']) > range3) {
                  self.range1Red.push(element['name']);
                  self.totalVariables1 += 1;
                }
              }
            }
          }
        } else {// rojo a verde
          if (self.colorConfig == 2) {
            if (parseFloat(element['value']) <= range1) {
              self.range1Red.push(element['name']);
              self.totalVariables1 += 1;
            } else {
              if (parseFloat(element['value']) > range1 && parseFloat(element['value']) <= range2) {
                self.range2Orange.push(element['name']);
                self.totalVariables2 += 1;
              } else {
                if (parseFloat(element['value']) > range2 && parseFloat(element['value']) <= range3) {
                  self.range3Yellow.push(element['name']);
                  self.totalVariables3 += 1;
                } else {
                  if (parseFloat(element['value']) > range3) {
                    self.range4Green.push(element['name']);
                    self.totalVariables4 += 1;
                  }
                }
              }
            }
          }
        }
      }); */
    });
    // set the container id
    this.gauge.container(stage);
    // initiate drawing the gauge
    this.gauge.draw();
  }

  ShowInfo(): void {
    // this.isShowInfo == true ? this.isShowInfo = false : this.isShowInfo = true;
    const modalRef = this.modalService.open(MoreInformationComponent);
    modalRef.componentInstance.arrayGeneral = this.arrayGeneral;
    modalRef.componentInstance.arrayQualitative = this.arrayQualitative;
    modalRef.componentInstance.arrayQuantitative = this.arrayQuantitative;
  }

  SetOption(option: Options): void {
    this.optionsSvc.setOptions(option);
  }

  GetDescription(): string {
    return this.descriptionText;
  }

  GetSelectedComponent(): number {
    return this.selection['selectedComponent'];
  }

  ngAfterViewInit() {
    let container = this.el.nativeElement.querySelector('#row2');
    let graphicCont = container.querySelectorAll('div.column2 > div.graphics > div.tank');
    this.graphicsContainer = Array.from(graphicCont);
    this.graphicsContainer.forEach((element, index)=> {
      this.ShowTankGaugeChart(element, this.sectors[index]);
    });
  }
  
  GetpropertyName(name: string): void {
    let arrayReportSection = [];
    if (this.selection['selectedIndex'] == 12) {
      arrayReportSection = this.fraudReportSection.slice();
    } else {
      if (this.selection['selectedIndex'] == 16) {
        arrayReportSection = this.competenciesReportSection.slice();
      } else {
        if (this.selection['selectedIndex'] == 18) {
          arrayReportSection = this.risksReportSection.slice();
        } else {
          arrayReportSection = this.rowsSubSector.slice();
        }
      }
    }
    this.propertyName = name;
    arrayReportSection.forEach(element => {
      if (name === element['name']) {
        this.propertyColorConfig = element['configColor'];
        let value = parseFloat(element['value']);
        let range1 = element['rango1'];
        let range2 = element['rango2'];
        let range3 = element['rango3'];
        let score = "";
        if (value <= 0) {
          this.propertyValue = 1;
          score = "bajo";
        } else {
          if (value <= range1) {
            this.propertyValue = this.Round(this.normalizeRange(value, range1, this.multiplier1));
            score = "bajo";
          } else {
            if (value > range1 && value <= range2) {
              this.propertyValue = this.Round(this.normalizeRange(value, range2, this.multiplier2));
              score = "medioBajo";
            } else {
              if (value > range2 && value <= range3) {
                this.propertyValue = this.Round(this.normalizeRange(value, range3, this.multiplier3));
                score = "medioAlto";
              } else {
                if (value > range3) {
                  this.propertyValue = 99;
                  score = "alto";
                }
              }
            }
          }
        }
        if (this.propertyColorConfig == 1) {
          this.recommendedScore = this.normalizeRange(range3, range3, this.multiplier3);
        } else {
          this.recommendedScore = this.normalizeRange(range2, range2, this.multiplier2);
        }
        this.variableScore = value;
        this.variableDescriptionText = this.GetDescriptionTextVariable(element['seccionReport'], element['name'], score);
      }
    });
  }

  GetPropertyValue(variable: object): number{
    let value = parseFloat(variable['value']);
    let range1 = variable['rango1'];
    let range2 = variable['rango2'];
    let range3 = variable['rango3'];
    let propertyValue_ = -1;

    if (value <= 0) {
      propertyValue_ = 1;
    } else {
      if (value <= range1) {
        propertyValue_ = this.Round(this.normalizeRange(value, range1, this.multiplier1));
      } else {
        if (value > range1 && value <= range2) {
          propertyValue_ = this.Round(this.normalizeRange(value, range2, this.multiplier2));
        } else {
          if (value > range2 && value <= range3) {
            propertyValue_ = this.Round(this.normalizeRange(value, range3, this.multiplier3));
          } else {
            if (value > range3) {
              propertyValue_ = 99;
            }
          }
        }
      }
    }
    return propertyValue_;
  }

  GetRecommendedScore(colorConfig: number, range3: number, range2: number): number{
    let recommendedScore_ = -1;
    if (colorConfig == 1) {
      recommendedScore_ = this.normalizeRange(range3, range3, this.multiplier3);
    } else {
      recommendedScore_ = this.normalizeRange(range2, range2, this.multiplier2);
    }
    return recommendedScore_;
  }

  GetDescriptionTextFraud(variable: object): string{
    let variableNamesFraud = this.optionsSvc.variableNamesFraud.slice();
    let score = this.GetVariableScore(variable['value'], variable['rango1'], variable['rango2'], variable['rango3']);
    let text = module.getTextoVariablesFraude(variableNamesFraud, variable['name'], score);
    return text;
  }

  GetVariableScore(variableValue: string, variableRange1: number, variableRange2: number, variableRange3: number): string{
    let value = parseFloat(variableValue);
    let range1 = variableRange1;
    let range2 = variableRange2;
    let range3 = variableRange3;
    let score = "";

    if (value <= 0) {
      score = "bajo";
    } else {
      if (value <= range1) {
        score = "bajo";
      } else {
        if (value > range1 && value <= range2) {
          score = "medioBajo";
        } else {
          if (value > range2 && value <= range3) {
            score = "medioAlto";
          } else {
            if (value > range3) {
              score = "alto";
            }
          }
        }
      }
    }
    return score;
  }

  GetDescriptionTextRisk(variable: object): string{
    let splitNameArray = variable['name'].split(' ');
    let indexPers = splitNameArray.indexOf("personal");
    let indexEnto = splitNameArray.indexOf("entorno");
    let score = this.GetVariableScore(variable['value'], variable['rango1'], variable['rango2'], variable['rango3']);
    let variableNamesRisks = this.optionsSvc.variableNamesRisks.slice();
    let varName = "";
    let typeRisk = "";
    let text = "";
    
    if (indexPers != -1) {
      for (let i = indexPers+1; i < splitNameArray.length; i++) {
        varName = varName + " " + splitNameArray[i];
        typeRisk = "personal";
      }
    }
    if (indexEnto != -1) {
      for (let i = indexEnto+1; i < splitNameArray.length; i++) {
        varName = varName + " " + splitNameArray[i];
        typeRisk = "entorno";
      }
    }
    varName = varName.trim();
    if (typeRisk === "personal") {
      text = module.getTextoVariablesRiesgosPersonal(variableNamesRisks, varName, score);
    }
    if (typeRisk === "entorno") {
      text = module.getTextoVariablesRiesgosEntorno(variableNamesRisks, varName, score);
    }
    return text;
  }

  GetDescriptionTextCompetencies(variable: object): string{
    let splitNameArray = variable['name'].split(' ');
    let indexComp = splitNameArray.indexOf("competencia");
    let indexVerac = splitNameArray.indexOf("veracidad");
    let score = this.GetVariableScore(variable['value'], variable['rango1'], variable['rango2'], variable['rango3']);
    let variableNamesCompetencies = this.optionsSvc.variableNamesCompetencies.slice();
    let varName = "";
    let text = "";
    
    if (indexComp != -1) {
      for (let i = indexComp+1; i < splitNameArray.length; i++) {
        varName = varName + " " + splitNameArray[i];
      }
    }
    if (indexVerac != -1) {
      for (let i = indexVerac+1; i < splitNameArray.length; i++) {
        varName = varName + " " + splitNameArray[i];
      }
    }
    varName = varName.trim();
    text = module.getTextoVariablesCompetencias(variableNamesCompetencies, varName, score);
    return text;
  }

  normalizeRange(value: number, range: number , multiplier: number): number{
    var result = ((value*100)/range)*multiplier;
    return result;
  }

  Round(num): number {
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
  }

  GetItemDoughnut(index: number): void {
    this.itemDoughnut = index;
  }

  MakeMap(string_: string): Object {
    let map = {};
    for (let i = 0; i < string_.length; i++) {
      let letter = string_[i];
      if (map[letter]) {
        map[letter].push(i);
      } else {
        map[letter] = [i];
      }
    }
    return map;
  }
  
  IsSubsequence(word: string, map: Object): boolean {
    let minIndex = 0;
    for (let i = 0; i < word.length; i++) {
      if (map[word[i]]) {
        minIndex = this.FindNextIndex(map[word[i]], minIndex);
        if (minIndex === 0) {
          return false;
        }
      } else {
        return false
      }
    }
    return true;
  }
  
  FindNextIndex(array: number[], minIndex: number): number{
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= minIndex) {
        return array[i] + 1;
      }
    }
    return 0;
  }

  GetFactorScore(range1: number, range2: number, range3: number, average: number, configColor: number): string {
    let factorScore = "";

    if (configColor == 1 ) {
      if (average <= range1) {
        factorScore = "alto";
      } else {
        if (average > range1 && average <= range2) {
          factorScore = "medioAlto";
        } else {
          if (average > range2 && average <= range3) {
            factorScore = "medioBajo";
          } else {
            if (average > range3) {
              factorScore = "bajo";
            }
          }
        }
      }
    } else {
      if (configColor == 2) {
        if (average <= range1) {
          factorScore = "bajo";
        } else {
          if (average > range1 && average <= range2) {
            factorScore = "medioBajo";
          } else {
            if (average > range2 && average <= range3) {
              factorScore = "medioAlto";
            } else {
              if (average > range3) {
                factorScore = "alto";
              }
            }
          }
        }
      }
    }
    return factorScore;
  }

  ExportPDF(): void {
    if (this.isExport == true) {
      this.isExport = false;
    } else {
      this.isExport = true;
      setTimeout(() => { 
        this.DownloadPDF(); 
        this.isExport = false;
      }, 3000);
    }
  }

  GetDescriptionTextVariable(sectionReport: number, variableName: string, variableScore: string): string {
    let text = "";
    if (sectionReport == 12) {
      let variableNamesFraud = this.optionsSvc.variableNamesFraud.slice();
      text = module.getTextoVariablesFraude(variableNamesFraud, variableName, variableScore);
    } else {
      if (sectionReport == 16) {
        let splitNameArray = variableName.split(' ');
        let indexComp = splitNameArray.indexOf("competencia");
        let indexVerac = splitNameArray.indexOf("veracidad");
        let variableNamesCompetencies = this.optionsSvc.variableNamesCompetencies.slice();
        let varName = "";
        
        if (indexComp != -1) {
          for (let i = indexComp+1; i < splitNameArray.length; i++) {
            varName = varName + " " + splitNameArray[i];
          }
        }
        if (indexVerac != -1) {
          for (let i = indexVerac+1; i < splitNameArray.length; i++) {
            varName = varName + " " + splitNameArray[i];
          }
        }
        varName = varName.trim();
        text = module.getTextoVariablesCompetencias(variableNamesCompetencies, varName, variableScore);
      } else {
        if (sectionReport == 18) {
          let splitNameArray = variableName.split(' ');
          let indexPers = splitNameArray.indexOf("personal");
          let indexEnto = splitNameArray.indexOf("entorno");
          let variableNamesRisks = this.optionsSvc.variableNamesRisks.slice();
          let varName = "";
          let typeRisk = "";
          
          if (indexPers != -1) {
            for (let i = indexPers+1; i < splitNameArray.length; i++) {
              varName = varName + " " + splitNameArray[i];
              typeRisk = "personal";
            }
          }
          if (indexEnto != -1) {
            for (let i = indexEnto+1; i < splitNameArray.length; i++) {
              varName = varName + " " + splitNameArray[i];
              typeRisk = "entorno";
            }
          }
          varName = varName.trim();
          if (typeRisk === "personal") {
            text = module.getTextoVariablesRiesgosPersonal(variableNamesRisks, varName, variableScore);
          }
          if (typeRisk === "entorno") {
            text = module.getTextoVariablesRiesgosEntorno(variableNamesRisks, varName, variableScore);
          }
        } 
      }
    }
    return text;
  }

  GetInformationForComponent(reportSection: any[], ranges: any[], range1Red: any[], range2Orange: any[], range3Yellow: any[], range4Green: any[]): number[]{
    let range1 = reportSection[0]['rango1'];
    let range2 = reportSection[0]['rango2'];
    let range3 = reportSection[0]['rango3'];
    let totalVariables1 = 0;
    let totalVariables2 = 0;
    let totalVariables3 = 0;
    let totalVariables4 = 0;
    let colorConfig = 0;
    ranges.length = 0;
    range1Red.length = 0;
    range2Orange.length = 0;
    range3Yellow.length = 0;
    range4Green.length = 0;
    
    ranges.push(range1);
    ranges.push(range2);
    ranges.push(range3);
    colorConfig = reportSection[0]['configColor'];
    reportSection.forEach(element => {
      if (colorConfig == 1 ) { // verde a rojo
        if (parseFloat(element['value']) <= range1) {
          range4Green.push(element['name']);
          totalVariables4 += 1;
        } else {
          if (parseFloat(element['value']) > range1 && parseFloat(element['value']) <= range2) {
            range3Yellow.push(element['name']);
            totalVariables3 += 1;
          } else {
            if (parseFloat(element['value']) > range2 && parseFloat(element['value']) <= range3) {
              range2Orange.push(element['name']);
              totalVariables2 += 1;
            } else {
              if (parseFloat(element['value']) > range3) {
                range1Red.push(element['name']);
                totalVariables1 += 1;
              }
            }
          }
        }
      } else {// rojo a verde
        if (colorConfig == 2) {
          if (parseFloat(element['value']) <= range1) {
            range1Red.push(element['name']);
            totalVariables1 += 1;
          } else {
            if (parseFloat(element['value']) > range1 && parseFloat(element['value']) <= range2) {
              range2Orange.push(element['name']);
              totalVariables2 += 1;
            } else {
              if (parseFloat(element['value']) > range2 && parseFloat(element['value']) <= range3) {
                range3Yellow.push(element['name']);
                totalVariables3 += 1;
              } else {
                if (parseFloat(element['value']) > range3) {
                  range4Green.push(element['name']);
                  totalVariables4 += 1;
                }
              }
            }
          }
        }
      }
    });
    return [totalVariables1, totalVariables2, totalVariables3, totalVariables4, colorConfig];
  }

  /* downloadPDF() {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'mm', 'letter');
    const options = {
      background: 'white',
      scale: 2
    };
    html2canvas(DATA,options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');
      var imgWidth = 210; 
      var pageHeight = 265;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var position = 10; 

     doc.addImage(img, 'JPEG', 15, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pageHeight;
      while (heightLeft >= 20) {
        position = heightLeft - imgHeight; // limits each page with 297mm
        doc.addPage();
        doc.addImage(img, 'JPEG', 15, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight; 
      }
      doc.save('InteractiveGraphicsReport_' + this.getIsoDate(new Date()) + '.pdf');
    });
  } */

  DownloadPDF(): void {
    
    const node = this.container.nativeElement;
    let doc = new jsPDF('p', 'mm', 'letter');
    let scale = 2;

    const style = {
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      width: node.offsetWidth + 'px',
      height: node.offsetHeight + 'px',
      background: 'white',
    };

    const param = {
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,
      quality: 1,
      style: style
    };

    domtoimage.toJpeg(node, param).then((dataUrl) => {
      let img = new Image();
      img.src = dataUrl;

      let pdfWidth = 190;
      let pdfHeight = (param.height * pdfWidth) / param.width;
      let pageHeight = 265;
      let heightLeft = pdfHeight;
      let position = 10; 
      
      doc.addImage(img, 'JPEG', 12, position, pdfWidth, pdfHeight, undefined, 'FAST');
      heightLeft -= pageHeight;
      while (heightLeft >= 20) {
        position = heightLeft - pdfHeight; // limits each page with 297mm
        doc.addPage('letter', 'p');
        doc.addImage(img, 'JPEG', 12, position, pdfWidth, pdfHeight, undefined, 'FAST');
        heightLeft -= pageHeight; 
      }
      doc.save('InteractiveGraphicsReport_' + this.getIsoDate(new Date()) + '.pdf');
    })
    .catch(function(error: any) {
      console.error('oops, something went wrong!', error);
    });
  }

  getIsoDate(dateTmp: Date): string {
    return dateTmp ? dateTmp.getFullYear() + '-' + (dateTmp.getMonth() + 1).toString() + '-' + dateTmp.getDate().toString() : '';
  }
}