# 財務コンサルティング ランディングページ

中小企業経営者向けの財務コンサルティングサービス紹介サイトです。NFC名刺での情報共有を想定した、高級感のあるレスポンシブデザインです。

## 機能

- ヒーローセクション（背景画像）
- HEYJEN AI自己紹介動画プレビュー
- サービス紹介カード（4種類）
- 信頼性を高める実績表示
- FAQセクション
- 名刺保存モーダル（iOS/Android対応）
- LINE相談ボタン
- 完全レスポンシブ対応

## サービス内容

1. **経営支援** - 収益改善、組織改革、事業戦略
2. **財務分析（PL/BS）** - 財務の健全性と成長戦略
3. **補助金・助成金申請** - 申請から採択までフルサポート
4. **融資伴走** - 金融機関交渉、事業計画書作成

## 技術スタック

- HTML5
- CSS3（グリッド、フレックスボックス）
- Vanilla JavaScript
- Google Fonts

## セットアップ

1. リポジトリをクローン
2. `index.html` をブラウザで開く
3. ローカルサーバーで起動する場合：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

## カスタマイズ

### 画像の差し替え
- ヒーロー背景：`styles.css` の `.hero` 内の `url()` を変更
- サービスアイコン：HTML内の絵文字を画像タグに差し替え

### LINE連携
`script.js` 内の `openLine()` 関数でLINE IDを設定：
```javascript
window.open('https://line.me/ti/p/~YOUR_LINE_ID', '_blank');
```

### HEYJEN動画
`aiIntroModal` 内の `.video-placeholder` を動画埋め込みコードに差し替え

### 色・フォント
- メインカラー：`#06C755`（LINE緑）
- ダークカラー：`#1a1a1a`
- フォント：Noto Sans JP / Noto Serif JP

## ファイル構成

```
finance-consult-landing-Test/
├── index.html          # メインページ
├── styles.css          # スタイルシート
├── script.js           # JavaScript機能
├── README.md           # このファイル
└── assets/             # 画像・動画（追加予定）
```

## デプロイ

- GitHub Pages
- Netlify
- Vercel
- 任意の静的ホスティングサービス

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 注意事項

- 画像・動画は別途ご用意ください
- LINE IDは実際のものに差し替えてください
- HEYJEN API連携は別途実装が必要です

## ライセンス

MIT License
