# My Portfolio Website

React、Three.js、TypeScriptを使用したモダンな個人ポートフォリオサイトです。

## 🚀 特徴

- **モダンなReact開発**: TypeScript、Vite、React Router Domを使用
- **3D体験**: Three.jsとReact Three Fiberによるインタラクティブな3Dシーン
- **レスポンシブデザイン**: モバイルフレンドリーなUI/UX
- **パフォーマンス最適化**: Viteによる高速なビルドとホットリロード
- **ベストプラクティス**: コンポーネント分割とクリーンアーキテクチャ

## 📁 プロジェクト構成

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── layout/         # レイアウトコンポーネント (Header, Footer)
│   └── three/          # Three.js関連コンポーネント
├── pages/              # ページコンポーネント
├── styles/             # グローバルスタイル
├── hooks/              # カスタムフック
└── utils/              # ユーティリティ関数
```

## 🛠️ 技術スタック

### フロントエンド
- **React 18** - UIライブラリ
- **TypeScript** - 型安全な開発
- **Vite** - ビルドツール
- **React Router Dom** - ルーティング

### 3D/アニメーション
- **Three.js** - 3Dライブラリ
- **@react-three/fiber** - ReactでThree.jsを使用
- **@react-three/drei** - 便利なThree.jsヘルパー

### スタイリング
- **CSS3** - モダンCSS機能
- **CSS Grid & Flexbox** - レイアウト
- **CSS Variables** - テーマシステム

## 🚀 セットアップ

### 前提条件
- Node.js (v16以上)
- npm または yarn

### インストールと実行

1. **依存関係のインストール**
   ```bash
   npm install
   ```

2. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

3. **ビルド**
   ```bash
   npm run build
   ```

4. **プレビュー**
   ```bash
   npm run preview
   ```

## 📄 ページ構成

- **ホーム** (`/`) - ヒーローセクションと3Dシーン
- **プロフィール** (`/about`) - 経歴とスキル
- **作品集** (`/portfolio`) - プロジェクトの展示
- **お問い合わせ** (`/contact`) - コンタクトフォーム

## 🎨 カスタマイズ

### 色の変更
`src/styles/index.css`でCSS変数を編集:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
}
```

### 3Dシーンの編集
`src/components/three/ThreeScene.tsx`でオブジェクトや設定を変更:

```typescript
// オブジェクトの追加
<RotatingCube position={[-3, 0, 0]} />
<FloatingSphere position={[0, 0, 0]} />
<RotatingTorus position={[3, 0, 0]} />
```

## 📱 レスポンシブ対応

- **デスクトップ**: 1200px以上
- **タブレット**: 768px - 1199px
- **モバイル**: 768px未満

## 🌟 主な機能

### Three.jsシーン
- 回転するキューブ
- 浮遊する球体
- アニメーションするトーラス
- パーティクルシステム
- インタラクティブなカメラコントロール

### UI/UX
- スムーズなスクロール
- フェードインアニメーション
- モバイルメニュー
- レスポンシブナビゲーション

## 🔧 開発時のTips

### 新しいページの追加
1. `src/pages/`に新しいコンポーネントを作成
2. `src/App.tsx`にルートを追加
3. ナビゲーションに追加

### 新しい3Dオブジェクトの追加
1. `src/components/three/`に新しいコンポーネントを作成
2. `ThreeScene.tsx`にインポートして配置

## 📦 主要な依存関係

```json
{
  "@react-three/drei": "^9.105.4",
  "@react-three/fiber": "^8.16.6",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.23.1",
  "three": "^0.164.1"
}
```

## 🚀 デプロイ

### Vercel
```bash
npm run build
# Vercelにデプロイ
```

### Netlify
```bash
npm run build
# distフォルダをNetlifyにアップロード
```

## 📄 ライセンス

MIT License

## 👨‍💻 開発者

あなたの名前 - [GitHub](https://github.com/yourusername)

## 🤝 貢献

1. プロジェクトをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/新機能`)
3. 変更をコミット (`git commit -am '新機能を追加'`)
4. ブランチにプッシュ (`git push origin feature/新機能`)
5. プルリクエストを作成

---

⭐ このプロジェクトが気に入ったら、ぜひスターをお願いします！
