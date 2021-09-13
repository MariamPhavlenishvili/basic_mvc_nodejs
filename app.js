const express = require('express');
const morgan = require('morgan');

const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// 1) Middlewares
app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(`${__dirname}/starter/public`))

app.use((req,res, next) => {
    console.log('hello from the middleware');
    next();

})

app.use((req,res, next) => {
    req.requestTime = new Date().toISOString;
    next();
})


// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours', getTour);
// app.post('/api/v1/tours', createTour)
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)

// 3) Routes


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4)Server
module.exports = app;