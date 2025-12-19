const axios = require('axios');

exports.sendText = (userId,text) =>{
    return axios.post(
        `https://graph.facebook.com/v18.0/me/messages?access_token=${process.env.PAGE_TOKEN}`,
        {
            recipient: {id:userId},
            message: {text}
        }
    )
}