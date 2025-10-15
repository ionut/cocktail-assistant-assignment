import { Toaster } from "../components/Toaster";

export default {
  title: "Example/Toaster",
  tags: ["autodocs"],
  render: (args) => Toaster(args),
};

export const ToasterNoMessage = {
  args: {
    toasterMessage: "",
  },
};

export const ToasterWithMessage = {
  args: {
    toasterMessage: "Success message!",
  },
};
