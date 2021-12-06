const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const orderController = require("../app/http/controllers/customers/orderController");
const adminOrderController = require("../app/http/controllers/admin/orderController");
const statusController = require("../app/http/controllers/admin/statusController");


//Middlewares
const guest = require("../app/http/middlewares/guest");
const auth = require("../app/http/middlewares/auth");
const admin = require("../app/http/middlewares/admin");

//Routes
function initRoutes(app) {
	app.get("/", homeController().index);

	app.post("/logout", authController().logout);

	app.get("/login", guest, authController().login);

	app.post("/login", authController().postLogin);

	app.get("/register", guest, authController().register);

	app.post("/register", authController().postRegister);

	app.get("/cart", cartController().index);

	app.post("/update-cart", cartController().update);

	//Customer routes
	app.post('/orders', auth, orderController().store);

	app.get('/customer/orders', auth, orderController().index);

	app.get('/customer/orders/:id', auth, orderController().show);
	
	//Admin routes
	app.get('/admin/orders', admin, adminOrderController().index);

	app.post('/admin/order/status', admin, statusController().update);
}

module.exports = initRoutes;
// The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.
// HTTP works as a request-response protocol between a client and server.
// Example: A client (browser) sends an HTTP request to the server; then the server returns a response to the client. The response contains status information about the request and may also contain the requested content.
// get is used to request data from a specified resource, Note that the query string (name/value pairs) is sent in the URL of a GET request:
// post is used to send data to a server to create/update a resource, The data sent to the server with POST is stored in the request body of the HTTP request
// delete is used to delete the specified resource
