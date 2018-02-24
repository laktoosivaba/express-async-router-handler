Module to handle all async routes in dict of express routers to pass their errors to express error handler.

### Installation:

```
npm install express-async-router-handler
```

### Usage:

```javascript
const routerHandler = require('express-async-router-handler')
module.exports = (app) => {
  let routers = { 
    // Some functions exporting express.Router instance
    fooRouter: require('./foo')(app),
    barRouter: require('./bar')(app),
  }
  return routerHandler(routers)
}

```
Based on [express-async-handler](https://github.com/Abazhenov/express-async-handler ) by [Alexei Bazhenov](https://github.com/Abazhenov)