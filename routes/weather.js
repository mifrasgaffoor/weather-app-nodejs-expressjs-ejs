const router =  require("express").Router();
const fetch =  require("node-fetch");



router .get("/", (req,res)=>{
    res.render('index' ,{
             city:null,
             des:null,
             icon:null,
             temp:null
    })
})

router.post("/" , async(req,res)=>{
 const city = req.body.city;
const apikey = nul
 const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`


try {
   await fetch(Url)
 .then(res=>res.json())
 .then(data=>{
     if(data.message === 'city not found')
     {
         res.render('index' ,{
             city:data.message,
             des:null,
             icon:null,
             temp:null

         })
     }else{
const city = data.name ;
const des =  data.weather[0].description;
const icon = data.weather[0].icon;
const temp = data.main.temp;
res.render('index' ,{
    city:city,
    des:des,
    icon:icon,
    temp:temp


})
    }
 });
} catch (error) {
    res.render('index',{
        city:"Something Wrong",
        des:null,
        icon:null,
        temp:null
    })
}


 
})

module.exports=router
