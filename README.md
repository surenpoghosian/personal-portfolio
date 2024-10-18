# surenpoghosyan.dev

My personal [website](https://surenpoghosyan.dev) with a list of my projects that help people learn and blog posts about life, web development, and machine learning.

## Development

The website is built on [Gatsby](https://www.gatsbyjs.com/). See the [Gatsby cheat-sheet](https://www.gatsbyjs.com/gatsby-cheat-sheet.pdf) for development hints.

### Running the project locally

Install the proper version of Node:

### Running the project locally

Install proper version of Node:

```bash
nvm use
```

Install dependencies:

```bash
npm i
```

To run the project locally in development mode on [http://localhost:8000](http://localhost:8000):

```bash
npm run develop
```

View GraphiQL, an in-browser IDE, to explore your site's data and schema on [http://localhost:8000/___graphql](https://localhost:8000/___graphql)

To build the production version of the project:

```bash
npm run build
```

Serve the production build for testing on [http://localhost:9000](http://localhost:9000):

```bash
npm run serve
```

To do ESLint and Type checking:

```bash
npm run lint
npm run type
```

### Working with icons

Use [react-icons.github.io](https://react-icons.github.io/react-icons) to search for available icons.

### Styling components

Use [tailwindcss.com](https://tailwindcss.com) to search for available CSS classes.

### Custom Domain Support

To serve the [surenpoghosyan.dev](https://surenpoghosyan.dev) web-site on a custom domain [surenpoghosyan.dev](https://surenpoghosyan.dev) make sure that the `public` branch has `CNAME` file in the root folder. For more details read [this](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site).
