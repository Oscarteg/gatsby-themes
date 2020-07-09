// import "prismjs/themes/prism-okaidia.css";
import "prismjs/themes/prism-tomorrow.css";
import "./src/css/style.css";

import CustomLayout from "./wrapPageElement";

export { wrapRootElement } from "./wrapRootElement";

export const wrapPageElement = CustomLayout;

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
