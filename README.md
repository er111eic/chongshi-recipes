# 崇食 V 社｜炊事食譜庫

繁體中文、手機優先。32道食譜、5份菜單、43頁A4圖，另保留原案與修訂。

## 維護

- `recipe--名稱.md`：單道食譜，開頭JSON資料（YAML子集）＋Markdown流程。
- `menu--日期.md`：菜單與食譜代號；不確定日期明示。
- `alternatives.md`：未採用提案。
- `build.mjs`：將根目錄資料重建成分類目錄，再輸出靜態網站至dist並檢查連結。
- `site-build.mjs`：頁面與A4 SVG產生器。
- Node.js 22 執行 `npm run build`，不需安裝相依套件。
- 提交main後GitHub Actions自動建置及部署Pages。

原紀錄未定量的食材不臆測數字；咖哩餐日期待確認。舊採買圖有漏項，僅供回顧。Marked授權見MARKED-LICENSE.md。


## 2026-10-12 ZIP校對

完整更正見 audit.md。31張封存圖片由 archive-assets.json 記錄來源及SHA256；generated-*.png為歷史生成海報，uploaded-*.jpg為上傳書頁／截圖。保留原始檔案，頁面另標已知錯誤。修改根目錄 recipe--*.md 與 menu--*.md；執行 npm run build 會同步到分類目錄並輸出 dist。
