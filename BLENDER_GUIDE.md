# Blenderモデルをウェブサイトに追加する手順

このガイドでは、Blenderで作成した3Dモデルをウェブサイトの3Dギャラリーに追加する方法を説明します。

## 🎨 Blenderでのモデル準備

### 1. モデルの最適化
```
- ポリゴン数を適切に調整（ウェブ用に5万ポリゴン以下推奨）
- 不要な頂点や面を削除
- モディファイアを適用
- UV展開の確認
```

### 2. マテリアルの設定
```
- PBR（Physically Based Rendering）マテリアルを使用
- テクスチャサイズの最適化（1024x1024または2048x2048推奨）
- 法線マップ、粗さマップなどの適切な設定
```

### 3. GLTFエクスポート設定

Blenderから `.gltf` または `.glb` 形式でエクスポートします：

```
File > Export > glTF 2.0 (.glb/.gltf)

エクスポート設定：
✅ Format: GLB Binary
✅ Include: Selected Objects（選択したオブジェクトのみ）
✅ Transform: +Y Up（Y軸を上に）
✅ Geometry: Apply Modifiers（モディファイアを適用）
✅ Material: Export Materials（マテリアルをエクスポート）
✅ Texture: 
   - Export original（元のテクスチャをエクスポート）
   - Create WebP（WebP形式で圧縮）
✅ Animation: Export Animations（アニメーションがある場合）
```

## 📁 ファイルの配置

1. エクスポートした `.glb` ファイルを `public/models/` フォルダに配置
2. ファイル名は英数字とハイフンのみ使用（例: `my-character.glb`）

## 💻 コードでの追加方法

### Gallery.tsx の更新

`src/pages/Gallery.tsx` の `galleryItems` 配列に新しいアイテムを追加：

```tsx
{
  id: 3, // 新しいID番号
  title: 'あなたのBlenderモデル',
  description: 'モデルの説明文をここに記述',
  scene: 'your-model-scene',
  component: () => <BlenderModelViewer 
    modelPath="/models/your-model.glb" 
    title="モデルタイトル"
    autoRotate={true}  // 自動回転のON/OFF
    scale={1}          // モデルのスケール
    enableZoom={true}  // ズーム機能のON/OFF
  />,
  created: '2024-02-15',
  technologies: ['Blender', 'Three.js', 'GLTF', 'WebGL']
}
```

### BlenderModelViewerのプロパティ

| プロパティ   | 型      | 説明                         | デフォルト |
| ------------ | ------- | ---------------------------- | ---------- |
| `modelPath`  | string  | モデルファイルのパス（必須） | -          |
| `title`      | string  | モデルのタイトル             | -          |
| `autoRotate` | boolean | 自動回転を有効にする         | true       |
| `scale`      | number  | モデルのスケール             | 1          |
| `enableZoom` | boolean | ズーム機能を有効にする       | true       |

## 🎛️ 実装例

### 基本的な使用例
```tsx
<BlenderModelViewer 
  modelPath="/models/robot.glb" 
  title="ロボットモデル"
/>
```

### カスタマイズされた例
```tsx
<BlenderModelViewer 
  modelPath="/models/house.glb" 
  title="建築物モデル"
  autoRotate={false}
  scale={0.5}
  enableZoom={true}
/>
```

## 🔧 トラブルシューティング

### モデルが表示されない場合
1. **ファイルパスを確認**
   - `/models/` から始まる正しいパスか確認
   - ファイル名に日本語や特殊文字が含まれていないか確認

2. **ファイルサイズを確認**
   - 大きすぎるファイル（10MB以上）は読み込みに時間がかかる
   - テクスチャサイズを小さくする

3. **ブラウザの開発者ツールでエラーを確認**
   - F12でコンソールを開いてエラーメッセージを確認

### パフォーマンスが悪い場合
1. **ポリゴン数を削減**
   - Blenderで `Decimate` モディファイアを使用
   - LOD（Level of Detail）を考慮

2. **テクスチャを最適化**
   - 解像度を下げる（2048x2048 → 1024x1024）
   - 圧縮形式を使用（WebP、KTX2）

## 📝 推奨ワークフロー

1. **Blender作業**
   - モデリング → UV展開 → テクスチャリング → 最適化

2. **エクスポート**
   - GLB形式で書き出し
   - ファイルサイズを確認（5MB以下推奨）

3. **ウェブ統合**
   - `public/models/` にファイル配置
   - `Gallery.tsx` にコード追加

4. **テスト**
   - ローカル環境で動作確認
   - 様々なデバイスでテスト

## 🎨 推奨モデル仕様

- **ポリゴン数**: 10,000〜50,000
- **テクスチャサイズ**: 1024x1024 または 2048x2048
- **ファイルサイズ**: 5MB以下
- **マテリアル**: PBRマテリアル
- **アニメーション**: 30fps、適切な長さ

これらの手順に従って、美しいBlenderモデルをウェブサイトに統合してください！
