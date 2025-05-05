import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './mini-ui/bar/bar.component';
import { LegendOrderComponent } from './mini-ui/component/legend/legend/legend.component';
import { LineComponent } from './mini-ui/line/line.component';
import { ButtonComponent } from './mini-ui/core/button/button.component';
import { InputComponent } from './mini-ui/core/input/input.component';
import { SelectComponent } from './mini-ui/core/select/select.component';
import { CheckboxComponent } from './mini-ui/core/checkbox/checkbox.component';
import { LabelComponent } from './mini-ui/core/label/label.component';
import { DivisionComponent } from './mini-ui/core/division/division.component';

@NgModule({
  declarations: [
    BarChartComponent,
    LegendOrderComponent,
    LineComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    LabelComponent,
    DivisionComponent,
  ],
  exports: [
    BarChartComponent,
    LegendOrderComponent,
    LineComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    LabelComponent,
    DivisionComponent,
  ],
  imports: [CommonModule],  // <- This is essential for ngClass and other common directives
})
export class GladiobModule {}
