美国电商销售助手 V2 — Windows 桌面版

【功能】
- Windows 桌面 App / NSIS 安装程序配置
- 系统托盘驻留
- 关闭窗口后继续后台驻留
- 美国电商重大节日与销售节点
- 节日倒计时
- 根据倒计时生成今日行动
- 备货 / 广告 / 促销 / Listing 工作建议
- Amazon / Shopify / Wayfair / Walmart 渠道作战面板
- 自定义产品库：成本、售价、库存、运输天数
- 毛利率自动计算
- 数据保存在本机
- 支持打印/后续扩展

【在 Windows 电脑生成真正 .exe】
1. 安装 Node.js LTS
2. 解压本文件夹
3. 在文件夹地址栏输入 powershell 后回车
4. 执行：npm install
5. 执行：npm run build
6. dist 文件夹内会生成“美国电商销售助手 Setup 2.0.0.exe”
7. 双击安装即可

【重要】
当前版本已包含桌面托盘和软件逻辑，但“Windows 完全退出后仍能推送”的后台定时服务还需要接入 Windows Task Scheduler / 后台服务；这是下一步可加入的功能。
