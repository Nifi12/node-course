const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));


app.use(shopRoutes);
app.use('/admin', adminData.routes);

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
