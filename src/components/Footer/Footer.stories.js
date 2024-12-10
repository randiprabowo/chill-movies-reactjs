import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    type: {
      options: ["web", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "web",
    className: {},
    logoMovieOpen: "https://c.animaapp.com/4gYTn61Z/img/movie-open.svg",
  },
};
