# 開発マニュアル

## ローカルサーバ起動

```shell
npm start
```

## テスト（Interactive mode）

```shell
npm test
```

## package.jsonの更新

事前に `npm install -g npm-check-updates` しておく。

```shell
npm-check-updates
ncu -u
npm install
```

## GitHub Pages へのデプロイ

```shell
npm run deploy
```
