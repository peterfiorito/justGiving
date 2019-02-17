const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const axios = require("axios")

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.appId = "99f38cad";

app.get(`/charity/:id`, (req,res) => {
    let charityId = req.params.id;
    axios.get(`https://api.justgiving.com/${app.appId}/v1/charity/${charityId}`)
    .then((data) => {
        res.send(data.data);
    }).catch((error)=>{
        throw new Error ('Unable to retreive charity from external API ' + error);
    })
})
app.get(`/details/:id/donations`, (req,res) => {
    let charityId = req.params.id;
    axios.get(`https://api.justgiving.com/${app.appId}/v1/charity/${charityId}/donations`)
    .then((data) => {
        res.send(data.data);
    }).catch((err)=>{
        throw new Error ('Unable to retrieve donations from external API '+ error);
    })
})
app.get('/charities', (req, res) => {
  res.send(
    [{id: 183092, name: "British Heart Foundation", img: "https://images.justgiving.com/image/3a5218cb-2d26-431d-83fd-25fb4f69fd9a.png"},
      {id: 2116, name: "Macmillan Cancer Support", img: "https://images.justgiving.com/image/4cf848f3-9ca5-4f54-9250-216c74d58eb7.png"},
      {id: 2357, name: "Cancer Research UK", img: "https://images.justgiving.com/image/b410179a-2042-4c6b-903b-df106b48fc3c.jpg"},
      {id: 13441, name: "Oxfam", img: "https://images.justgiving.com/image/ebc6a2ca-1c7f-4aa5-9e1a-bfb982397bc4.jpg"},
      {id: 183560, name: "National Trust", img: "https://images.justgiving.com/image/04b230d8-2bf6-46fd-87dc-3ccc7b3abe8d.png"},
      {id: 18570, name: "Save the Children", img: "https://images.justgiving.com/image/a2d03110-67aa-43da-aaec-56f842e7dc3e.png"}]
  )
})
app.listen(process.env.PORT || 8081)
