<p align="center">
  <a href="https://recipes.codecutting.com">
    <img alt="CodeCutting" src="https://www.codecutting.com/static/media/logo.d3776f2c.png" width="60" />
  </a>
</p>
<h1 align="center">
  CodeCutting Recipes
</h1>

My favorite recipes hosted in a clean easy to use Gatsby + TypeScript app.

### Dev Setup

- Clone the repository
- From the repository root install the app dependencies using yarn.
  - `yarn install`
- Run the app / file watcher
  - `npm start`
- Open browser to http://localhost:8000 to view the application. Use http://localhost:8000/__graphql to access GraphiQL

### Deployment

Commits to master automatically fire off a github action to build and commit to the gh-pages branch which updates the production site.
