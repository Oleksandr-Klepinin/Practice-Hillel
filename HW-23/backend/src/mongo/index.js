const mongoose = require('mongoose');
const user = 'aleksandrklepinin29';
const password = 'kiN4Z2o09fmZAQB9';

function mongo() {
    mongoose.connect(
        `mongodb+srv://${user}:${password}@cluster0.vhgzq9s.mongodb.net/?retryWrites=true&w=majority`,
        {},
    ).then(() => console.log('Connected!'));
}

module.exports = mongo;