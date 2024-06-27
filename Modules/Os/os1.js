const os = require('os');

const user = os.userInfo();

console.log(user);

console.log(`System up-time is ${os.uptime()} secs`);

console.log(os.totalmem());

console.log(os.freemem());