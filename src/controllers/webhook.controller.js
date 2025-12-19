const botFlow = require('../bot/botFlow');

exports.verify = (req,res)=>{
    const VERIFY_TOKEN=process.env.VERIFY_TOKEN;
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if(mode === 'subscribe' && token === VERIFY_TOKEN){
        res.status(200).send(challenge);
    }else{
        res.sendStatus(403);
    }
}

exports.receive = (req,res)=>{
    const event = req.body.entry[0].messaging[0];
    const senderId= event.sender.id;
    const text = event.message?.text;

    if(text) botFlow.handleMessage(senderId,text);

    res.sendStatus(200);
}