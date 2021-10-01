const readline = require('readline-sync')
const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const cont = require('./data/cont.json')



puppeteer.use(StealthPlugin())


const liker = function like() {
    let likenumb = 0;
    const link = readline.question('link do video:');


    console.log('', '| Ctrl + C para parar |')

    const url = 'https://accounts.google.com/AddSession/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dpt%26next%3D%252F&hl=pt-BR&passive=false&service=youtube&uilel=0&flowName=GlifWebSignIn&flowEntry=AddSession'


    async function acess() {
        //browser

        const browser = await puppeteer.launch({headless:false});
        //pagina
        const page = await browser.newPage();
        //pagina vai para url
        await page.goto(url);

        await page.type('#identifierId', cont[likenumb].mail)
        await page.click('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b')

        await page.waitForTimeout(2000)
        await page.type('.whsOnd.zHQkBf', cont[likenumb].password)
        await page.click('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b')


        await page.waitForTimeout(3000)

        await page.goto(link)

        await page.waitForTimeout(2000)
        await page.evaluate(() => {
            //document.querySelectorAll('')[58].click();
            const alvo = document.querySelector('.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer')
            if (alvo != undefined) {
                alvo.click()

            }
        });

        await likenumb++;
        await console.log(`likes:${likenumb}`)
        await page.waitForTimeout(5000)
        await browser.close()
     

    }


    const interval = setInterval(function () {
        if (likenumb < cont.length) {
            acess()
        } else {
            console.log('maximo de likes acessados')
            clearInterval(interval)
        }

    }, 25000)


}

module.exports = liker