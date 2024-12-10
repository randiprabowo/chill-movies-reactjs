import { NumberWrapper } from ".";

export default {
  title: "Components/NumberWrapper",
  component: NumberWrapper,
  argTypes: {
    number: {
      options: [
        "sixteen",
        "twenty-five",
        "seventeen",
        "ten",
        "twelve",
        "twenty-one",
        "five",
        "eight",
        "twenty-two",
        "twenty-seven",
        "twenty-eight",
        "twenty-three",
        "four",
        "eighteen",
        "one",
        "twenty-nine",
        "thirteen",
        "twenty-four",
        "thirty",
        "twenty",
        "three",
        "nine",
        "fourteen",
        "twenty-six",
        "seven",
        "fifteen",
        "two",
        "thirty-two",
        "nineteen",
        "eleven",
        "thirty-one",
        "six",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    number: "sixteen",
    className: {},
  },
};
