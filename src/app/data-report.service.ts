import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Options {
    selectedComponent: number,
    selectedIndex: number
};

export interface DataSubsector {
    labelTitle: string,
    labelDescription: string
};

export class RPrintEntity {
    name: string;
    value: string;
    rango1: number;
    rango2: number;
    rango3: number;
    configColor: number;
    seccionReport: number;
    mostrarTitulo: boolean;
};

const titleDescription: DataSubsector[] = [
    {
        labelTitle: "factores por nivel de fraude",
        labelDescription: "Los resultados indican que existe una alta probabilidad de que la persona que realizó la entrevista es quien dice ser, sin embargo, se presenta un alta probabilidad de que la información cuantitativa proporcionada sea falsa. Se recomienda revisar lo relativo a la información socioeconómica debido a que existen variables en las que la persona proporcionó información distorsionada."
    },
    {
        labelTitle: "resultados de variables competencias",
        labelDescription: "Los resultados indican un resultado promedio en las competencias evaluadas, el hecho de que haya un porcentaje de veracidad debajo del 75% indica que la persona exageró en el desempeño real de estas competencias"
    },
    {
        labelTitle: "referencias:",
        labelDescription: "Los resultados indican que el candidato reserva información respecto a los factores: último lugar de trabajo, lo que señala que el sujeto pudo haber tenido una actividad laboral posterior al reportado; último puesto desempeñado, las últimas actividades desempeñadas fueron distintas a las señaladas;  razón de renuncia, existen más razones a la señalada por las cuales el sujeto sale de su lugar de trabajo y en posibilidad de ser recontratado, lo cual señala que el candidato a pesar de su respuesta no se encuentra seguro de ser tomado en cuenta para integrarse nuevamente al equipo de trabajo. Se presenta una alta probabilidad de mentira en los criterios: Accidentes de trabajo y posibilidad de ser recomendado, lo cual indica un posible motivo por el cual la persona sale de su lugar de trabajo."
    },
    {
        labelTitle: "factores por nivel de riesgo",
        labelDescription: "Existe una consistencia entre los resultados riesgo persona y riesgo entorno, en el caso específico se encuentra información distorcionada por el sujeto en la mayoría de los factores, sin embargo, esta no genera el suficiente estrés para ser considerando un riesgo de importancia por lo que se recomienda proceder con preguntas específicas de los riesgos para clarificar en el tema. Se presentan como principales riesgos: la fuga de información como factor personal y consumo de drogas en el entorno del candidato."
    }
];

const initReport: Options = {
    selectedComponent: 0,
    selectedIndex: -1
};



@Injectable()
export class DataReportService {

    private optionReport$ = new BehaviorSubject<Options>(initReport);
    dataRows = [
        /* {
          name: "Habilidades 1",
          value: "25",
          rango1: 23,
          rango2: 48,
          rango3: 73,
          configColor: 1,
          seccionReport: 14,
          mostrarTitulo: false
        },
        {
          name: "Habilidades 2",
          value: "65",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 26,
          mostrarTitulo: true
        }, */
        {
          name: "probabilidad de que la persona que contesta no sea el empleado",
          value: "28",
          rango1: 20,
          rango2: 45,
          rango3: 70,
          configColor: 1,
          seccionReport: 12,
          mostrarTitulo: true
        },
        {
          name: "% de información cuantitativa falsa",
          value: "48",
          rango1: 20,
          rango2: 45,
          rango3: 70,
          configColor: 1,
          seccionReport: 12,
          mostrarTitulo: true
        },
        {
          name: "% de veracidad información socioeconómica",
          value: "18",
          rango1: 20,
          rango2: 45,
          rango3: 70,
          configColor: 1,
          seccionReport: 12,
          mostrarTitulo: true
        },
        /* {
          name: "Habilidades 4",
          value: "87",
          rango1: 30,
          rango2: 55,
          rango3: 80,
          configColor: 1,
          seccionReport: 23,
          mostrarTitulo: true
        },
        {
          name: "Habilidades 5",
          value: "27",
          rango1: 23,
          rango2: 48,
          rango3: 73,
          configColor: 1,
          seccionReport: 14,
          mostrarTitulo: true
        },
        {
          name: "Habilidades 6",
          value: "15",
          rango1: 28,
          rango2: 53,
          rango3: 78,
          configColor: 2,
          seccionReport: 17,
          mostrarTitulo: true
        },
        {
          name: "Habilidades 7",
          value: "59",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 26,
          mostrarTitulo: false
        },
        {
          name: "Habilidades 8",
          value: "61",
          rango1: 30,
          rango2: 55,
          rango3: 80,
          configColor: 1,
          seccionReport: 23,
          mostrarTitulo: false
        }, */
        {
          name: "riesgo personal acoso laboral",
          value: "5",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 18,
          mostrarTitulo: true
        },
        {
          name: "riesgo personal grupo delictivo",
          value: "10",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 18,
          mostrarTitulo: true
        },
        {
          name: "riesgo entorno robo",
          value: "65",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 18,
          mostrarTitulo: true
        },
        {
          name: "riesgo personal soborno",
          value: "29",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 18,
          mostrarTitulo: true
        },
        {
          name: "riesgo entorno reportar información falsa",
          value: "79",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 18,
          mostrarTitulo: false
        },
        {
          name: "riesgo entorno fuga de información",
          value: "45",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 18,
          mostrarTitulo: false
        },
        {
          name: "% apego puntaje competencia analítico",
          value: "38",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "autocalificación analítico",
          value: "90",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "veracidad analítico",
          value: "16.56",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "% apego puntaje competencia aprendizaje práctico",
          value: "49",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "autocalificación aprendizaje práctico",
          value: "90",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "veracidad aprendizaje práctico",
          value: "20.29",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "% apego puntaje competencia negociación",
          value: "49",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "autocalificación negociación",
          value: "90",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "veracidad negociación",
          value: "18.25",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "% apego puntaje competencia trabajo en equipo",
          value: "49",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "autocalificación trabajo en equipo",
          value: "90",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "veracidad trabajo en equipo",
          value: "18.25",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 16,
          mostrarTitulo: true
        },
        {
          name: "Número de Solicitud",
          value: "BBVARH20220000102",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 11,
          mostrarTitulo: true
        },
        {
          name: "Fecha creación solicitud",
          value: "04/11/2022",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 11,
          mostrarTitulo: true
        },
        {
          name: "Área por la que llegó",
          value: "NISA RAMIREZ",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 11,
          mostrarTitulo: false
        },
        {
          name: "Jefe inmediato responsable",
          value: "ARIADNE FORASTIERI",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 11,
          mostrarTitulo: false
        },
        {
          name: "RFC del cliente",
          value: "ANA MARIA ROSALES ROBLES",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 11,
          mostrarTitulo: false
        },
        {
          name: "Nombre de quien contesto la solicitud",
          value: "ANA MARIA ROSALES ROBLES",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 11,
          mostrarTitulo: false
        },
        {
          name: "Nombre del empleado",
          value: "ANA MARIA ROSALES ROBLES",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 11,
          mostrarTitulo: false
        },
        {
          name: "Domicilio del entrevistado",
          value: "PRIVADA LUISA 5 COLONIA DEL LAGO",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 11,
          mostrarTitulo: false
        },
        {
          name: "Tipo de entrevista",
          value: "ENTREVISTA CANDIDATO",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 11,
          mostrarTitulo: false
        },
        {
          name: "Años vivir en domicilio",
          value: "4",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 11,
          mostrarTitulo: false
        },
        {
          name: "Familiares Trabajando en misma empresa",
          value: "NADIE",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 4,
          mostrarTitulo: false
        },
        {
          name: "años que trabajo",
          value: "3",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 4,
          mostrarTitulo: false
        },
        {
          name: "% de veracidad de los años que trabajo",
          value: "10",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 4,
          mostrarTitulo: false
        },
        {
          name: "razon por la que renunció",
          value: "SE DESHIZO EL AREA",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 4,
          mostrarTitulo: false
        },
        {
          name: "% veracidad de la razon por la que renunció",
          value: "67.92",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 4,
          mostrarTitulo: false
        },
        {
          name: "% Probabilidad información cualitativa falsa",
          value: "87.50",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 4,
          mostrarTitulo: false
        },
        {
          name: "% Probabilidad información cuantitativa falsa",
          value: "26.31",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 5,
          mostrarTitulo: false
        },
        {
          name: "Sueldo Solicitad",
          value: "40000",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 5,
          mostrarTitulo: false
        },
        {
          name: "% Veracidad de beneficio indicado",
          value: "81.50",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 5,
          mostrarTitulo: false
        },
        {
          name: "Gasto familiar",
          value: "10000",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 5,
          mostrarTitulo: false
        },
        {
          name: "Pesos totales de deuda",
          value: "200000",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 5,
          mostrarTitulo: false
        },
        {
          name: "Sueldo último empleo",
          value: "40000",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 5,
          mostrarTitulo: false
        },
        {
          name: "% de veracidad del sueldo que tenia",
          value: "82.33",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 2,
          seccionReport: 5,
          mostrarTitulo: false
        },
        {
          name: "Nombre del último lugar de trabajo",
          value: "Clínica Dental Río",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Porcentaje de veracidad",
          value: "60.83",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Puesto desempeñado",
          value: "Secretaria",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Porcentaje de veracidad",
          value: "62.33",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Razón por la que renunció",
          value: "Por la pandemia de COVID y seguí con los semestres de clases desde mi casa",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Porcentaje de veracidad",
          value: "89.67",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Respuesta a estuvo involucrado en accidentes",
          value: "No hubo ningún accidente",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Porcentaje de veracidad",
          value: "41.33",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Respuesta a si lo recomendarían",
          value: "Estoy seguro que me recomendarían",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Porcentaje de veracidad",
          value: "45.83",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Respuesta a si lo recontratarían",
          value: "Estoy seguro que me recontratarían",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
        {
          name: "Porcentaje de veracidad",
          value: "3",
          rango1: 25,
          rango2: 50,
          rango3: 75,
          configColor: 1,
          seccionReport: 29,
          mostrarTitulo: false
        },
    ];
    variableNamesFraud = [
      "probabilidad de que la persona que contesta no sea el empleado",
      "% de información cuantitativa falsa",
      "% de veracidad información socioeconómica"
    ];
    variableNamesCompetencies = [
      "negociación",
      "orientación a resultado",
      "habilidad de comunicación",
      "orientación servicio al cliente",
      "liderazgo e influencia",
      "analítico",
      "planeación y organización",
      "aprendizaje práctico",
      "tolerancia a la frustración",
      "solución de problemas",
      "trabajo en equipo",
      "seguimiento",
      "atención al cliente",
      "manejo de conflictos",
      "gusto por la rutina",
      "interés por satisfacción del cliente",
      "persuación y ventas",
      "conciencia de seguridad"
    ];
    variableNamesRisks = [
      "fuga de información",
      "robo",
      "riesgo de cometer delitos",
      "soborno",
      "reportar información falsa",
      "drogas",
      "alcohol",
      "apuestas",
      "grupo delictivo",
      "extorsión",
      "acoso laboral",
      "hostigamiento sexual"
    ];

    rows: any = [];
    indices: any = [];

    constructor() { }

    get selectedOption$(): Observable<Options> {
        return this.optionReport$.asObservable();
    }

    setOptions(option: Options): void {
        this.optionReport$.next(option);
    }

    getTitleDescription(index: number): DataSubsector {
        return titleDescription[index];
    }

    getRows(): any[] {
        for (let i = 0; i < this.dataRows.length; i++) {
            let rowsReport = new RPrintEntity();
            rowsReport.configColor = this.dataRows[i].configColor;
            rowsReport.mostrarTitulo = this.dataRows[i].mostrarTitulo;
            rowsReport.name = this.dataRows[i].name;
            rowsReport.rango1 = this.dataRows[i].rango1;
            rowsReport.rango2 = this.dataRows[i].rango2;
            rowsReport.rango3 = this.dataRows[i].rango3;
            rowsReport.seccionReport = this.dataRows[i].seccionReport;
            rowsReport.value = this.dataRows[i].value;
            this.rows.push(rowsReport);
            if (!this.indices.includes(this.dataRows[i].seccionReport)) {
                this.indices.push(this.dataRows[i].seccionReport);    
            }
        }
        return this.rows;
    }

    GetNameSectorReport(sectorReport: number): string {
        let name: string = "";
        switch (sectorReport) {
          case 1:
            name = "Generales";
            break;
          case 2:
            name = "Riesgo fraude";
            break;
          case 3:
            name = "Riesgo comportamiento";
            break;
          case 4:
            name = "Información cualitativa";
            break;
          case 5:
            name = "Información cuantitativa";
            break;
          case 6:
            name = "Historial pagos y adeudos";
            break;
          case 7:
            name = "Información prevención lavado de dinero";
            break;
          case 8:
            name = "Factibilidad de prospecto por financiera";
            break;
          case 9:
            name = "Factibilidad de prospecto por producto";
            break;
          case 10:
            name = "Expectativa desempeño cartera";
            break;
          case 11:
            name = "Generales";
            break;
          case 12:
            name = "Fraude";
            break;
          case 13:
            name = "Ética";
            break;
          case 14:
            name = "Valores";
            break;
          case 15:
            name = "Ambiente laboral";
            break;
          case 16:
            name = "Competencias";
            break;
          case 17:
            name = "Habilidades";
            break;
          case 18:
            name = "Factores de riesgo";
            break;
          case 19:
            name = "Comparativo factores riesgo";
            break;
          case 20:
            name = "Cuantitativo";
            break;
          case 21:
            name = "Factores de riesgo psicosocial en los centros de trabajo";
            break;
          case 22:
            name = "Detalle de los resultados por categoría y dominio";
            break;
          case 23:
            name = "Prueba de Comportamiento";
            break;
          case 24:
            name = "Apego a puesto";
            break;
          case 25:
            name = "Prueba de personalidad";
            break;
          case 26:
            name = "Nivel de honestidad";
            break;
          case 27:
            name = "Prueba de Inteligencia";
            break;
          case 28:
            name = "Comparaciones múltiples";
            break;
          case 29:
            name = "Referencias";
            break;
        
          default:
            break;
        }
        return name;
    }

    GetRangeColor(range1: number, range2: number, range3: number, average: number, configColor: number): string {
        let color = "";

        if (configColor == 1 ) {
          if (average <= range1) {
            color = "#198754";
          } else {
            if (average > range1 && average <= range2) {
              color = "#ffc107";
            } else {
              if (average > range2 && average <= range3) {
                color = "#fd7e14";
              } else {
                if (average > range3) {
                  color = "#dc3545";
                }
              }
            }
          }
        } else {
          if (configColor == 2) {
            if (average <= range1) {
              color = "#dc3545";
            } else {
              if (average > range1 && average <= range2) {
                color = "#fd7e14";
              } else {
                if (average > range2 && average <= range3) {
                  color = "#ffc107";
                } else {
                  if (average > range3) {
                    color = "#198754";
                  }
                }
              }
            }
          }
        }
        return color;
    }
}