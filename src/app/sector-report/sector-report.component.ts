import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import 'anychart';
import { DataReportService, Options, DataSubsector } from 'app/data-report.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sector-report',
  templateUrl: './sector-report.component.html',
  styleUrls: ['./sector-report.component.css']
})
export class SectorReportComponent implements OnInit, OnDestroy {

  gauge: anychart.charts.LinearGauge = null;

  selectedIndex: number = -1;
  selectedComponent: number = 0;
  isShowInfo: boolean = false;
  selection: Options = {
    selectedComponent: 0,
    selectedIndex: -1
  };
  private subscription: Subscription | undefined;

  result: string[] = [
    "no-recomendado",
    "recomendado",
    "revision-asesor"
  ];
  resultado: string = this.result[2];

  rows: any = [];
  indexs: any = [];
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
  propertyName: string;
  propertyValue: number;
  propertyColorConfig: number;
  multiplier1: number = 0.25;
  multiplier2: number = 0.50;
  multiplier3: number = 0.75;
  recommendedScore: number;
  variableScore: number;
  totalVariables1: number;
  totalVariables2: number;
  totalVariables3: number;
  totalVariables4: number;
  itemDoughnut: number = -1;
  competenceVariables: any = [];

  constructor(private optionsSvc: DataReportService, private activeRoute: ActivatedRoute, private el: ElementRef) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => this.selection = option);
  
    this.activeRoute.params.subscribe((params: Params) => {
      this.obtainedScore = params.star;
    });

    this.rows = this.optionsSvc.getRows();
    this.indexs = this.optionsSvc.indices;
    this.indexs.sort(function(a,b) {
      return a - b;
    });
    this.SortAsc(this.rows, 'seccionReport');

    let i = 0;
    let sum = 0;
    let count = 0;
    let rango1 = 0;
    let rango2 = 0;
    let rango3 = 0;
    let last = this.rows.length - 1;
    let configColor = 0;
    
    this.rows.forEach((element, index)=> {
      if (this.indexs[i] === element['seccionReport']) {
        sum += parseInt(element['value']);
        rango1 = element['rango1'];
        rango2 = element['rango2'];
        rango3 = element['rango3'];
        configColor = element['configColor'];
        count += 1;
      } else {
        let graphicData = new Object();
        graphicData['average'] = (sum/count);
        graphicData['numItems'] = count;
        graphicData['range1'] = rango1;
        graphicData['range2'] = rango2;
        graphicData['range3'] = rango3;
        graphicData['sectionReport'] = this.indexs[i];
        graphicData['colorConfig'] = configColor;
        this.sectors.push(graphicData);
        i += 1;
        sum = parseInt(element['value']);
        rango1 = element['rango1'];
        rango2 = element['rango2'];
        rango3 = element['rango3'];
        configColor = element['configColor'];
        count = 1;
      }
      if (index === last) {
        let graphicData = new Object();
        graphicData['average'] = (sum/count);
        graphicData['numItems'] = count;
        graphicData['range1'] = rango1;
        graphicData['range2'] = rango2;
        graphicData['range3'] = rango3;
        graphicData['sectionReport'] = this.indexs[i];
        graphicData['colorConfig'] = configColor;
        this.sectors.push(graphicData);
      }
    });
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
      self.competenceVariables.length = 0;
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
      let value = e['currentTarget']['Rf'][0];
      let sectionReport = 0;
      self.sectors.forEach(element => {
        if (value === element['average']) {
          sectionReport = element['sectionReport'];
        }
      });
      self.rows.forEach(element => {
        if (sectionReport === element['seccionReport']) {
          self.rowsSubSector.push(element);
        }
      });

      if (sectionReport == 18) {
        self.selection['selectedComponent'] = 4;
      } else {
        if (sectionReport == 16) {
          self.selection['selectedComponent'] = 5;
        } else {
          self.selection['selectedComponent'] = 1;
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
        self.competenceVariables.push({ name: element['name'], value: parseInt(element['value']) });
        if (self.colorConfig == 1 ) { // verde a rojo
          if (parseInt(element['value']) <= range1) {
            self.range4Green.push(element['name']);
            self.totalVariables4 += 1;
          } else {
            if (parseInt(element['value']) > range1 && parseInt(element['value']) <= range2) {
              self.range3Yellow.push(element['name']);
              self.totalVariables3 += 1;
            } else {
              if (parseInt(element['value']) > range2 && parseInt(element['value']) <= range3) {
                self.range2Orange.push(element['name']);
                self.totalVariables2 += 1;
              } else {
                if (parseInt(element['value']) > range3) {
                  self.range1Red.push(element['name']);
                  self.totalVariables1 += 1;
                }
              }
            }
          }
        } else {// rojo a verde
          if (self.colorConfig == 2) {
            if (parseInt(element['value']) <= range1) {
              self.range1Red.push(element['name']);
              self.totalVariables1 += 1;
            } else {
              if (parseInt(element['value']) > range1 && parseInt(element['value']) <= range2) {
                self.range2Orange.push(element['name']);
                self.totalVariables2 += 1;
              } else {
                if (parseInt(element['value']) > range2 && parseInt(element['value']) <= range3) {
                  self.range3Yellow.push(element['name']);
                  self.totalVariables3 += 1;
                } else {
                  if (parseInt(element['value']) > range3) {
                    self.range4Green.push(element['name']);
                    self.totalVariables4 += 1;
                  }
                }
              }
            }
          }
        }
      });
      self.competenceVariables = self.competenceVariables.slice();
    });
    // set the container id
    this.gauge.container(stage);
    // initiate drawing the gauge
    this.gauge.draw();
  }

  ShowInfo(): void {
    this.isShowInfo == true ? this.isShowInfo = false : this.isShowInfo = true;
  }

  SetOption(option: Options): void {
    this.optionsSvc.setOptions(option);
  }

  GetTitleDescription(index: number): DataSubsector {
    return this.optionsSvc.getTitleDescription(index);
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
    this.propertyName = name;
    this.rowsSubSector.forEach(element => {
      if (name === element['name']) {
        this.propertyColorConfig = element['configColor'];
        let value = parseInt(element['value']);
        let range1 = element['rango1'];
        let range2 = element['rango2'];
        let range3 = element['rango3'];
        if (value <= 0) {
          this.propertyValue = 1;
        } else {
          if (value <= range1) {
            this.propertyValue = this.Round(this.normalizeRange(value, range1, this.multiplier1));
          } else {
            if (value > range1 && value <= range2) {
              this.propertyValue = this.Round(this.normalizeRange(value, range2, this.multiplier2));
            } else {
              if (value > range2 && value <= range3) {
                this.propertyValue = this.Round(this.normalizeRange(value, range3, this.multiplier3));
              } else {
                if (value > range3) {
                  this.propertyValue = 99;
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
      }
    });
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
}
