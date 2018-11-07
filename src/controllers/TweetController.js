// Ele vai armazenar todas as nossas ações que temos que fazer num TWEET

const Tweet = require('../models/Tweet');

module.exports = {

    async index(req, res) {
        const tweets = await Tweet.find({}).sort('-createdAt'); // O menos é como se fosse o DESC do SQL

        return res.json(tweets);
    },

    async store(req, res) {

        // O body vem em JSON na nossa aplicação    
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);
    }

};
