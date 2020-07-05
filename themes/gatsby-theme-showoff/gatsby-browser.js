// import "prismjs/themes/prism-okaidia.css";
import 'prismjs/themes/prism-tomorrow.css'
import './src/css/style.css'
import CustomLayout from './wrapPageElement'

export const wrapPageElement = CustomLayout

// When service werker is updated, reload the new information
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
