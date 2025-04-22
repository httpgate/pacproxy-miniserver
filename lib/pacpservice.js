//技术人员设置好，并配置好路由器的端口映射
var app_configs = 
{
	//代理服务器监听端口, 路由器上设置端口转发时，此端口为内部端口, 外部端口是443
	port : 8443,
	//WEB服务器监听端口, 路由器上设置端口转发时，此端口为内部端口，外部端口是80
	httpport : 8080,
	//日志设置, 设置为false可节约存储和省电
	logging : false,
	//代理服务器访问端口, 路由器上设置端口转发时，设置端口转发时，此端口为外部端口
	proxyport : 443,
};


module.exports = (user_configs) => {
	require('pacproxy-js').merge(app_configs, user_configs);
	require('pacproxy-https-server').runServer(app_configs);
}