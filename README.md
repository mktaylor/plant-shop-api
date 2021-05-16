# plant-shop-api

This is an implementation of a basic RESTful API for a plant shop with the following endpoints:

- GET: /inventory/plants => return full list of plants in the shop
- GET: /inventory/plants/:plantId => return information for a single plant by unique id
- GET: /orders => return a list of all orders
- GET: /orders/:orderId => return a single order by unique id
- POST: /orders => create a new order and update inventory accordingly

