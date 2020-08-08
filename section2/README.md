# Section2

## 4. TypeScriptとAngular CLIをインストールする

書籍だと、インストールする際にバージョン指定していないが、
書籍とバージョンをそろえるためにバージョンを指定する。

```bash
sudo npm install -g typescript@2.6.2
sudo npm install -g @angular/cli@1.6.0
```

また、必要なライブラリが不足していたようなので、以下の処理を追加で実行している。

```bash
sudo npm install -g @angular-devkit/core@10.0.5
```
