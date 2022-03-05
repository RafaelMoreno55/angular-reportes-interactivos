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
}