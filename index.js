import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));





app.get("/", (req, res) => {
    res.render("index.ejs", { content: "Waiting for data..." });
  });


app.post("/weather", (req, res)=>{
    try {

    const lon = req.body.longitude;
    const lat = req.body.latitude;
    console.log(lon + lat);
    
    
      res.render("weather.ejs", { 
        lon: lon,
        lat: lat
       });
    } catch (error) {
        console.log(error.response.data);        
        res.status(404);
    }   
        
});











app.listen (port, ()=> {
    console.log (`App is running on port ${port}`);
})