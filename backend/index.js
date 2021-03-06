const express =  require('express');
const morgan = require('morgan');
const cors = require('cors');

const { mongoose } = require('./database');

const app  = express();


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes
app.use('/api/vehicles', require('./routes/task.routes'));



//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});