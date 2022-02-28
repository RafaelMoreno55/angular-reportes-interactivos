import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import 'anychart';
import { DataReportService, Options } from 'app/data-report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-variable-report',
  templateUrl: './variable-report.component.html',
  styleUrls: ['./variable-report.component.css']
})
export class VariableReportComponent implements OnInit, OnDestroy {

  @ViewChild('chartContainer') container;
  gauge: anychart.charts.LinearGauge = null;
  selection: Options = {
    selectedComponent: 0,
    selectedIndex: -1
  };
  private subscription: Subscription | undefined;

  constructor(private optionsSvc: DataReportService) { }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => this.selection = option);
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);
    var stage = anychart.graphics.create(this.container.nativeElement);

    // create data
    var data = [72.56];

    // set the gauge type
    this.gauge = anychart.gauges.linear();

    // set the data for the gauge
    this.gauge.data(data);

    // set the layout
    this.gauge.layout('horizontal');

    // create a color scale
    var scaleBarColorScale = anychart.scales.ordinalColor().ranges([
      {
        from: 0,
        to: 25,
        color: ['#D81E05', '#EB7A02'],
      },
      {
        from: 25,
        to: 50,
        color: ['#EB7A02', '#FFD700'],
      },
      {
        from: 50,
        to: 75,
        color: ['#FFD700', '#CAD70b'],
      },
      {
        from: 75,
        to: 100,
        color: ['#CAD70b', '#2AD62A'],
      },
    ]);

    // create a Scale Bar
    var scaleBar = this.gauge.scaleBar(0);

    // set the height and offset of the Scale Bar (both as percentages of the gauge height)
    scaleBar.width('35%');
    scaleBar.offset('31.5%');

    // use the color scale (defined earlier) as the color scale of the Scale Bar
    scaleBar.colorScale(scaleBarColorScale);

    // add a marker pointer
    var marker = this.gauge.marker(0);

    // set the offset of the pointer as a percentage of the gauge width
    marker.offset('31.5%');

    // set the color of the marker
    marker.color('black');

    // set the width of the marker
    marker.width('15');

    // set the marker type
    marker.type('triangle-up');

    // set the zIndex of the marker
    marker.zIndex(10);

    // configure the scale
    var scale = this.gauge.scale();
    scale.minimum(0);
    scale.maximum(100);

    //configure a linear scale
    var lScale = anychart.scales.linear();
    lScale.minimum(0);
    lScale.maximum(100);
    lScale.ticks().interval(10);
    lScale.minorTicks().interval(1);

    // configure the axis
    var axis = this.gauge.axis();
    axis.minorTicks(true);
    axis.minorTicks().stroke('#cecece');
    axis.width('1%');
    axis.offset('29.5%');
    axis.orientation('top');
    axis.scale(lScale);

    // format axis labels
    axis.labels().format('{%value}%');

    // set paddings
    this.gauge.padding([0, 50]);

    // set the container id
    this.gauge.container(stage);

    // initiate drawing the gauge
    this.gauge.draw();
  }

  GoToBack(): void {
    this.selection['selectedComponent'] = 1;
    this.optionsSvc.setOptions(this.selection);
  }
}
