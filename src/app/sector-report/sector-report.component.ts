import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import 'anychart';
import { DataReportService, Options } from 'app/data-report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sector-report',
  templateUrl: './sector-report.component.html',
  styleUrls: ['./sector-report.component.css']
})
export class SectorReportComponent implements OnInit, OnDestroy {

  @ViewChild('chartContainer1') container1;
  @ViewChild('chartContainer2') container2;
  @ViewChild('chartContainer3') container3;
  @ViewChild('chartContainer4') container4;

  gauge1: anychart.charts.LinearGauge = null;
  gauge2: anychart.charts.LinearGauge = null;
  gauge3: anychart.charts.LinearGauge = null;
  gauge4: anychart.charts.LinearGauge = null;

  selectedIndex: number = -1;
  selectedComponent: number = 0;
  isShowInfo: boolean = false;
  selection: Options = {
    selectedComponent: 0,
    selectedIndex: -1
  };
  private subscription: Subscription | undefined;
  
  constructor(private optionsSvc: DataReportService) {
   }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => this.selectedComponent = option['selectedComponent']);
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);
    var stage1 = anychart.graphics.create(this.container1.nativeElement);
    var stage2 = anychart.graphics.create(this.container2.nativeElement);
    var stage3 = anychart.graphics.create(this.container3.nativeElement);
    var stage4 = anychart.graphics.create(this.container4.nativeElement);
    // create data
    var data = [72.56, 44.58, 53.40, 48.94];
    // set the gauge type
    this.gauge1 = anychart.gauges.tank();
    // set the data for the gauge
    this.gauge1.data(data);
    // create the first pointer (tank)
    var tank1 = this.gauge1.tank(0);
    tank1.name("RIESGO FRAUDE");
    tank1.color("#ffc107");
    // set the width and offset of the tank pointer (both as percentages of the gauge width)
    tank1.width('50%');
    tank1.offset('-20%');
    // configure the scale
    var scale = this.gauge1.scale();
    scale.minimum(0);
    scale.maximum(100);
    //configure a linear scale
    var lScale = anychart.scales.linear();
    lScale.minimum(0);
    lScale.maximum(100);
    lScale.ticks().interval(10);
    // configure the axis
    var axis = this.gauge1.axis();
    axis.minorTicks(true);
    axis.minorTicks().stroke('#cecece');
    axis.offset('-35%');
    axis.scale(lScale);
    // Get legend.
    var legend = this.gauge1.legend();
    legend.enabled(true);
    legend.position('top');
    legend.itemsLayout('horizontal');
    legend.align('left');
    // listener
    const self = this;
    this.gauge1.listen('pointClick', function (e) {
      self.selectedIndex = 1;
      self.selectedComponent = 1;
      self.selection['selectedIndex'] = 1;
      self.selection['selectedComponent'] = 1;
      self.SetOption(self.selection);
    });
    // set the container id
    this.gauge1.container(stage1);
    // initiate drawing the gauge
    this.gauge1.draw();

    // set the gauge type
    this.gauge2 = anychart.gauges.tank();
    // set the data for the gauge
    this.gauge2.data(data);
    // create the other pointer (tank)
    var tank2 = this.gauge2.tank(1);
    tank2.name("COMPENTENCIAS");
    tank2.color("#dc3545");
    // set the width and offset of the tank pointer (both as percentages of the gauge width)
    tank2.width('50%');
    tank2.offset('-20%');
    // configure the scale
    scale = this.gauge2.scale();
    scale.minimum(0);
    scale.maximum(100);
    // configure the axis
    axis = this.gauge2.axis();
    axis.minorTicks(true);
    axis.minorTicks().stroke('#cecece');
    axis.offset('-35%');
    axis.scale(lScale);
    // Get legend.
    legend = this.gauge2.legend();
    legend.enabled(true);
    legend.position('top');
    legend.itemsLayout('horizontal');
    legend.align('left');
    // listener
    this.gauge2.listen('pointClick', function (e) {
      self.selectedIndex = 2;
      self.selectedComponent = 1;
      self.selection['selectedIndex'] = 2;
      self.selection['selectedComponent'] = 1;
      self.SetOption(self.selection);
    });
    // set the container id
    this.gauge2.container(stage2);
    // initiate drawing the gauge
    this.gauge2.draw();

    // set the gauge type
    this.gauge3 = anychart.gauges.tank();
    // set the data for the gauge
    this.gauge3.data(data);
    // create the other pointer (tank)
    var tank3 = this.gauge3.tank(2);
    tank3.name("REFERENCIAS");
    tank3.color("#ffc107");
    // set the width and offset of the tank pointer (both as percentages of the gauge width)
    tank3.width('50%');
    tank3.offset('-20%');
    // configure the scale
    scale = this.gauge3.scale();
    scale.minimum(0);
    scale.maximum(100);
    // configure the axis
    axis = this.gauge3.axis();
    axis.minorTicks(true);
    axis.minorTicks().stroke('#cecece');
    axis.offset('-35%');
    axis.scale(lScale);
    // Get legend.
    legend = this.gauge3.legend();
    legend.enabled(true);
    legend.position('top');
    legend.itemsLayout('horizontal');
    legend.align('left');
    // listener
    this.gauge3.listen('pointClick', function (e) {
      self.selectedIndex = 3;
      self.selectedComponent = 2;
      self.selection['selectedIndex'] = 3;
      self.selection['selectedComponent'] = 2;
      self.SetOption(self.selection);
    });
    // set the container id
    this.gauge3.container(stage3);
    // initiate drawing the gauge
    this.gauge3.draw();

    // set the gauge type
    this.gauge4 = anychart.gauges.tank();
    // set the data for the gauge
    this.gauge4.data(data);
    // create the other pointer (tank)
    var tank4 = this.gauge4.tank(3);
    tank4.name("FACTORES DE RIESGO");
    tank4.color("#dc3545");
    // set the width and offset of the tank pointer (both as percentages of the gauge width)
    tank4.width('50%');
    tank4.offset('-20%');
    // configure the scale
    scale = this.gauge4.scale();
    scale.minimum(0);
    scale.maximum(100);
    // configure the axis
    axis = this.gauge4.axis();
    axis.minorTicks(true);
    axis.minorTicks().stroke('#cecece');
    axis.offset('-35%');
    axis.scale(lScale);
    // Get legend.
    legend = this.gauge4.legend();
    legend.enabled(true);
    legend.position('top');
    legend.itemsLayout('horizontal');
    legend.align('left');
    // listener
    this.gauge4.listen('pointClick', function (e) {
      self.selectedIndex = 4;
      self.selectedComponent = 1;
      self.selection['selectedIndex'] = 4;
      self.selection['selectedComponent'] = 1;
      self.SetOption(self.selection);
    });
    // set the container id
    this.gauge4.container(stage4);
    // initiate drawing the gauge
    this.gauge4.draw();

    /* this.gauge1 = anychart.gauges.tank();
    this.gauge1.data(data);
    this.gauge1.addPointer(0);
    const self = this;
    this.gauge1.listen('pointClick', function (e) {
      self.selectedIndex = 1;
      self.selectedComponent = 1;
      self.selection['selectedIndex'] = 1;
      self.selection['selectedComponent'] = 1;
      self.SetOption(self.selection);
    });
    this.gauge1.bounds(0, 0, '25%', '100%');
    this.gauge1.container(stage);
    this.gauge1.draw();

    this.gauge2 = anychart.gauges.tank();
    this.gauge2.data(data);
    this.gauge2.addPointer(1);
    this.gauge2.listen('pointClick', function (e) {
      self.selectedIndex = 2;
      self.selectedComponent = 1;
      self.selection['selectedIndex'] = 2;
      self.selection['selectedComponent'] = 1;
      self.SetOption(self.selection);
    });
    this.gauge2.bounds('25%', 0, '25%', '100%');
    this.gauge2.container(stage);
    this.gauge2.draw();
    this.gauge3 = anychart.gauges.tank();
    this.gauge3.data(data);
    this.gauge3.addPointer(2);
    this.gauge3.listen('pointClick', function (e) {
      self.selectedIndex = 3;
      self.selectedComponent = 2;
      self.selection['selectedIndex'] = 3;
      self.selection['selectedComponent'] = 2;
      self.SetOption(self.selection);
    });
    this.gauge3.bounds('50%', 0, '25%', '100%');
    this.gauge3.container(stage);
    this.gauge3.draw();
    this.gauge4 = anychart.gauges.tank();
    this.gauge4.data(data);
    this.gauge4.addPointer(3);
    this.gauge4.listen('pointClick', function (e) {
      self.selectedIndex = 4;
      self.selectedComponent = 1;
      self.selection['selectedIndex'] = 4;
      self.selection['selectedComponent'] = 1;
      self.SetOption(self.selection);
    });
    this.gauge4.bounds('75%', 0, '25%', '100%');
    this.gauge4.container(stage);
    this.gauge4.draw(); */
  }

  ShowInfo(): void {
    this.isShowInfo == true ? this.isShowInfo = false : this.isShowInfo = true;
  }

  SetOption(option: Options): void{
    this.optionsSvc.setOptions(option);
  }
}
