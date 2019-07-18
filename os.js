var os=require('os');

console.log('plateform '+os.platform)
console.log('architecture '+os.arch)
console.log('HostName '+ os.hostname)
console.log("useinfo type "+ typeof os.userInfo())
console.log('Userinfo '+ JSON.stringify(os.userInfo().username));