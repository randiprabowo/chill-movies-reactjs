import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    type: {
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
        "image-213",
        "four",
        "eighteen",
        "one",
        "image-211",
        "twenty-nine",
        "thirteen",
        "twenty-four",
        "thirty",
        "twenty",
        "three",
        "nine",
        "image-212",
        "fourteen",
        "twenty-six",
        "seven",
        "image-209",
        "fifteen",
        "two",
        "thirty-two",
        "nineteen",
        "image-210",
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
    type: "sixteen",
    className: {},
  },
};
