'use strict';

const ViberBot = require('viber-bot').Bot;
const Event = require('viber-bot').Events;

const bot = new ViberBot({
    authToken: process.env.AUTH_TOKEN,
})

bot.on(Event.MESSAGE_RECEIVED, (message, response) => {
    response.send(message);
});

const https = require('https');
// const port = process.env.PORT || 8080;

// const webhookUrl = process.env.WEBHOOK_URL;

// const httpsOptions = {
//     key: ...,
//     cert: ...,
//     ca: ...
// };

https.createServer(httpsOptions, bot.middleware()).listen(port, () => bot.setWebhook(webhookUrl));