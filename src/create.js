const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const axios=require('axios')
puppeteer.use(StealthPlugin())

function create() {
    let likenumb = 0;

    const url1 = 'https://www.invertexto.com/gerador-email-temporario'
    const url2 = 'https://accounts.google.com/signup/v2/webcreateaccount?service=youtube&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dpt%26next%3D%252F&hl=pt-BR&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp&nogm=true'

    async function acess() {
        //browser

        const browser = await puppeteer.launch({headless:false});
        //pagina
        const page1= await browser.newPage();
        //pagina vai para url
        await page1.goto(url1);
        let name= await getname()
        let email=await page1.evaluate(()=>{

            return document.querySelector('#email-input').value
        })
        let senha=getpassword()



        await page1.waitForTimeout(2000);
       const page2=await browser.newPage()
        page2.goto(url2)


    }
  async function getname(){

       const name=await axios.get('http://gerador-nomes.herokuapp.com/nome/aleatorio')
    
       return name.data;
    }
async function getpassword(){


    const password= await (Math.random().toString(36).replace (/ [^ az] + /g, '')).replace('.','#')
  await console.log(password)
    
    return password;

}
    
    
    acess()

}
create()