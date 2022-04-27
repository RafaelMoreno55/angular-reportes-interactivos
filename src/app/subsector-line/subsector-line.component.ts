import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import 'anychart';
import { DataReportService, Options } from 'app/data-report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subsector-line',
  templateUrl: './subsector-line.component.html',
  styleUrls: ['./subsector-line.component.css']
})
export class SubsectorLineComponent implements OnChanges, OnInit, OnDestroy {

  @ViewChild('lineChartContainer') lineContainer: ElementRef;
  line: anychart.charts.Cartesian = null;
  selection: Options = {
    selectedComponent: -1,
    selectedIndex: -1
  }

  private subscription: Subscription | undefined;

  @Input() competenceVariables: any = [];
  @Output() propertyNameEvent = new EventEmitter<string>();

  constructor(private optionsSvc: DataReportService, private renderer2: Renderer2) { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.IsKeyExists(changes, "competenceVariables")) {
      let asContainer = this.lineContainer.nativeElement;
      if (asContainer.firstElementChild) {
        this.renderer2.removeChild(asContainer, asContainer.firstElementChild);
      }
      this.ShowLineChart(changes['competenceVariables']['currentValue']);
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

  ShowLineChart(competenceVariables: any[]): void {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);
    
    // create data
    let stage = anychart.graphics.create(this.lineContainer.nativeElement);
    /* let data = [
      { x: "Puntualidad", value: 60.29 },
      { x: "Iniciativa", value: 60.04 },
      { x: "Honradez", value: 55.38 },
      { x: "Responsabilidad", value: 61.13 },
      { x: "Respeto", value: 61.42 }
    ]; */
    
    let data = [];
    competenceVariables.forEach(element => {
      data.push({ x: element['name'], value: element['value'] });
    });

    // create a chart
    this.line = anychart.line();

    // create a line series and set the data
    let series = this.line.line(data);

    // set the tooltip text
    this.line.tooltip().format("Valor: {%value}");

    // set the chart title
    // this.line.title("Variables de competencia");

    // set the titles of the axes
    let xAxis = this.line.xAxis();
    xAxis.title("Variables");
    let yAxis = this.line.yAxis();
    yAxis.title("Puntuación");

    const self = this;
    this.line.listen('pointClick', function (e) {
      let index = e['pointIndex'];
      self.propertyNameEvent.emit(self.competenceVariables[index]['name']);
      self.selection['selectedComponent'] = 3;
      self.SetOption(self.selection);
    });

    // set the container id
    this.line.container(stage);

    // initiate drawing the chart
    this.line.draw();
  }

  SetOption(option: Options): void {
    this.optionsSvc.setOptions(option);
  }

  GetTitle(): string {
    return "resultados de variables competencias ";
  }

  GetDescription(): string {
    return "Los resultados indican un resultado promedio en las competencias evaluadas, el hecho de que haya un porcentaje de veracidad debajo del 75% indica que la persona exageró en el desempeño real de estas competencias.";
  }

  IsKeyExists(obj: Object, key: string): boolean{
    return obj.hasOwnProperty(key);
  }
}
