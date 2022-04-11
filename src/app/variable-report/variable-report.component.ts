import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import 'anychart';
import { DataReportService, DataSubsector, Options } from 'app/data-report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-variable-report',
  templateUrl: './variable-report.component.html',
  styleUrls: ['./variable-report.component.css']
})
export class VariableReportComponent implements OnChanges, OnInit, OnDestroy {

  @ViewChild('chartContainer') container: ElementRef;
  gauge: anychart.charts.LinearGauge = null;
  selection: Options = {
    selectedComponent: 0,
    selectedIndex: -1
  };
  private subscription: Subscription | undefined;
  /* @Input() selectedVariableData: DataSubsector = {
    labelTitle: "",
    labelDescription: ""
  }; */
  @Input() propertyName: string;
  @Input() propertyValue: number;
  @Input() propertyColorConfig: number;
  colorConfig: number;
  value: number;

  colorConfig1 = [
    {
      from: 0,
      to: 25,
      color: ['#2AD62A', '#CAD70b'],
    },
    {
      from: 25,
      to: 50,
      color: ['#CAD70b', '#FFD700'],
    },
    {
      from: 50,
      to: 75,
      color: ['#FFD700', '#EB7A02'],
    },
    {
      from: 75,
      to: 100,
      color: ['#EB7A02', '#D81E05'],
    },
  ];

  colorConfig2 = [
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
  ];

  constructor(private optionsSvc: DataReportService, private renderer2: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.IsKeyExists(changes, "propertyColorConfig")) {
      this.colorConfig = changes['propertyColorConfig']['currentValue'];
    }

    if (this.IsKeyExists(changes, "propertyValue")) {
      this.value = changes['propertyValue']['currentValue'];
    }

    if (this.colorConfig != undefined && this.value != undefined) {
      console.log(this.colorConfig);
      console.log(this.value);
      let asContainer = this.container.nativeElement;
      if (asContainer.firstElementChild) {
        this.renderer2.removeChild(asContainer, asContainer.firstChild);
      }
      this.ShowLineGaugeChart(this.value, this.colorConfig);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => this.selection = option);
    // this.ShowLineGaugeChart();
  }

  ShowLineGaugeChart(value: number, colorConfig: number): void {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);
    let stage = anychart.graphics.create(this.container.nativeElement);
    console.log(stage);
    // create data
    let data = [value];

    // set the gauge type
    this.gauge = anychart.gauges.linear();

    // set the data for the gauge
    this.gauge.data(data);

    // set the layout
    this.gauge.layout('horizontal');

    // create a color scale
    let scaleBarColorScale = anychart.scales.ordinalColor().ranges(colorConfig == 1 ? this.colorConfig1 : this.colorConfig2);
    // create a Scale Bar
    let scaleBar = this.gauge.scaleBar(0);

    // set the height and offset of the Scale Bar (both as percentages of the gauge height)
    scaleBar.width('35%');
    scaleBar.offset('31.5%');

    // use the color scale (defined earlier) as the color scale of the Scale Bar
    scaleBar.colorScale(scaleBarColorScale);

    // add a marker pointer
    let marker = this.gauge.marker(0);

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
    let scale = this.gauge.scale();
    scale.minimum(0);
    scale.maximum(100);

    //configure a linear scale
    let lScale = anychart.scales.linear();
    lScale.minimum(0);
    lScale.maximum(100);
    lScale.ticks().interval(10);
    lScale.minorTicks().interval(1);

    // configure the axis
    let axis = this.gauge.axis();
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
    this.SetOption(this.selection);
  }

  SetOption(option: Options): void {
    this.optionsSvc.setOptions(option);
  }

  IsKeyExists(obj: Object, key: string): boolean{
    return obj.hasOwnProperty(key);
  }
}
