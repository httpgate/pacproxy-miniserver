# pacproxy-miniserver
pacproxy server runs in a mobile device

手机当服务器用的优点是，功耗低，性能高，而且平时也不关机在等电话短信，闲着也是闲着，做做服务器也很好。

关于pacproxy参见[pacproxy.js](https://github.com/httpgate/pacproxy.js)


## 推荐

推荐用prcproxy安全的访问以下网站：
* 明慧网：https://www.minghui.org
* 干净世界：https://www.ganjing.com
* 神韵作品: https://shenyunzuopin.com
* 大法经书: https://www.falundafa.org


# 安装

* Android手机安装nodejs容器APP：[dory-node.js](https://play.google.com/store/apps/details?id=io.tempage.dorynode), 这相当于android上一个nodejs的docker容器
* 在app右上角选 git clone , 输入: https://github.com/httpgate/pacproxy-miniserver , 文件夹选择 Download , 以避免权限冲突
* 在app右下角选 + Add File , 选 Download\pacproxy-miniserver\mini.js , 就会出现一个任务栏， 可以运行，停止，编辑
* 设置并保存好  mini.js ，这是相关的网络设置，也可以就用默认设置。
* 在app左上角可以设置 开机自动运行，锁定休眠，锁定wifi连接 等


# 运行

* 首先需要申请一个域名， 并指向用户家的IP, 可以从网站 https://ifconfig.me/ 查到自己的IP
* 设置好路由器端口映射，默认情况下需将外网443端口映射到设置的port(8443)端口, 80映射到设置的httpport(8080)端口
* 运行软件，第一次访问网站会自动获取数字证书, 建议每2个月重启一次服务更新数字证书。
* 第一次访问运行成功后，就停止服务再重新运行，核对各项参数
* 为避免wifi重连时改变IP地址，建议家里的wifi设置成静态IP地址,和端口映射一致。