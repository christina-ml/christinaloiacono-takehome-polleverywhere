# Poll Everywhere Raffle-Takehome-Coding-Challenge

Coding challenge where you build a Raffle App client that interacts with a RESTful API using React.

# Deployments
## Deployed Links
Deployed Backend: [https://christinaloiacono-takehome-polleverywhere.onrender.com/](https://christinaloiacono-takehome-polleverywhere.onrender.com/)

Deployed Frontend: [https://christinaloiacono-polleverywhere.netlify.app/](https://christinaloiacono-polleverywhere.netlify.app/)

---
Backend Deployment:
- [ElephantSQL](https://www.elephantsql.com/) - ElephantSQL installs and manages PostgreSQL databases for you
- [Render](https://dashboard.render.com/) - Render is a unified cloud to build and run all your apps and websites with free TLS certificates, global CDN, private networks and auto deploys from Git.

Frontend Deployment:
- [Netlify](https://www.netlify.com/) - Netlify is a remote-first cloud computing company that offers a development platform that includes build, deploy, and serverless backend services for web applications and dynamic websites.

# How to Run This Project

## Running locally on your machine

Fork and clone this repository.

Open this project in the terminal. Be sure to npm install in order for the dependencies to run.

```bash
npm install
```
In terminal, run these commands:
```bash
cd backend
npm run db:reset
npm start
```
Then open a new terminal. Change directories to front end. Run these commands:
```bash
cd ..
cd frontend
npm start
```
Open [http://localhost:3000/](http://localhost:3000/) in your web browser.

# Backend

Technologies: 
- [Express.js](https://expressjs.com)
- [Node.js](https://nodejs.org/en/docs)
- [PostgreSQL](https://www.postgresql.org/)
 
### Dependencies
- [express](https://expressjs.com) - Node.js web application framework
- [dotenv](https://www.npmjs.com/package/dotenv) - To use environment variables from the `.env` file.
- [pg-promise](https://www.npmjs.com/package/pg-promise) - PostgreSQL interface for Node.js
- [cors](https://www.npmjs.com/package/cors) - Cross-origin resource sharing (CORS)

# Frontend

Technologies: 
- [React.js](https://react.dev)
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Axios](https://axios-http.com/docs/intro)

### Dependencies
Libraries:
- [MaterialUI](https://mui.com/):
```
npm install @mui/material @emotion/react @emotion/styled
```
- [SCSS/SASS](https://sass-lang.com/install/) - for SCSS styling
- [dotenv](https://www.npmjs.com/package/dotenv) - To use environment variables from the `.env` file.

### MaterialUI
- [Material UI](https://mui.com/material-ui/getting-started/)

### React Icons
- [react-icons](https://react-icons.github.io/react-icons) - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports

### Other Resources
- [Google Fonts CSS API](https://fonts.google.com/)