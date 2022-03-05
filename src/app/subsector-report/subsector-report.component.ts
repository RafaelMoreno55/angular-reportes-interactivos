import { Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';
import { DataReportService, Options, DataSubsector } from 'app/data-report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subsector-report',
  templateUrl: './subsector-report.component.html',
  styleUrls: ['./subsector-report.component.css']
})
export class SubsectorReportComponent implements OnInit, OnDestroy {

  @ViewChild('lineChartContainer') lineContainer;
  @ViewChild('doughnutChartContainer') doughnutContainer;
  line: anychart.charts.Cartesian = null;
  doughnut1: anychart.charts.Pie = null;
  doughnut2: anychart.charts.Pie = null;
  isShowCard: number = -1;
  selection: Options = {
    selectedComponent: -1,
    selectedIndex: -1
  }
  private subscription: Subscription | undefined;
  @Input() selectedSubSectorData: DataSubsector = {
    labelTitle: "",
    labelDescription: ""
  };
  _selectedSubSector: number = -1;

  constructor(private optionsSvc: DataReportService) {
   }
   
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => {this.selection = option;});
    this.ShowLineChart();
    this.ShowDoughnutChart();
    /* if (this.selectedSector == 1) {
      this.labelTitle = "factores por nivel de fraude";
      this.labelDescription = "Los resultados indican que existe una alta probabilidad de que la persona que realizó la entrevista es quien dice ser, sin embargo, se presenta un alta probabilidad de que la información cuantitativa proporcionada sea falsa. Se recomienda revisar lo relativo a la información socioeconómica debido a que existen variables en las que la persona proporcionó información distorsionada.";
    } else {
      if (this.selectedSector == 2) {
        this.labelTitle = "resultados de variables competencias";
        this.labelDescription = "Los resultados indican un resultado promedio en las competencias evaluadas, el hecho de que haya un porcentaje de veracidad debajo del 75% indica que la persona exageró en el desempeño real de estas competencias";
        this.ShowLineChart();
      } else {
        if (this.selectedSector == 4) {
          this.labelTitle = "factores por nivel de riesgo";
          this.labelDescription = "Existe una consistencia entre los resultados riesgo persona y riesgo entorno, en el caso específico se encuentra información distorcionada por el sujeto en la mayoría de los factores, sin embargo, esta no genera el suficiente estrés para ser considerando un riesgo de importancia por lo que se recomienda proceder con preguntas específicas de los riesgos para clarificar en el tema. Se presentan como principales riesgos: la fuga de información como factor personal y consumo de drogas en el entorno del candidato.";
          this.ShowDoughnutChart();
        }
      }
    } */
  }

  GoToBack(): void {
    if ( this._selectedSubSector == 4 ) {
      this.selection['selectedIndex'] = this._selectedSubSector;
      this.selection['selectedComponent'] = 1;
      this._selectedSubSector = -1;
    } else {
      this.selection['selectedComponent'] = 0;
    }
    this.SetOption(this.selection); 
  }

  GoToVariableReport(option: number): void{
    this.selection['selectedComponent'] = 3;
    this.SetOption(this.selection); 
  }

  ShowLineChart(): void {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);

    // create data
    let stage = anychart.graphics.create(this.lineContainer.nativeElement);
    let data = [
      { x: "Puntualidad", value: 60.29 },
      { x: "Iniciativa", value: 60.04 },
      { x: "Honradez", value: 55.38 },
      { x: "Responsabilidad", value: 61.13 },
      { x: "Respeto", value: 61.42 }
    ];

    // create a chart
    this.line = anychart.line();

    // create a line series and set the data
    let series = this.line.line(data);

    // set the chart title
    this.line.title("Variables de competencia");

    // set the titles of the axes
    let xAxis = this.line.xAxis();
    xAxis.title("Variables");
    let yAxis = this.line.yAxis();
    yAxis.title("Puntuación");

    const self = this;
    this.line.listen('pointClick', function (e) {
      //self.selection['selectedIndex'] = e['point'].index;
      self.selection['selectedComponent'] = 3;
      self.SetOption(self.selection);
    });

    // set the container id
    this.line.container(stage);

    // initiate drawing the chart
    this.line.draw();
  }

  ShowDoughnutChart(): void {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);

    // create data
    let stage = anychart.graphics.create(this.doughnutContainer.nativeElement);

    // create data
    let data1 = [
      { x: "Riesgo alto", value: 20, normal: {fill: "#dc3545" } },
      { x: "Riesgo medio", value: 100, normal: {fill: "#ffc107" } }
    ];

    // create data
    let data2 = [
      { x: "Riesgo alto", value: 32, normal: {fill: "#dc3545" } },
      { x: "Riesgo medio", value: 100, normal: {fill: "#ffc107" } }
    ];

    // create a pie chart and set the data
    this.doughnut1 = anychart.pie(data1);

    /* set the inner radius
    (to turn the pie chart into a doughnut chart)*/
    this.doughnut1.innerRadius("50%");

    // set the chart title
    this.doughnut1.title("Riesgo personal");

    // configure the firts doughnut chart
    this.doughnut1.bounds(0, 0, "50%", "100%");

    const self = this;
    this.doughnut1.listen('pointsSelect', function (e) {
      self._selectedSubSector = self.selection['selectedIndex'];
      self.selection['selectedIndex'] = e['currentPoint'].index;
      // riesgo alto
      if (self.selection['selectedIndex'] == 0) {
        self.isShowCard = 0;
        self.selectedSubSectorData['labelDescription'] = "Información referente a riesgo alto";
      } else {
        // riesgo medio
        if (self.selection['selectedIndex'] == 1) {
          self.isShowCard = 1;
          self.selectedSubSectorData['labelDescription'] = "El candidato ha proporcionado información distorsionada en los factores: delitos, soborno, uso de drogas, ingesta de bebidas alcohólicas. Lo cual indica que hay posibilidad de que el candidato ejecute estos riesgos bajo las condiciones necesarias que puedan ser interpretadas para éste como justificables. Se recomienda proceder con preguntas específicas de los riesgos";
        }
      }
      self.selectedSubSectorData['labelTitle'] = "factores de riesgo - personal";
      self.selection['selectedIndex'] = -1;
    });
    // set the container id
    this.doughnut1.container(stage);

    // initiate drawing the chart
    this.doughnut1.draw();

    // create a pie chart and set the data
    this.doughnut2 = anychart.pie(data2);

    /* set the inner radius
    (to turn the pie chart into a doughnut chart)*/
    this.doughnut2.innerRadius("50%");

    // set the chart title
    this.doughnut2.title("Riesgo entorno");

    // configure the second doughnut chart
    this.doughnut2.bounds('50%', 0, "50%", "100%");

    this.doughnut2.listen('pointsSelect', function (e) {
      self._selectedSubSector = self.selection['selectedIndex'];
      self.selection['selectedIndex'] = e['currentPoint'].index;
      if (self.selection['selectedIndex'] == 0) {
        self.isShowCard = 0;
        self.selectedSubSectorData['labelDescription'] = "Información referente a riesgo alto";
      } else {
        if (self.selection['selectedIndex'] == 1) {
          self.isShowCard = 1;
          self.selectedSubSectorData['labelDescription'] = "Información referente a riesgo medio";
        }
      }
      self.selectedSubSectorData['labelTitle'] = "factores de riesgo - entorno";
      self.selection['selectedIndex'] = -1;
    });
    // set the container id
    this.doughnut2.container(stage);

    // initiate drawing the chart
    this.doughnut2.draw();
  }

  GetTitle(): string {
    return this.selectedSubSectorData['labelTitle'];
  }
  
  GetDescription(): string {
    return this.selectedSubSectorData['labelDescription'];
  }

  GetSelectedSubSector(): number {
    return this.selection['selectedIndex'];
  }

  SetOption(option: Options): void {
    this.optionsSvc.setOptions(option);
  }
}