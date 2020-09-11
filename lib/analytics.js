import ReactGA from 'react-ga';

export const initGA = (GA_TRACKING_ID) => {
  console.log('GA init');
  ReactGA.initialize(GA_TRACKING_ID);
}

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

export const logEvent = ({category = '', action = '', label = '', value}) => {
  console.log(`Logging event for ${category} ${action}`);
  if (category && action) {
    ReactGA.event({ category, action, label, value });
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
}