//用户自己设置这一部分
var configs = 
{
	//你申请到的网站域名，必须填
	domain : 'your.site.domain',

	//伪装成海外站点url,可选, 格式为: https://blog.ddns.com/homepage.htm, 请不要用国内网站伪装
	website :  'https://en.minghui.com',

	//pac链接， 设置在浏览器里的格式是：https://yourproxy.domain/pac链接, 请尽量改成长一点的随机字符：'/xxxxxxxx'
	paclink : '/0000000000000000',

	//停止上网后几小时后还可以继续访问代理，超时的话需要关闭重新打开浏览器，只适用于paclink上网方式
	iphours : 2,

	//绑定用户名密码的pac链接, 默认是空[], 数据格式是:['paclink', 'username', 'password'], 上网时会提示输入用户密码
	pacpass : ['/1111111111111111', 'proxyuser', 'proxypass'],	

	//管理员email, 必须填，数字证书到期会受到email通知	
	email : ''

};


require('./lib/pacpservice.js')(configs);
