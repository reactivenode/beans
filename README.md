> Beans - A boilerplate to build a React component library.

## Get Started

To start your own React component library, clone this repository and you are all set to go.

```bash
$ git clone https://github.com/reactivenode/beans your-library-name
$ cd your-library-name
$ rm -rf .git
$ git init
```

## Development and Storybook

You can easily develop and interact with your components by using Storybook. To run the local server, simply run:

```bash
$ npm i
$ npm run storybook
```

Navigate to [http://localhost:9001](http://localhost:9001) to view your stories. They should automatically update as you develop.

Storybook will pick up any story from the `stories.js` file in a component folder.

We are using the latest technology available, so you may need to update your Node versions to latest to accomodate Babel 7 and Webpack 4.
