const express = require('express');
const app = express();
app.use(express.static(__dirname)); // Serves your index.html
app.listen(process.env.PORT || 3000);
