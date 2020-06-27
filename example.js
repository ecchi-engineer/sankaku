const playwright = require("playwright");

(async () => {
  for (const browserType of ["chromium"]) {
    const browser = await playwright[browserType].launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    const url = "https://chan.sankakucomplex.com/ja/?tags=fav%3Akimika373";
    await page.route(/^https:\/\/c\.otaserve\.net/, (route) => route.abort());
    await page.route(
      /^https:\/\/a\.sankakucomplex\.com\/x\/piwik.js/,
      (route) => route.abort()
    );
    await page.route(
      /^https:\/\/a\.sankakucomplex\.com\/x\/piwik.php/,
      (route) => route.abort()
    );
    await page.goto(url, { timeout: 60 * 1000 });
    await page.evaluate(() => window.scrollTo(0, 10000));
    await page.waitForRequest(
      /^https:\/\/chan\.sankakucomplex\.com\/ja\/post\/index\.content/
    );
    await page.evaluate(() => window.scrollTo(0, 10000));
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, 10000));
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, 10000));
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, 10000));
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, 10000));
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, 10000));
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, 10000));
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, 10000));
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: `example-${browserType}.png` });
    await browser.close();
  }
})();
