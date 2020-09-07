import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-175449839-1");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "", label = "") => {
  if (category && action && label) {
    ReactGA.event({ category, action, label });
  }
};
