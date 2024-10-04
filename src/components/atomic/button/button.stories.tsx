import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button.components";

const meta: Meta<typeof Button> = {
  title: "components/atomic/button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "black",
  },
};

export default meta;
