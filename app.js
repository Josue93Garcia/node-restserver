//* importación de la libreia detenv para variables globlales
require('dotenv').config();
//*importación de la clase Server
const Server = require('./models/server');
//*instancia del servidor
const server = new Server();


server.listen();