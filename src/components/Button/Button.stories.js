import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    icon: {
      options: ["none", "right", "left"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    content: "Button",
    icon: "none",
    size: "large",
    className: {},
    contentClassName: {},
  },
};
