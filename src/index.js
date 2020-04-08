const express = require('express');
const app = express();
const path= require('path');




//settings
app.set('port',3000);
// configurando a la carpeta views
app.set('views',path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');


//middlewares


//routes 
app.use(require('./routes/index'));



//console.log(__dirname);
//console.log(path.join(__dirname,'views/index.html'));

//static files 
app.use(express.static(path.join(__dirname,'public')));

//listenig the server
app.listen(app.get('port'),() => {
console.log('Server on port',app.get('port'));
});