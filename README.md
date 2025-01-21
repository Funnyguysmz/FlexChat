# IM即时通讯项目实践

## 简介

本项目基于Expo+React-Native开发，后端部分已部署在云服务器上。

项目可能存在部分未修正bug，例如离线消息接收时间有误等 ~~（有空可能会改）~~

## 功能介绍

~~群聊功能接口部分已做，未落地实现~~

好友单聊支持

注册时无需手机号验证，所以可以随便输入

## 运行

首先需要安装依赖

```shell
npm install
```

安装好后可采用2种启动方式，测试设备在局域网下可采用：

```shell
npx expo start
```

如果局域网不通畅、不在局域网下或者需要远程测试，可采用：
```shell
npx expo start --tunnel
```

执行后可见操作列表以及二维码，此时按下`s`键切换到`Expo Go`调试模式，再根据你的需要选择测试设备，`macOS`下可直接启动模拟器。
