const puppeteer = require("puppeteer");

/*   

Varsayılan Kullanıcı Adı: admin
Varsayılan Parola: password
Varsayılan Modem Adresi: 192.168.0.1

 */

// Buradan değiştirebilirsiniz
const username = "admin";
const password = "password";
const modem_url = "http://192.168.0.1";

async function main() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(modem_url, { waitUntil: "networkidle0" }, { delay: 1000 });

    console.log("<====== PAGE LOADED ======>");
    await page.evaluate(
        (username, password) => {
            document.querySelector("input[type=text]").value = username;
            document.querySelector("input[type=password]").value = password;
            document.querySelector("#btnLogin").click();
        },
        username,
        password
    );
    page.waitForNavigation({ waitUntil: "networkidle0" }, { delay: 1000 }),
        console.log("<====== LOGIN SUCCESFULL ======>");

    await page.waitForNavigation();
    await page.goto(`${modem_url}/wlanRadio.asp`, {
        waitUntil: "networkidle0",
    });
    console.log("<====== WIFI PAGE LOADED ======>");

    let option_now = await page.evaluate(() => {
        return document.querySelector('select[name="WirelessEnable"]').value;
    });
    if (option_now == 1) {
        await page.select('select[name="WirelessEnable"]', "0");
        await page.click("#btnApply");
        console.log("\n<====== WIFI DISABLED ======>\n");

        console.log("<====== CLOSING THE BOT ======>");
        await page.waitForTimeout(3000);
        browser.close();
    } else {
        await page.select('select[name="WirelessEnable"]', "1");
        await page.click("#btnApply");
        console.log("\n<====== WIFI ENABLED ======>\n");

        console.log("<====== CLOSING THE BOT ======>");
        await page.waitForTimeout(3000);

        browser.close();
    }
}

main();
