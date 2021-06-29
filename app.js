'use strict';

require('dotenv').config();

const ViberBot = require('viber-bot').Bot;
const Event = require('viber-bot').Events;
const Express = require('express');

const app = Express();

const bot = new ViberBot({
    authToken: process.env.AUTH_TOKEN,
    name: 'EventBot',
    avatar: ''
})

bot.on(Event.MESSAGE_RECEIVED, (message, response) => {
    response.send(message);
});

const port = process.env.PORT || 80;

const webhookUrl = process.env.WEBHOOK_URL;

app.use('/viber/webhook', bot.middleware());

app.listen(port, () => {
    bot.setWebhook(`${webhookUrl}/viber/webhook`).catch(error => {
        console.log('Can not set webhook on following server. Is it running?');
        console.error(error);
        process.exit(1);
    });
});
