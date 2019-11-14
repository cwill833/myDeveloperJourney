const express = require('express');

// we need to make a views folder
// inside we need one index page

// we then need a route to connect to that index page
// which means we are going to need a routs folder
// controllers folder


const indexRouter = require('./routes/index')

const app = express();
const port = 3000;

app.set('view engine', 'ejs')


app.use('/', indexRouter )


app.listen(port, () => {
    console.log(`Express is listening on port: ${port}`);
});

