const readline = require('readline-sync')
const puppeteer = require('puppeteer')

const menu = require('./src/menu')
const asciiart = require('./src/ascii')
const view = require('./src/views')

function main() {

    console.log(asciiart())
    console.log(menu())
    let comand = readline.question('oque deseja:')
    switch (comand) {

        case '1':
            view()
            break
        case '2':

        break
    }
}

main()