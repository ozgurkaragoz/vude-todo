# Vue Todo App

To run the app, you need to have [Node.js](https://nodejs.org/en/) installed. If you want to use docker, you need to have [Docker](https://www.docker.com/) installed.



https://github.com/ozgurkaragoz/vue-todo/assets/6477375/d87a69c0-f72f-4c2f-822d-b6c5c0286d73



## Run with docker
```
docker build -t vue-todo .
docker run -it -p 8080:80 --rm --name vue-app-container vue-todo
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run tests
```
npm run test
```

### Run tests with coverage
```
npm run test:coverage
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
