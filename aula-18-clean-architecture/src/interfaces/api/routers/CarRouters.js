const routerName = 'cars'

const routes = [
  {
    name: '/',
    method: 'post',
    route: (controller) => controller.post
  }
]

module.exports = { name: routerName, routes }