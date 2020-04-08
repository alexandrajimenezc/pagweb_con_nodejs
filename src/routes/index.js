//LAMO DE NVO A EXPRESS PQ USARE EL MODULO DE EXPRESS ROUTER
const express=require('express');
// ROUTER PERMITE TENER MULTIPLES RUTAS POR SEPARADO EN VARIOS ARCHIVOS 
const router= express.Router();



router.get('/',(req,res)=>{

    res.render('index.html',{title:'First website'})
    //res.sendFile(path.join(__dirname,'views/index.html'));


});


router.get('/contact',(req,res)=>{

    res.render('contact.html',{title:'Contact Page'})
    

});

module.exports = router