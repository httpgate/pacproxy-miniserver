//用户自己设置这一部分
var configs = 
{
	//pac链接， 设置在浏览器里的格式是：https://your.site.domain/pac链接, 请尽量改成长一点的随机字符：'/xxxxxxxx'
	paclink : '/0000000000000000',
	//你申请到的网站域名, 同时只能运行一个域名
	domain : 'your.site.domain',
	//伪装成海外站点url, 格式为: https://blog.ddns.com/homepage.htm, 请不要用国内网站伪装
	website :  'https://en.minghui.com',
	//停止上网后几小时后还可以继续访问代理，超时的话可以关闭重新打开浏览器，只适用于paclink
	iphours : 2	,
	//绑定用户名密码的pac链接, 默认是空[], 数据格式是:['paclink', 'username', 'password'], 浏览器会提示输入用户密码
	pacpass : [],  //数据格式：['/1111111111111111', 'proxyuser', 'proxypass'],	
    //管理员email,数字证书到期会受到email通知	
	email : '',
    //如果数字证书过期了，需要续数字证书时，需要把forcert改成true, 重启服务器，访问网站等数字证书更新后再改回来重启网站
	forcert : false

};


require('./lib/pacpservice.js')(configs);
