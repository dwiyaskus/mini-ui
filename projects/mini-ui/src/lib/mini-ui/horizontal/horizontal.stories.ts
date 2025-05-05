import type { Meta, StoryObj } from '@storybook/angular';
import { HorizontalChartComponent } from './horizontal.component';

const meta: Meta<HorizontalChartComponent> = {
  title: 'Horizontal Chart',
  component: HorizontalChartComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    valueLabelPosition: {
      control: { type: 'radio' },
      options: ['inside', 'outside'],
      table: {
        defaultValue: { summary: 'outside' },
      },
    },
    legendPosition: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'bottom' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<HorizontalChartComponent>;

export const Default: Story = {
  name: 'Horizontal',
  args: {
    data: [
      { label: 'Mon', values: [100] },
      { label: 'Tue', values: [300] },
      { label: 'Wed', values: [150] },
      { label: 'Thu', values: [75] },
      { label: 'Fri', values: [50] },
      { label: 'Sat', values: [120] },
      { label: 'Sun', values: [180] },
    ],
    legend: ['Total'],
    color: ['#4A90E2'],
    legendPosition: 'bottom',
    valueLabelPosition: 'outside',
  },
};

export const Horizontal: Story = {
  name: 'Horizontal Group',
  args: {
    data: [
      { label: 'Mon', values: [100, 40] },
      { label: 'Tue', values: [300, 150] },
      { label: 'Wed', values: [150, 120] },
      { label: 'Thu', values: [75, 125] },
      { label: 'Fri', values: [50, 100] },
      { label: 'Sat', values: [120, 60] },
      { label: 'Sun', values: [180, 90] },
    ],
    legend: ['Total A', 'Total B'],
    color: ['#4A90E2', '#50E3C2'],
    legendPosition: 'bottom',
    valueLabelPosition: 'outside',
  },
};

export const HorizontalStacked: Story = {
  name: 'Horizontal Stack',
  args: {
    data: [
      {
        label: 'Matcha Latte',
        values: [40, 80, 90],
      },
      {
        label: 'Milk Tea',
        values: [60, 70, 120],
      },
      {
        label: 'Cheese Cocoa',
        values: [80, 60, 90],
      },
      {
        label: 'Walnut Brownie',
        values: [90, 50, 40],
      },
    ],
    color: ['#4A90E2', '#50E3C2', '#F5A623'],
    legend: ['2015', '2016', '2017'],
    legendPosition: 'bottom',
    type: 'stacked',
    valueLabelPosition: 'outside',
  },
};
