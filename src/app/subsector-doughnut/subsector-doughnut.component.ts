import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import 'anychart';
import { DataReportService, Options } from 'app/data-report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subsector-doughnut',
  templateUrl: './subsector-doughnut.component.html',
  styleUrls: ['./subsector-doughnut.component.css']
})
export class SubsectorDoughnutComponent implements OnChanges, OnInit {

  @ViewChild('doughnutChartContainer') doughnutContainer: ElementRef;
  doughnut: anychart.charts.Pie = null;
  selection: Options = {
    selectedComponent: -1,
    selectedIndex: -1
  }

  private subscription: Subscription | undefined;

  @Input() totalValueRange1: number;
  @Input() totalValueRange2: number;
  @Input() totalValueRange3: number;
  @Input() totalValueRange4: number;
  @Input() propertyColorConfig: number;
  @Output() itemDoughnutEvent = new EventEmitter<number>();
  totalValueR1: number;
  totalValueR2: number;
  totalValueR3: number;
  totalValueR4: number;
  colorConfig: number;
  colorConfig1: string[] = ["#198754","#FFC107","#FD7e14","#DC3545"];
  colorConfig2: string[] = ["#DC3545","#FD7e14","#FFC107","#198754"];

  constructor(private optionsSvc: DataReportService, private renderer2: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.IsKeyExists(changes, "totalValueRange1")) {
      this.totalValueR1 = changes['totalValueRange1']['currentValue'];
    }
    if (this.IsKeyExists(changes, "totalValueRange2")) {
      this.totalValueR2 = changes['totalValueRange2']['currentValue'];
    }
    if (this.IsKeyExists(changes, "totalValueRange3")) {
      this.totalValueR3 = changes['totalValueRange3']['currentValue'];
    }
    if (this.IsKeyExists(changes, "totalValueRange4")) {
      this.totalValueR4 = changes['totalValueRange4']['currentValue'];
    }
    if (this.IsKeyExists(changes, "propertyColorConfig")) {
      this.colorConfig = changes['propertyColorConfig']['currentValue'];
    }

    if (this.totalValueR1 != undefined && this.totalValueR2 != undefined && this.totalValueR3 != undefined && this.totalValueR4 != undefined) {
      console.log(this.totalValueR1);
      console.log(this.totalValueR2);
      console.log(this.totalValueR3);
      console.log(this.totalValueR4);
      let asContainer = this.doughnutContainer.nativeElement;
      if (asContainer.firstElementChild) {
        this.renderer2.removeChild(asContainer, asContainer.firstChild);
      }
      this.ShowDoughnutChart(this.totalValueR1, this.totalValueR2, this.totalValueR3, this.totalValueR4, this.colorConfig == 1 ? this.colorConfig1 : this.colorConfig2);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => {this.selection = option;});
  }

  GoToBack(): void {
    this.selection['selectedComponent'] = 0;
    this.SetOption(this.selection); 
  }

  ShowDoughnutChart(totalValueR1: number, totalValueR2: number, totalValueR3: number, totalValueR4: number, colorConfig: string[]): void {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);

    // create data
    let stage = anychart.graphics.create(this.doughnutContainer.nativeElement);

    // create data
    let data = [
      { x: "Alto", value: totalValueR1, normal: {fill: colorConfig[0] } },
      { x: "Medio-alto", value: totalValueR2, normal: {fill: colorConfig[1] } },
      { x: "Medio", value: totalValueR3, normal: {fill: colorConfig[2] } },
      { x: "Bajo", value: totalValueR4, normal: {fill: colorConfig[3] } }
    ];

    // create a pie chart and set the data
    this.doughnut = anychart.pie(data);

    /* set the inner radius
    (to turn the pie chart into a doughnut chart)*/
    this.doughnut.innerRadius("50%");

    // set the chart title
    // this.doughnut.title("Riesgo personal");

    // configure the firts doughnut chart
    this.doughnut.bounds(0, 0, "100%", "100%");

    const self = this;
    this.doughnut.listen('pointsSelect', function (e) {
      /**
       * colorConfig 1
       * 0-verde
       * 1-amarillo
       * 2-naranja
       * 3-rojo
       * 
       * colorConfig 2
       * 0-rojo
       * 1-naranja
       * 2-amarillo
       * 3-verde
       */  
      self.itemDoughnutEvent.emit(e['point']['index']);
      self.selection['selectedComponent'] = 1;
      self.SetOption(self.selection);
    });
    // set the container id
    this.doughnut.container(stage);

    // initiate drawing the chart
    this.doughnut.draw();
  }

  SetOption(option: Options): void {
    this.optionsSvc.setOptions(option);
  }

  GetTitle(): string {
    return "Factores por nivel de riesgo ";
  }

  GetDescription(): string {
    return "Existe una consistencia entre los resultados riesgo persona y riesgo entorno, en el caso específico se encuentra información distorcionada por el sujeto en la mayoría de los factores, sin embargo, esta no genera el suficiente estrés para ser considerando un riesgo de importancia por lo que se recomienda proceder con preguntas específicas de los riesgos para clarificar en el tema. Se presentan como principales riesgos: la fuga de información como factor personal y consumo de drogas en el entorno del candidato.";
  }

  IsKeyExists(obj: Object, key: string): boolean{
    return obj.hasOwnProperty(key);
  }
}
