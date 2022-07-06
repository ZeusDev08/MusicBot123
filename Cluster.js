const Cluster = require('discord-hybrid-sharding');

const manager = new Cluster.Manager(`${__dirname}/bot.js`, {
    totalShards: 7, // or 'auto'
    /// Check below for more options
    shardsPerClusters: 2,
    // totalClusters: 7,
    mode: 'process', // you can also choose "worker"
    token: 'OTkzODQyNjc5MjE1NTY2OTI5.GpOQch.4XiMWBTipUQhIxfY2R7on4pF21LH1XmeopRgcI',
});

manager.on('clusterCreate', cluster => console.log(`Launched Cluster ${cluster.id}`));
manager.spawn({ timeout: -1 });