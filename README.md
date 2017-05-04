// 使用http-server起本地服务器:
# 安装
cnpm install -g http-server

// 进入项目目录:
# 开启端口为3100的服务器
http-server -p 3100

#全局安装tunnel   无效
cnpm install -g localtunnel 

# 映射  进入cmd
lt --port 3100

// 由于 localtunnel.me 是国外的服务器，访问速度有时候不太理想，这时候我们可以自己搭建 localtunnel 的服务端。
#安装  
$ git clone git://github.com/defunctzombie/localtunnel-server.git
$ cd localtunnel-server
$ cnpm install

#运行  进入localtunnel-server目录
　　bin/server --port 3100

3 另开item 
　　lt --port 3100
　　(your url is:  https://ejzueqclng.localtunnel.me ) 就实现了通过这个地址访问本地服务器3100端口的项目了～


#替代方案
// 1. utralhook服务 ： http://www.utralhook.com   无效
// 2. qq浏览器   无效




