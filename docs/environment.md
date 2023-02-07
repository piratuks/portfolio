# Environment description

- create react app using create-react-app with TypeScript template -> [React](https://create-react-app.dev/docs/getting-started)
- app is using styled-components -> [StyledComponents](https://styled-components.com/)
- app is using service mocker -> [ServiceMocker](https://mswjs.io/) -> However app does not have BE
- app is using rtk query for api state -> [RTKQuery](https://redux-toolkit.js.org/rtk-query/overview)
- app is using slices from redux toolkit -> [RTKQuery](https://redux-toolkit.js.org/api/createSlice)
- code formatting and static code analysis are done with ESLint with Prettier plugin [ESLint](https://github.com/eslint/eslint) & [Prettier](https://github.com/prettier/eslint-plugin-prettier)
- integration and unit tests are done with React Testing Library [Test](https://testing-library.com/docs/)
- navigation is done with React Router [Router](https://reactrouter.com/en/main)
- node version v19.3.0
- rect version v18.2.0
- ui component library [ReactBootstrap](https://react-bootstrap.github.io/)
- github pages [React](https://create-react-app.dev/docs/deployment/#github-pages) and [404](https://github.com/TheRoro/React-Quiz/blob/main/package.json)
- inspiration
  - https://kenjimmy.me/resume
  - https://mattfarley.ca/
  - https://www.free-css.com/free-css-templates/page287/steller
  - https://themewagon.github.io/meyawo/?_ga=2.212626320.58477936.1675616620-486613431.1675438019
- using scroll spy [Spy](https://www.npmjs.com/package/react-use-scrollspy)
- themes with [Bootswatch](https://bootswatch.com/)
  - however for each new theme it is required to have new logo based on that theme
  - defaultTheme under constant is the name which check for logo img color
- email service [Emailjs](https://www.emailjs.com/)

#env

`.env.development`

- REACT_APP_ENABLE_MOCKS = {true, false} - enables or disables mocks

both `.env.development` && `.env.production`

- REACT_APP_EMAIL_SERVICE_ID = {string} - Emailjs service id
- REACT_APP_EMAIL_TEMPLATE_ID = {string} - Emailjs template id
- REACT_APP_EMAIL_PUBLIC_ID = {string} - Emailjs public id
