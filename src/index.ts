import Plausible from "plausible-tracker";

console.log("we're up and running");

const plausible = Plausible({
  domain: 'joelius300.github.io/plausible-tracker_test-link-targets',
  trackLocalhost: true,
});

plausible.trackPageview();
plausible.enableAutoOutboundTracking();