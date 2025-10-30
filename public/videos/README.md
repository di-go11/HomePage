# Videos フォルダ

このフォルダには動画ファイルを配置します。

## 対応形式
- MP4 (推奨)
- WebM
- OGV

## ファイル命名規則
- ファイル名には日本語や特殊文字を使用しない
- 小文字とハイフンを使用 (例: sample-video.mp4)

## 使用方法
1. 動画ファイルをこのフォルダに配置
2. `src/pages/Gallery.tsx` の `videoItems` 配列に新しいエントリを追加
3. サムネイル画像を `public/img/` フォルダに配置

## サンプルファイル
実際に動画を表示するには、以下のようなファイルを配置してください：
- sample1.mp4
- sample2.mp4

サムネイル画像（オプション）：
- video-thumb1.jpg
- video-thumb2.jpg