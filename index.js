const puppeteer = require("puppeteer");
const fs = require("fs");

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.setViewport({
    width: 1024,
    height: 980,
  });
  //   await page.goto("https://www.traversymedia.com");

  //   await page.screenshot({ path: "naver.png", fullPage: true });
  //   await page.pdf({ path: "naver.pdf", format: 'A4' });
  //   const html = await page.content()
  //   const title = await page.evaluate(() => document.title);
  //   const text = await page.evaluate(() => document.body.innerText);
  //   const links = await page.evaluate(() =>
  //     Array.from(document.querySelectorAll("a"), (el) => el.href)
  //   );
  //   const courses = await page.evaluate(() =>
  //     Array.from(document.querySelectorAll("#cscourses .card"), (el) => ({
  //       title: el.querySelector(".card-body h3").innerText,
  //       level: el.querySelector(".card-body .level").innerText,
  //       url: el.querySelector(".card-footer a").href,
  //     }))
  //   );
  //   const courses = await page.$$eval("#cscourses .card", (elements) =>
  //     elements.map((el) => ({
  //       title: el.querySelector(".card-body h3").innerText,
  //       level: el.querySelector(".card-body .level").innerText,
  //       url: el.querySelector(".card-footer a").href,
  //     }))
  //   );

  //   fs.writeFile("courses.json", JSON.stringify(courses), (err) => {
  //     if (err) throw err;
  //     console.log("File saved");
  //   });

  await page.goto("https://quotes.toscrape.com");
  await page.click('a[href="/login"]');
  await page.type("#username", "PedroTech", { delay: 100 });
  await page.type("#password", "password", { delay: 100 });
  await page.click('input[value="Login"]');
  //   await browser.close();
}

run();
