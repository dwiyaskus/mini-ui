import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'legend',
  templateUrl: 'legend.component.html',
  styleUrls: ['legend.component.scss'],
})
/**
 * TODO
 * orient vertical and bottom have an issue
 */
export class LegendOrderComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('legendContainer', { static: true })
  legendContainer!: ElementRef<HTMLCanvasElement>;
  legend_orientation: 'horizontal' | 'vertical' = 'horizontal'; // Default to flex (row) layout
  legend_width: number = 400;
  legend_alignment:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'right_center'
    | 'left_center' = 'top';
  legend_type: 'scroll' | 'plain' = 'scroll';
  legend: {
    color: string;
    label: string;
  }[] = [];
  width: number = 0;
  height: number = 0;
  curP: number = 1;
  totP: number = 0; // for example, 5 items per page
  itp: number = 5;
  constructor() {}

  ngOnInit(): void {
    this.updatePaginatedBrands();
    this.legend = [
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
      { color: '#4A90E2', label: 'Musang' },
    ];
  }
  ngAfterViewInit(): void {
    window.addEventListener('resize', () => {
      // if (this.echart && ['dist_bar', 'horizontal_bar', 'pie', 'line', 'dual_line'].includes(this.form_data.viz_type)) {
      //   this.width = this.echart.getWidth();
      //   this.height = this.echart.getHeight();
      // }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.form_data.currentValue) {
    //   this.legend_width = Number(changes.form_data.currentValue.legend_width);
    //   this.legend_orientation = changes.form_data.currentValue.legend_orient;
    //   this.legend_width = Number(changes.form_data.currentValue.legend_width);
    //   this.legend_alignment = changes.form_data.currentValue.legend_position;
    //   this.legend_type = changes.form_data.currentValue.legend_type;
    //   this.handleLegendOrder(changes.form_data.currentValue);
    //   this.updatePaginatedBrands();
    // }
    // if (changes.echart.currentValue) {
    //   this.width = changes.echart.currentValue.getWidth();
    //   this.height = changes.echart.currentValue.getHeight();
    // }
  }

  handleLegendOrder = () => {};

  // Update the paginated items based on current page
  updatePaginatedBrands(): void {
    if (this.legend_type === 'scroll') {
      if (this.legend_orientation === 'horizontal') {
        // this.itemsPerPage = Math.floor(this.legend_width / 100);
        // const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        // const endIndex = startIndex + this.itemsPerPage;
        // this.paginatedBrands = this.legend.slice(startIndex, endIndex);
        // new
        this.totP = Math.ceil(this.legend.length / 5);
      } else {
        if (
          this.legend_orientation === 'vertical' &&
          ['right_center', 'left_center'].includes(this.legend_alignment)
        ) {
          this.height = this.height / 2;
        }
        // this.itemsPerPage = Math.floor(this.height / 20);
        // const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        // const endIndex = startIndex + this.itemsPerPage;
        // this.paginatedBrands = this.legend.slice(startIndex, endIndex);
        // new
        this.itp = Math.floor(this.height / 20);
        this.totP = Math.ceil(this.legend.length / this.itp);
      }
    } else {
      if (this.legend_orientation === 'horizontal') {
        // this.paginatedBrands = this.legend;
      } else {
        if (
          this.legend_orientation === 'vertical' &&
          ['right_center', 'left_center'].includes(this.legend_alignment)
        ) {
          this.height = this.height / 2;
        }
        // new
        this.itp = Math.floor(this.height / 20);
        this.totP = Math.ceil(this.legend.length / this.itp);
        // this.paginatedBrands = this.legend;
      }
    }
  }
  // Next page functionality
  nextScroll() {
    if (this.curP < this.totP) {
      this.curP++;
      this.scrollToPage(this.curP);
    }
  }

  // Previous page functionality
  previousScroll() {
    if (this.curP > 1) {
      this.curP--;
      this.scrollToPage(this.curP);
    }
  }

  // Method to calculate the scroll position and scroll the container
  private scrollToPage(page: number) {
    const container = this.legendContainer.nativeElement;
    let offset: number;
    const itemsPerPage = 5; // Adjust as per your design
    if (this.legend_orientation === 'horizontal') {
      // Horizontal scrolling logic
      offset = (page - 1) * (container.scrollWidth / this.totP);
      container.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    } else {
      // Vertical scrolling logic
      offset = (page - 1) * (container.scrollHeight / this.totP);
      container.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  }

  legendStyleScroll() {
    this.height = 500;
    if (
      this.legend_orientation === 'vertical' &&
      ['right_center', 'left_center'].includes(this.legend_alignment)
    ) {
      this.height = this.height / 2;
    }
    let base: {
      [key: string]: number | string;
    };
    if (
      this.legend_orientation === 'vertical' &&
      this.legend_type === 'plain'
    ) {
      base = {
        display: 'flex',
        position: 'absolute',
        'z-index': 1,
      };
    } else {
      base = {
        display: this.legend_orientation === 'horizontal' ? 'flex' : '',
        'z-index': 1,
      };
    }

    switch (this.legend_alignment) {
      case 'bottom':
        base['position'] = 'absolute';
        base['bottom'] = 0;
        base['left'] = `${this.width * (50 / 100)}px`;
        break;
      case 'left':
        base['position'] = 'absolute';
        base['left'] = 0;
        break;
      case 'right':
        base['position'] = 'absolute';
        base['right'] = 0;
        break;
      case 'right_center':
        base['position'] = 'absolute';
        base['right'] = 0;
        base['top'] = '50%';
        if (
          this.legend_orientation === 'vertical' &&
          this.legend_type === 'plain'
        ) {
          base['max-height'] = `${this.height / 2}px`;
        }
        break;
      case 'left_center':
        base['position'] = 'absolute';
        base['left'] = 0;
        base['top'] = '50%';
        if (
          this.legend_orientation === 'vertical' &&
          this.legend_type === 'plain'
        ) {
          base['max-height'] = `${this.height / 2}px`;
        }
        break;
      default:
        if (this.legend_orientation === 'vertical') {
          base['position'] = 'absolute';
          base['left'] = `${this.width * (50 / 100)}px`;
        } else {
          base['justify-self'] = 'center';
        }

        break;
    }
    return base;
  }
}
