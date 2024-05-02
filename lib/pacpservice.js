//技术人员设置好，并配置好路由器的端口映射
var app_configs = 
{
	//代理服务器监听端口, 路由器上设置端口转发时，此端口为内部端口, 外部端口是443
	port : 8443,
	//WEB服务器监听端口, 路由器上设置端口转发时，此端口为内部端口，外部端口是80
	httpport : 8080,
	//日志设置, 设置为false可节约存储和省电
	logging : false,
	//重启代理时是否更新数字证书后再启动代理服务，设置为false可以缩短服务中断时间，但更新后的数字证书只在下次重启时加载。
	forcert : true	
};


module.exports = (user_configs) => {
	require('pacproxy-js').merge(app_configs, user_configs);
	require('pacproxy-https-server').runServer(app_configs);
}