const cors=require('cors')
const express= require('express')
const app=express()
const port=process.env.PORT || 5000

app.use(cors())
const categories=require('./Data/categories.json')
const news=require('./Data/news.json')

app.get('/',(req,res)=>{
    res.send(`Hi Suvrodeb, Port: ${port}`)
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})

// app.get('/:id',(req,res)=>{
//     const target=categories.find(category=>category.id==id)
//     res.send(target)
// })

app.get('/news',(req,res)=>{
    res.send(news)
})

app.listen(port,()=>{
    console.log('It is okay')
})