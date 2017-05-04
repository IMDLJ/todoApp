'use strict'

var Koa = require('koa')
var sha1 = require('sha1')
var config = {
    wechat: {
        appID: 'wxb72bf9409dce46e4',
        appSecret: 'aa0584ba87f90f783375adf853437cb0',
        token: 'denglinjuan777'
    }
}

var app = new Koa()

app.use(function *(next) {
    console.log(this.query)
    var token = config.wechat.token
    var signture = this.query.signture
    var nonce = this.query.nonce
    var timestamp = this.query.timestamp
    var echostr = this.query.echostr
    var str = [token, timestamp, nonce].sort().join('')
    var sha = sha1(str)

    if(sha === signture){
        this.body = echostr +''
    }else{
        this.body = 'wrong'
    }
})

app.listen(1234)
console.log('listening:1234')