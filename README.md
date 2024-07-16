
**完整代码收费可以加微信FY-yuanma咨询接毕业设计论文**

**作者QQ：3042127848 微信：FY-yuanma (支持修改、部署调试、支持代做毕设)**

**接网站建设、小程序、H5、APP、各种系统等**

**选题+开题报告+任务书+程序定制+安装调试+论文+答辩ppt都可以做**

**毕业设计所有选题地址： https://github.com/Good-Night-Unicorn?tab=repositories**

## 基于SSM+Vue的社区养老服务小程序+LW(源码+数据库)

## 一、系统介绍
本基于微信小程序的社区养老服务系统实现了用户功能模块、服务人员模块和管理员功能模块三大部分，具体如下。
（1）用户功能模块
用户通过微信平台打开本系统，注册登录后可主要功能模块包括首页、停车位、电话本、市集信息、社区论坛以及我的（停车位、车位预约、费用信息、电话本、市集信息、我要发帖和我的发帖）。
（2）管理员功能模块
管理员登录后台可对后台的数据进行全面管理，包括个人中心、用户管理、服务人员管理、服务产品管理、服务预约管理、服务状态管理、服务退订管理、活动管理视频管理、用户通知管理、用户待办事项管理、用户已完成时限管理、服务人员通知管理、服务人员待办事项管理、服务人员已完成事项管理、用户投诉管理、撤销投诉管理以及系统管理。
（3）服务人员功能模块
服务人员登录后主要功能模块包括个人中心、用户管理、服务产品管理、服务预约管理、服务状态管理、服务退订管理、活动管理、视频管理、服务人员通知管理、服务人员待办事项管理、服务人员已完成事项管理、用户投诉管理、撤销投诉管理以及系统管理。
## 二、所用技术

后端技术栈：

- SpringMvc
- mybatis
- mysql
- shiro


前端技术栈：
- Vue
- layui
- axios
- bootstrap
- uniapp
- 小程序

## 三、环境介绍

基础环境 :IDEA/eclipse, JDK 1.8, Mysql5.7及以上, Maven3.6, HBuilder

所有项目以及源代码本人均调试运行无问题 可支持远程调试运行

## 四、页面演示
![图片](https://github.com/user-attachments/assets/febac863-6366-4941-9bd1-24fc6c3920cc)
![图片](https://github.com/user-attachments/assets/739f66b8-d111-439e-b7db-033306cbdf2e)
![图片](https://github.com/user-attachments/assets/a4d1f8a3-3944-4f20-943d-71b4fb433cb8)
![图片](https://github.com/user-attachments/assets/18329ce9-380a-4ede-a31d-4d20071afaa3)
![图片](https://github.com/user-attachments/assets/f28b1c5a-4c21-4ef2-896b-f91bb13710ca)
![图片](https://github.com/user-attachments/assets/e2db2d29-6f6d-424c-b904-3d8ef26eb693)
![图片](https://github.com/user-attachments/assets/1459f034-4c59-4776-adbb-69f768264a51)
![图片](https://github.com/user-attachments/assets/31f9a3ee-1c39-43ae-8c8d-7efd67441f1a)
![图片](https://github.com/user-attachments/assets/78ea1c84-1d1b-4b80-81ee-3a3e3d4937b5)
![图片](https://github.com/user-attachments/assets/a0f5fe1b-8b48-443a-963c-444b1a3633db)
![图片](https://github.com/user-attachments/assets/2fcce8c0-1832-44e2-bb1b-98955678a41d)
![图片](https://github.com/user-attachments/assets/a6077263-2950-4b73-85cc-fc339e687e57)
![图片](https://github.com/user-attachments/assets/7fc84d55-92f7-4044-add8-ec4993903faa)
![图片](https://github.com/user-attachments/assets/5cd5a20a-ca36-494b-b8ca-df859aa4f980)


## 五、浏览地址

后台访问地址：http://localhost:8097
- 管理员账号/密码：sysadmin/123456
- 超级管理员账号/密码：admin/admin123

app端用户名密码：
lilong/123456

## 六、部署教程

1. 使用Navicat或者其它工具，在mysql中创建对应名称的数据库，并执行项目的sql文件；
2. 使用IDEA/Eclipse导入Hospital-register项目，若为maven项目请选择maven，等待依赖下载完成；
3. 进入src/main/resources修改application.yml里面的profile文件路径配置和application-druid.yml的数据库配置
4. 启动项目后端项目
5. hbuilder打开Hospital-register-wx项目，修改manifest.json的微信小程序配置，点击运行到小程序模拟器
6. 执行运行后会跳转到微信小程序开发工具
