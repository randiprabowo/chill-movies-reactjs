import { MaterialIcon } from ".";

export default {
  title: "Components/MaterialIcon",
  component: MaterialIcon,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    className: {},
  },
};
