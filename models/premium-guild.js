const m = require('mongoose');


module.exports = m.model('premium-guild', new m(
   "premium-guild",
   new m.Schema({
        guildId: String,
        Expire: Number,
        Permanent: Boolean,
   })
))