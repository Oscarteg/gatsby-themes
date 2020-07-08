import "./src/assets/scss/style.scss";
import CustomLayout from "./wrapPageElement";

export const wrapPageElement = CustomLayout;

// When service werker is updated, reload the new information
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
