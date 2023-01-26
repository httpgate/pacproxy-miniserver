# pacproxy-miniserver
pacproxy server runs in a mobile device

手机当服务器用的优点是，他功耗低，性能高，而且平时他也不关机在等电话短信，闲着也是闲着，做做服务器也很好。

# 安装

* Android手机安装nodejs容器APP：d/node.js , 这相当于android上一个nodejs的docker容器
* 在app右上角选 git clone , 输入: https://github.com/httpgate/pacproxy-miniserver , 文件夹选择 Download , 以避免权限冲突
* 在app右下角选 + Add File , 选 Download\pacproxy-miniserver\mini.js , 就会出现一个任务栏， 可以运行，停止，编辑
* 技术人员帮助设置并保存好  \lib\pacpservice.js ，这是相关的网络设置，也可以就用默认设置。
* 在app左上角可以设置 开机自动运行，锁定休眠，锁定wifi连接 等

# 运行

* 首先需要申请一个域名， 并指向用户家的IP, 可以从网站 https://whatismyipaddress.com/ 查到自己的IP
* 设置好路由器端口映射，将外网443端口映射到设置的port(8443)端口, 80映射到设置的httpport(8080)端口
* 运行软件，第一次访问网站会自动获取数字证书，如果因为不能连到自己路由器80端口报错，可以把手机拿到测试能行的家里获取SSL证书。
* 第一次访问运行成功后，就停止服务再重新运行，核对各项参数
* 为避免wifi重连时改变IP地址，建议家里的wifi设置成静态IP地址,和端口映射一致。