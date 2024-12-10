import { Navbar } from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
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
    movieOpen: "https://c.animaapp.com/4gYTn61Z/img/movie-open-3.svg",
  },
};
