const puppeteer = require("puppeteer");
const fs = require("fs");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.traversymedia.com");

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
  const courses = await page.$$eval("#cscourses .card", (elements) =>
    elements.map((el) => ({
      title: el.querySelector(".card-body h3").innerText,
      level: el.querySelector(".card-body .level").innerText,
      url: el.querySelector(".card-footer a").href,
    }))
  );
  console.log(courses);
  fs.writeFile("courses.json", JSON.stringify(courses), (err) => {
    if (err) throw err;
    console.log("File saved");
  });

  await browser.close();
}

run();
