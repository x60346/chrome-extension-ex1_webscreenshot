Chrome Extension
> name: Web ScreenShot
> description: Turn any web into png & download it.

-----------------------------

可將任一網頁全頁截圖，轉為png檔並下載。
使用chrome API「chrome.tabs.captureVisibleTab」為主要運作方法。

----------------------

邏輯想法：
以 window.scrollTo 滾動頁面、captureVisibleTab 逐頁截圖並存入陣列，再使用canvas原生方法將陣列繪製到畫布上，最後將整個畫布轉成png並下載。

----------------------

使用方式：
1. 將網頁拉至最上方
2. 開啟擴充功能 > 點擊按鈕開始擷取
3. 擷取中頁面會滾動
4. 完成擷取後自動下載png圖檔
