const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'cv.pdf',
    format: 'A4',
    printBackground: false,
    displayHeaderFooter: false,
    margin: { top: '1.2cm', bottom: '1.2cm', left: '1.2cm', right: '1.2cm' },
  });

  await browser.close();
  console.log('cv.pdf généré avec succès');
})();
