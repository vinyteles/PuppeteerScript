const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  await page.screenshot({ path: 'home.png' });

    

    // Get the "viewport" of the page, as reported by the page.
    const result = await page.evaluate(() => {
    /*return document.ctem_column1_0_3_fm[0][9]
      });*/
        //document.getElementById("_58_login")
        return document
    });
    
    console.log(result);

    // await page.screenshot({ path: 'login.png' });

    /*let cashh = Object.keys(result)[5];

    console.log(result[cashh]["_cashEvents"]["change"][0]);*/
  await browser.close();
})();