import express   from 'express'; 
const  app = express() ; 
import indexRoutes  from './routes/index';

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use(indexRoutes)

app.listen(3200, () => {
    console.log('Server running on port 3200')
})