//用户自己设置这一部分
var configs = 
{
	//pac链接密码， 设置在浏览器里的格式是：https://your.site.domain/链接密码, 请尽量改成长一点的随机密码：'/xxxxxxxx'
	paclink : '/0000000000000000',
	//你申请到的网站域名, 同时只能运行一个域名
	domain : 'your.site.domain',
	//伪装成海外站点url, 格式为: https://blog.ddns.com/homepage.htm, 请不要用国内网站伪装
	website :  'https://en.minghui.com',
	//停止上网后几小时后还可以继续访问代理，超时的话可以关闭重新打开浏览器，或者关闭wifi后重新连接wifi来重启计时
	iphours : 2	,
    //管理员email,数字证书到期会受到email通知
	email : '',

};


require('./lib/pacpservice.js')(configs);
