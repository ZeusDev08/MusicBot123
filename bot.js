const Cluster = require('discord-hybrid-sharding');
const Discord = require('discord.js');

const client = new Discord.Client({
    shards: Cluster.data.SHARD_LIST, // An array of shards that will get spawned
    shardCount: Cluster.data.TOTAL_SHARDS, // Total number of shards
});

client.cluster = new Cluster.Client(client); // initialize the Client, so we access the .broadcastEval()
client.login('OTkzODQyNjc5MjE1NTY2OTI5.GpOQch.4XiMWBTipUQhIxfY2R7on4pF21LH1XmeopRgcI');