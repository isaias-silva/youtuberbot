
const readline = require('readline-sync')
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const view= function views() {
    const url = readline.question('link do video:');
    console.log('','| Ctrl + C para sair |')
    
    let views = 0;
    async function acess() {
        //browser
        const browser = await puppeteer.launch({});
        //pagina
        const page = await browser.newPage();
        //pagina vai para url
        await page.goto(url);

        await page.waitForTimeout(4000)
        await page.click('.ytp-play-button.ytp-button')
        await page.waitForTimeout(10000)
    
        //fechar
        await browser.close()


    }

    setInterval(() => {
        views++
        console.log(`${views} views`)
        acess()
    }, 20000);
}

module.exports=view;