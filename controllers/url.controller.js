const{nanoid} = require('nanoid');
const QRCode = require('qrcode');
const urlModel = require('../models/url.model');

//this function will handle the api shorten post request
const shortenUrl = async(req,res)=>{
    const {longUrl} = req.body;

    // generate the unique short code
    const shortCode = nanoid(7);

    // create the full short url 
    // we dynamically get the base url from the request
    const baseUrl = `${req.protocol}://${req.get('host')}`
    const shortUrl = `${baseUrl}/${shortCode}`;

    try{
        //generate the qr code as a data url
        const qrCode = await QRCode.toDataURL(shortUrl);

        // tell the model to save the new url to database
        await urlModel.saveUrl(longUrl,shortCode);

        // send response back to the user
        res.status(201).json({
            shortUrl:shortUrl,
            qrCode:qrCode
        });

    } catch(err){
        console.error('Error in shortenUrl controller:',err.message);
        res.status(500).json('Server Error');
    }
};

module.exports = {shortenUrl};
