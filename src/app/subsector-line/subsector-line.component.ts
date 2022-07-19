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
  @Input() descriptionText: string;

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
    
    let dataSet = [];
    competenceVariables.forEach(element => {
      dataSet.push([element['name'], element['value1'], element['value2']]);
    });

    // create a data set
    let data = anychart.data.set(dataSet);

    // map the data
    let seriesData_1 = data.mapAs({x: 0, value: 1});
    let seriesData_2 = data.mapAs({x: 0, value: 2});

    // create a chart
    this.line = anychart.line();

    // set the interactivity mode
    this.line.interactivity().hoverMode("single");

    // create the first series, set the data and name
    let series1 = this.line.line(seriesData_1);
    series1.name("% apego puntaje Competencia");

    // configure the visual settings of the first series
    series1.normal().stroke("#0066cc");
    series1.hovered().stroke("#0066cc", 2);
    series1.selected().stroke("#0066cc", 4);

    // create the second series, set the data and name  
    let series2 = this.line.line(seriesData_2);
    series2.name("Veracidad");

    // configure the visual settings of the second series
    series2.normal().stroke("#00cc99");
    series2.hovered().stroke("#00cc99", 2);
    series2.selected().stroke("#00cc99", 4);

    // create a line series and set the data
    // let series = this.line.line(data);

    // set the tooltip text
    // this.line.tooltip().format("Valor: {%value}");

    // set the chart title
    // this.line.title("Variables de competencia");

    // enable the legend
    let legend = this.line.legend();
    legend.enabled(true);

    // configure the font of legend items
    legend.fontColor("#455a64");
    legend.fontSize(16);

    // set the titles of the axes
    let xAxis = this.line.xAxis();
    xAxis.title("Variables");
    let yAxis = this.line.yAxis();
    yAxis.title("Puntuación");

    const self = this;
    this.line.listen('pointClick', function (e) {
      let index = e['pointIndex'];
      let serie = e['series']['Br'];
      if (serie == "% apego puntaje Competencia") {
        self.propertyNameEvent.emit(self.competenceVariables[index]['comp']);  
      } else {
        if (serie == "Veracidad") {
          self.propertyNameEvent.emit(self.competenceVariables[index]['verac']);  
        }
      }
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
    return "resultado de variables competencias ";
  }

  GetDescription(): string {
    return this.descriptionText;
  }

  IsKeyExists(obj: Object, key: string): boolean{
    return obj.hasOwnProperty(key);
  }
}
