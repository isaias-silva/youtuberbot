const readline = require('readline-sync')
const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const cont=require('./data/cont.json')



puppeteer.use(StealthPlugin())


function compartilhar() {
    
    const link = readline.question('link do video:');
    console.log('','| Ctrl + C para parar |')
   
    const url='https://accounts.google.com/AddSession/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dpt%26next%3D%252F&hl=pt-BR&passive=false&service=youtube&uilel=0&flowName=GlifWebSignIn&flowEntry=AddSession'



    let partilhas = 0;
    async function acess() {
        //browser
        const browser = await puppeteer.launch({headless:false});
        //pagina
        const page = await browser.newPage();
        //pagina vai para url
        await page.goto(url);

await page.type('#identifierId',cont.mail)
await page.click('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b')

//await page.click('.whsOnd.zHQkBf')


await page.waitForTimeout(2000)
await page.type('.whsOnd.zHQkBf',cont.password)
await page.click('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b')





    
   



    }
acess()
}

compartilhar()