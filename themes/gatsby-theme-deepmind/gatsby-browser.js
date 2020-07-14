import "./src/css/style.css";

import CustomLayout from "./wrapPageElement";

export { wrapRootElement } from "./wrapRootElement";

export const wrapPageElement = CustomLayout;

export const onServiceWorkerUpdateReady = () => {
  window.location.reload();
};
