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
        {
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
            seccionReport: 4,
            mostrarTitulo: true
        },
        {
            name: "Habilidades 3",
            value: "78",
            rango1: 20,
            rango2: 45,
            rango3: 70,
            configColor: 1,
            seccionReport: 12,
            mostrarTitulo: true
        },
        {
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
            seccionReport: 4,
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
        },
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