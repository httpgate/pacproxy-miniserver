//用户自己设置这一部分
var configs = 
{
	//日志设置, 设置为false可节约存储和性能
	logging : false,

	//pac链接， 设置在浏览器里的格式是：https://yourproxy.domain/paclink, 请尽量改成长一点的随机字符：'/xxxxxxxx'
	paclink : '/0000000000000000',

	//停止上网后几小时后还可以继续访问代理，超时的话需要关闭重新打开浏览器，只适用于paclink上网方式, 不用于限制pacpass上网方式
	iphours : 6,

	//绑定用户名密码的pac链接, 默认是空[], 数据格式是:['paclink', 'username', 'password'], 上网时会提示输入用户密码
	//需要两分钟内输入正确 用户名/密码，否则需要重新打开浏览器
	pacpass : [],  //数据格式：['/1111111111111111', 'proxyuser', 'proxypass'],	

	//你申请到的网站域名，必须填
	domain : 'your.site.domain',

	//网站管理员email，必须填
	email :  '',

	//可选，伪装成海外站点url, 默认为空'', 格式为: https://blog.ddns.com/homepage.htm, 请不要用国内网站伪装
	//值可以为true或false，显示当前目录下的website文件夹。为true时显示为静态网站, 首页为index.html。为false时显示为文件夹
	website :  '',
	
	//代理服务器监听端口, 如果是内网服务器，设置端口转发时，此端口为内部端口，此时建议改为8443
	port : 8443,

	//代理服务器访问端口, 一般等于监听端口。如果是内网服务器，设置端口转发时，此端口为外部端口
	proxyport : 443,
	
	//WEB服务监听端口, 如果是内网服务器，设置端口转发时，此端口为内部端口，此时建议改为8080
	httpport : 8080,

	//Cloudflare DNS API Token, 仅对Cloudflare管理的域名有效，非空时不监听WEB服务端口
	cloudflare_token : '',

	//代理服务器公网ip, 仅当vps服务器有多个公网ip,且只用其中一个公网ip时需要修改
	proxyip : '0.0.0.0',

	//内网服务启用upnp自动端口映射，建议用WAN端口转发替代。路由器重启后upnp端口映射会消失
	upnp : false

};

require('./bundle/pacpservice.js')(configs);
