const router = require("./controllers/route")
const express = require('express');
const app = express();
const hbs = require('hbs')
app.set('view engine', 'hbs')
app.use(router)


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Express MVC app is running on ${port}`);
});