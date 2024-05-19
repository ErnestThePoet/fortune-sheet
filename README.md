<p align="center">
  <img align="center" src="logo.png" width="150px" height="150px" />
</p>
<h1 align="center">FortuneSheet</h1>
<p align="center">FortuneSheet is a drop-in javascript spreadsheet library that provides rich features like Excel and Google Sheets</p>

## 介绍
本仓库是对[FortuneSheet原仓库](https://github.com/ruilisi/fortune-sheet)的一个Fork，目的是Patch掉部分已知bug。

## 改动列表
- 使用右键菜单复制粘贴，粘贴时，粘贴区域下方的一个单元格会被清空。使用Ctrl+C/V进行复制粘贴则无问题。因此禁用了右键菜单的复制粘贴。
  - Commit: `61b50f5a188b902314d98076e24efa9fa263e3a0`
  - Commit Message: `chore: remove copy/paste from menu`

## 如何维护
### 先决条件
需要安装以下程序：
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/prebuilt-installer)
- [Yarn v1](https://classic.yarnpkg.com/en/docs/install#windows-stable)

### 第一次Clone仓库
- `git clone https://github.com/ErnestThePoet/fortune-sheet.git`
- 进入包含`package.json`的目录，运行`yarn`安装所有依赖
- `yarn storybook`并访问`127.0.0.1:6006`来看演示页面是否正常启动

### 对代码进行修改后
- `yarn Storybook`进行功能自测
- `yarn build`进行构建