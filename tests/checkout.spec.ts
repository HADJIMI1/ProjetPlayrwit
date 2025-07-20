import test, { Browser, Locator } from "@playwright/test";

import Index from '../index'



test('checkout test ' , async({page}, testInfo)=>{


    //pour aller a une page web
    await page.goto('https://google.com')
    


    //pour trouver un element
    const element = page.locator('#L2AGLb')

    await element.click()


    const element1 =  page.locator('#APjFqb')

   // await element1.fill('Facebook')

    await element1.pressSequentially('facebook', {delay:1000})

    //await element1.press('Enter')


    //const screen = await element1.screenshot()


    testInfo.attach(
        'screenshot', // titre
        { 
            body: await page.screenshot(),
            contentType: 'image/png'
        }

    )



    //await element1.nth(4)
    //await element1.first()
    //await element1.last()






    // await page.pause()


})


test('Microsoft test', async ({page})=>{
    await page.goto('https://microsoft.com')
})

