const express = require('express')
const {newProd} = require('/Index2.js')

//end points//
const app= express()
app.use(express.urlencoded({extended:true}))
const port= 5500;

app.get('/products', async (req, res)=>{
    const products = await newProd.getProducts();
    const {limit} = req.query
    if (limit) return res.json(products.slice(0,limit))
    else return res.json(products)
});

app.get ('/products/:pid', async (req,res)=>{
    const products = await newProd.getProducts();
    const {pid} = req.params
    const product = products.find (products => products.id === parseInt(pid))

    if (product) return res.status(200).json(product)
    else return res.status(404).json({message:'Product not found'});
})
  

app.listen(port, () =>{
    console.log("Subido al servidor", port);
});