const { chromium } = require('/opt/homebrew/lib/node_modules/playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });

  const pages = [
    { url: 'http://localhost:3000', name: 'home' },
    { url: 'http://localhost:3000/donate', name: 'donate' },
    { url: 'http://localhost:3000/stories', name: 'stories' },
    { url: 'http://localhost:3000/gallery', name: 'gallery' },
    { url: 'http://localhost:3000/videos', name: 'videos' },
    { url: 'http://localhost:3000/contact', name: 'contact' },
  ];

  for (const { url, name } of pages) {
    const page = await context.newPage();
    console.log(`Capturing ${name} (${url})...`);
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    // Wait for content to render and animations to settle
    await page.waitForTimeout(3000);
    await page.screenshot({
      path: `/Users/josh/kindness/website/screenshots/${name}.png`,
      fullPage: true,
    });
    console.log(`  Saved ${name}.png`);
    await page.close();
  }

  await browser.close();
  console.log('All screenshots captured.');
})();
