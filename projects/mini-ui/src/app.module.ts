import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MiniUiComponent } from './lib/mini-ui.component';
import { BarChartComponent } from './lib/mini-ui/bar/bar.component';
import { LegendOrderComponent } from './lib/mini-ui/component/legend/legend/legend.component';
import { LineComponent } from './lib/mini-ui/line/line.component';
import { ButtonComponent } from './lib/mini-ui/core/button/button.component';
import { InputComponent } from './lib/mini-ui/core/input/input.component';
import { SelectComponent } from './lib/mini-ui/core/select/select.component';
import { CheckboxComponent } from './lib/mini-ui/core/checkbox/checkbox.component';
import { LabelComponent } from './lib/mini-ui/core/label/label.component';
import { DivisionComponent } from './lib/mini-ui/core/division/division.component';

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
    DivisionComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
