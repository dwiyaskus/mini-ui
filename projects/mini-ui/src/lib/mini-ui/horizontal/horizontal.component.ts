import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'horizontal-bar',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.css'],
})
export class HorizontalChartComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { static: true })
  container!: ElementRef<HTMLCanvasElement>;
  @Input() data: { label: string; values: number[] }[] = [];
  @Input() legendPosition: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() yAxisTicks: string[] = [];
  @Input() xAxisTicks: number[] = [];
  @Input() color: string[] = [];
  @Input() legend: string[] = [];
  @Input() type: string = '';
  @Input() valueLabelPosition: 'inside' | 'outside' = 'outside';
  width: number = 0;

  ngAfterViewInit() {
    const container = this.container.nativeElement;
    this.width = container.clientWidth;
  }
  maxValue: number = 0; // Adjust this based on your data

  ngOnInit() {
    this.generateYAxisTicks();
  }

  getBarWidth(value: number, values: number[]): string {
    return ((value / this.maxValue) * 100).toFixed(2) + '%';
  }

  generateYAxisTicks() {
    let maxValue = 0;
    if (this.type === 'stacked') {
      let maxStacked = this.data.map((item) => {
        let x = this.getTotalStacked(item.values);
        return x;
      });
      maxValue = Math.max(...maxStacked);
    } else {
      maxValue = Math.max(
        ...this.data.flatMap((group) => group.values.map((bar) => bar))
      );
    }
    this.maxValue = maxValue;
    const step = Math.ceil(maxValue / 5);
    this.xAxisTicks = Array.from({ length: 6 }, (_, i) => i * step);
  }
  getTotalStacked = (group: number[]) => {
    return group.map((item) => item).reduce((prev, curr) => prev + curr, 0);
  };
}
