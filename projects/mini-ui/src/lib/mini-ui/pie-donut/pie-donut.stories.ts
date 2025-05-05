import type { Meta, StoryObj } from '@storybook/angular';
import { PieDonutComponent } from './pie-donut.component';

const meta: Meta<PieDonutComponent> = {
  title: 'Pie',
  component: PieDonutComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    type: {
      options: ['pie', 'donut'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'pie' },
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
type Story = StoryObj<PieDonutComponent>;

export const Default: Story = {
  args: {
    type: 'pie',
    data: [300, 500, 100],
    labels: ['Red', 'Blue', 'Yellow'],
    colors: ['#FF6384', '#36A2EB', '#FFCE56'],
    label: 'Total: 900',
    legendPosition: 'bottom', // Options: 'top', 'bottom', 'left', 'right'
    radius: 100,
  },
};
