const fetch = require('node-fetch')
const key='655da7486fb4321fda271efce01e9950'

//this is node js, not browser js

const root = 'https://api.darksky.net/forecast/'

module.exports = async function(req,res){ //express function; always use request, result
    try {
        const {lon,lat} = req.query
        const url = `${root}/${key}/${lat},${lon}`
        const r = await fetch(url)
        const json = await r.json()
        res.status(200).send(weather)
    
    } catch(e) {
        res.status(500).send(e.message)
    }
}
