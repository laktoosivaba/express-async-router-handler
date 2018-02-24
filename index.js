let _ = require('lodash')
const as = require('express-async-handler')
module.exports = (routers) => {
  return _.each(routers, router => {
    _.each(router.stack, layer => {
      if (!layer.route) return
      _.each(layer.route.stack, route => {
        route.handle = as(route.handle)
      })
    })
  })
}
