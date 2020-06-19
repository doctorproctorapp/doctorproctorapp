const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/lawrencechen/Projects/doctorproctorapp/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/lawrencechen/Projects/doctorproctorapp/src/pages/404.js"))),
  "component---src-pages-app-js": hot(preferDefault(require("/Users/lawrencechen/Projects/doctorproctorapp/src/pages/app.js")))
}

