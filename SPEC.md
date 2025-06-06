# 動畫電影網站專案規格書

## 專案目標
本專案旨在建立一個介紹 2025 年熱門動畫電影的靜態網站，使用純前端技術，並確保可以直接部署到 GitHub Pages。網站的主要功能包括：

1. 顯示今年熱門動畫電影的清單，包括圖片、標題和簡介。
2. 提供互動效果，例如滑鼠懸停時的動畫。
3. 使用 CDN 版本的 JavaScript 套件，減少部署的複雜性。

## 目前進度

### 已完成
1. **HTML**
   - 建立了基本的網站結構，包括標題、主內容區域和頁尾。
   - 新增了 2025 年熱門動畫電影的介紹區域，包含圖片、標題和簡介。

2. **CSS**
   - 美化了網站的整體樣式。
   - 為電影卡片新增了懸停時的縮放效果。

3. **JavaScript**
   - 使用 Anime.js 為電影卡片添加了滑鼠懸停時的動畫效果。
   - 引入了 jQuery 和 Anime.js 的 CDN 版本。

### 待完成
1. 增加更多電影的詳細資訊，例如上映日期、導演和評分。
2. 提供搜尋或篩選功能，讓使用者可以快速找到感興趣的電影。
3. 優化網站的響應式設計，確保在行動裝置上的良好顯示效果。
4. 增加多語言支援，讓網站可以切換語言。

## 技術規範
1. **HTML**: 使用語意化標籤，確保結構清晰。
2. **CSS**: 使用外部樣式表，並遵循響應式設計原則。
3. **JavaScript**: 使用純前端技術，並透過 CDN 引入必要的套件。
4. **部署**: 確保網站可以直接部署到 GitHub Pages，並在各大瀏覽器中正常運行。

## 未來展望
- 增加動畫電影的評論功能，讓使用者可以留下對電影的評價。
- 整合第三方 API，例如電影資料庫 API，自動獲取最新的電影資訊。
- 提供深色模式，提升使用者體驗。

## 開發指南
- 所有新增的功能應遵循上述技術規範。
- 在進行任何修改前，請先更新此規格書，確保專案的目標和進度清晰明確。