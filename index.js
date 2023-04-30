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
    console.log("All Category")
    res.send(categories)
})

app.get('/categories/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id)

    if(id==0){
      
        res.send(news)
    }else{
        const selectedCategory=news.filter(n=>n.category_id==id)
        res.send(selectedCategory)
    }
  
})

app.get('/news',(req,res)=>{
    res.send(news)
    console.log('All news')
})
app.get('/news/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id)
    const selectedNews=news.find(n=>n._id==id)
    res.send(selectedNews)
})

app.listen(port,()=>{
    console.log('It is okay')
})