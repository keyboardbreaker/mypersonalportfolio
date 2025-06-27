import type { Meta, StoryObj } from '@storybook/react';

import Textbox  from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Textbox',
  component: Textbox,
} satisfies Meta<typeof Textbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TextboxExample : Story = {
  args: {
    label: "Name",
    handleChange: (value: string) => {
      // Storybook action or simple log for demonstration
      console.log("Textbox changed:", value);
    },
  },
};
