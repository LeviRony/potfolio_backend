const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{
    /* useNewUrlParser: true, */
    /* useUnifiedTopology: true, */
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
console.log('Error While connting to MongoDB', err);    
});

module.exports = mongoose;