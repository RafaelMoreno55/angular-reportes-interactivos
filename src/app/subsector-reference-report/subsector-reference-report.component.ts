import { Component, OnInit } from '@angular/core';
import { DataReportService, Options } from 'app/data-report.service';

@Component({
  selector: 'app-subsector-reference-report',
  templateUrl: './subsector-reference-report.component.html',
  styleUrls: ['./subsector-reference-report.component.css']
})
export class SubsectorReferenceReportComponent implements OnInit{
  
  labelDescription: string = "Los resultados indican que el candidato reserva información respecto a los factores: último lugar de trabajo, lo que señala que el sujeto pudo haber tenido una actividad laboral posterior al reportado; último puesto desempeñado, las últimas actividades desempeñadas fueron distintas a las señaladas;  razón de renuncia, existen más razones a la señalada por las cuales el sujeto sale de su lugar de trabajo y en posibilidad de ser recontratado, lo cual señala que el candidato a pesar de su respuesta no se encuentra seguro de ser tomado en cuenta para integrarse nuevamente al equipo de trabajo. Se presenta una alta probabilidad de mentira en los criterios: Accidentes de trabajo y posibilidad de ser recomendado, lo cual indica un posible motivo por el cual la persona sale de su lugar de trabajo."
  selection: Options = {
    selectedComponent: 0,
    selectedIndex: -1
  };

  constructor(private optionsSvc: DataReportService) { 
  }
  
  ngOnInit(): void {
  }

  GoToBack(): void {
    this.selection['selectedComponent'] = 0;
    this.optionsSvc.setOptions(this.selection);
  }
}
