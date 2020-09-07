export const GA_TRACKING_ID = "UA-175449839-1";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};
