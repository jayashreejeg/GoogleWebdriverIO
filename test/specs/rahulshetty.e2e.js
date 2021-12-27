
const { Console } = require('console')
const fs=require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTestData.json'))

describe("rahul shetty training website", () => {
  xit("check url", async () => {
        browser.url("/loginpagePractise/#")
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("LoginPage")
    })
   
    credentials.forEach( ({username,password})=> {
    xit("invalid login test", async () => {
        browser.url("/loginpagePractise/#")
        console.log(browser.getTitle())
        await $("#username").setValue(username)
        await $("#password").setValue(password)
        await $("#signInBtn").click()
        await $(".alert-danger").waitForDisplayed()
        console.log(await $(".alert-danger").getText() + " This is what getting displayed")
        expect(await $("p")).toHaveTextContaining("learning")
    })
   })

    xit("login test", async () => {
        browser.url("/loginpagePractise/#")
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("LoginPage")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#signInBtn").click()
        expect(browser).toHaveTitleContaining("ProtoCommerce")
    })

    it("Add to Cart test", async () => {
        var products=["iphone X","Blackberry"]
        browser.url("/loginpagePractise/#")
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("LoginPage")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#signInBtn").click()
        await $("*=Checkout").waitForExist()
        const carts = await $$(".card.h-100")
        console.log("size********* "+carts.length+" ********************")
        const len = carts.length
        for(i=0;i<len;i++){
            let productName =await carts[i].$('div h4 a').getText()
            console.log(productName+"********************")
            if(products.includes(productName)){
                await  carts[i].$(".card-footer button").click()
            }

        }
        console.log(await $("*=Checkout").getText()+"**********************")

       /**  filter(async() => {
            products.includes (
             await carts[index].$('div h4 a').getText()
              
              )
        })
         carts.forEach(async(cart) => {
           await  cart.$(".card-footer button").click()})*/

           await $("*=Checkout").click()
           await $(".btn.btn-success").waitForExist()
           browser.pause(3000)
           console.log(await $("//h3/strong").getText()+"**********")

    })

})