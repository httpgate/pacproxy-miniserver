//技术人员设置好，并配置好路由器的端口映射
app_configs = 
{
	//在公网提供https还是http访问，设置为false仅测试用。
	https : false,
	//代理服务器监听端口, 路由器上设置端口转发时，此端口为内部端口, 外部端口是443
	port : 8443,
	//WEB服务器监听端口, 路由器上设置端口转发时，此端口为内部端口，外部端口是80
	httpport : 8080,
	//日志设置, 设置为false可节约存储和省电
	logging : true,
    //启用 websocket 代理
	websocket : true,
};


module.exports = (user_configs) => {
	require('pacproxy-js').merge(app_configs, user_configs);
	require('pacproxy-https-server').runServer(app_configs);
}