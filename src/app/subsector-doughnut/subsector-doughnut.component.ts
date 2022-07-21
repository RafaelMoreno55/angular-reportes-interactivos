import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import 'anychart';
import { DataReportService, Options } from 'app/data-report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subsector-doughnut',
  templateUrl: './subsector-doughnut.component.html',
  styleUrls: ['./subsector-doughnut.component.css']
})
export class SubsectorDoughnutComponent implements OnChanges, OnInit, OnDestroy {

  @ViewChild('doughnutChartContainer') doughnutContainer: ElementRef;
  doughnut: anychart.charts.Pie = null;
  selection: Options = {
    selectedComponent: -1,
    selectedIndex: -1
  }

  private subscription: Subscription | undefined;

  @Input() totalVariables1: number;
  @Input() totalVariables2: number;
  @Input() totalVariables3: number;
  @Input() totalVariables4: number;
  @Input() propertyColorConfig: number;
  @Output() itemDoughnutEvent = new EventEmitter<number>();
  @Input() descriptionText: string;
  totalVar1: number;
  totalVar2: number;
  totalVar3: number;
  totalVar4: number;
  colorConfig: number;
  colorConfig1: string[] = ["#198754","#FFC107","#FD7e14","#DC3545"];
  colorConfig2: string[] = ["#DC3545","#FD7e14","#FFC107","#198754"];

  constructor(private optionsSvc: DataReportService, private renderer2: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.IsKeyExists(changes, "totalVariables1")) {
      this.totalVar1 = changes['totalVariables1']['currentValue'];
    }
    if (this.IsKeyExists(changes, "totalVariables2")) {
      this.totalVar2 = changes['totalVariables2']['currentValue'];
    }
    if (this.IsKeyExists(changes, "totalVariables3")) {
      this.totalVar3 = changes['totalVariables3']['currentValue'];
    }
    if (this.IsKeyExists(changes, "totalVariables4")) {
      this.totalVar4 = changes['totalVariables4']['currentValue'];
    }
    if (this.IsKeyExists(changes, "propertyColorConfig")) {
      this.colorConfig = changes['propertyColorConfig']['currentValue'];
    }
    
    if (this.totalVar1 != undefined && this.totalVar2 != undefined && this.totalVar3 != undefined && this.totalVar4 != undefined) {
      let asContainer = this.doughnutContainer.nativeElement;
      if (asContainer.firstElementChild) {
        this.renderer2.removeChild(asContainer, asContainer.firstChild);
      }
      this.ShowDoughnutChart(this.totalVar1, this.totalVar2, this.totalVar3, this.totalVar4, this.colorConfig == 1 ? this.colorConfig1 : this.colorConfig2);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => {this.selection = option;});
  }

  /* GoToBack(): void {
    this.selection['selectedComponent'] = 0;
    this.SetOption(this.selection); 
  } */

  ShowDoughnutChart(totalVar1: number, totalVar2: number, totalVar3: number, totalVar4: number, aColorConfig: string[]): void {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);

    // create data
    let stage = anychart.graphics.create(this.doughnutContainer.nativeElement);

    let data = [];

    if (totalVar1 > 0) {
      if (this.colorConfig == 1) {
        data.push({ x: "Alto", value: totalVar1, normal: { fill: aColorConfig[3] } });
      } else {
        data.push({ x: "Bajo", value: totalVar1, normal: { fill: aColorConfig[0] } });
      }
    }

    if (totalVar2 > 0) {
      if (this.colorConfig == 1) {
        data.push({ x: "Medio-alto", value: totalVar2, normal: { fill: aColorConfig[2] } });
      } else {
        data.push({ x: "Medio-bajo", value: totalVar2, normal: { fill: aColorConfig[1] } });
      }
    }
    
    if (totalVar3 > 0) {
      if (this.colorConfig == 1) {
        data.push({ x: "Medio-bajo", value: totalVar3, normal: { fill: aColorConfig[1] } });
      } else {
        data.push({ x: "Medio-alto", value: totalVar3, normal: { fill: aColorConfig[2] } });
      }
    }

    if (totalVar4 > 0) {
      if (this.colorConfig == 1) {
        data.push({ x: "Bajo", value: totalVar4, normal: { fill: aColorConfig[0] } });
      } else {
        data.push({ x: "Alto", value: totalVar4, normal: { fill: aColorConfig[3] } });
      }
    }

    // create a pie chart and set the data
    this.doughnut = anychart.pie(data);

    /* set the inner radius
    (to turn the pie chart into a doughnut chart)*/
    this.doughnut.innerRadius("50%");

    // set the chart title
    // this.doughnut.title("Riesgo personal");

    // set the tooltip text
    // this.doughnut.tooltip().format();

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
      let color = e['currentTarget']['ke']['oc']['kg']['f']['normal']['fill'];
      if (color == '#DC3545') {
        self.itemDoughnutEvent.emit(0);
      } else {
        if (color == '#FD7e14') {
          self.itemDoughnutEvent.emit(1);
        } else {
          if (color == '#FFC107') {
            self.itemDoughnutEvent.emit(2);
          } else {
            self.itemDoughnutEvent.emit(3);
          }
        }
      }
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
    return this.descriptionText;
  }

  IsKeyExists(obj: Object, key: string): boolean{
    return obj.hasOwnProperty(key);
  }
}
