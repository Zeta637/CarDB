const router = require("./controllers/route")
const express = require('express');
var methodOverride = require('method-override');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const hbs = require('hbs')
app.set('view engine', 'hbs')
app.use(router)



app.listen(process.env.PORT || 4000);

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//     console.log(`Express MVC app is running on ${port}`);
// });

// END