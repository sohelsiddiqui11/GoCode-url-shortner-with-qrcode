const urlModel = require('../models/url.model');
const redirectToLongUrl = async(req,res)=>{
    // get the shortcode from the url parametres
    const {shortCode} = req.params;

    try{
        // ask the model to find thr long url
        const longUrl = await urlModel.getLongUrl(shortCode);

        if(longUrl){
            // if we find it redirect the user 
            return res.redirect(longUrl);
        }else{
            // if not send page not found error 404
            return res.status(404).send('URL not found');
        }
    }catch (err){
        console.error('Error in redirectToLongUrl controller:',err.message);
        return res.status(500).send('Server Error');
    }
};

module.exports = {redirectToLongUrl};