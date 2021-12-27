
const { Console } = require('console')
const fs=require('fs')
const expectChai=require('chai').expect
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

    xit("login UI radio button popup test", async () => {
        browser.url("/loginpagePractise/#")
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("LoginPage")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        //await $("#signInBtn").click()
        //expect(browser).toHaveTitleContaining("ProtoCommerce")
        const radioButton = await $$("//*[@name='radio']")
        await radioButton[1].click();
        //await browser.pause(3000)
        await $("#cancelBtn").waitForDisplayed()
        await $("#cancelBtn").click()
        await browser.pause(3000)
        console.log( await radioButton[1].isSelected()+"************")
        await radioButton[1].click();
        await $("#okayBtn").waitForDisplayed()
        await $("#okayBtn").click()
        await browser.pause(3000)
        console.log( await radioButton[1].isSelected()+"************")
        await radioButton[0].click();
        await expect($(".modal-body")).not.toBeDisplayed()
   
    })


    xit("login static dropdown test", async () => {
        browser.url("/loginpagePractise/#")
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("LoginPage")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        //await $("#signInBtn").click()
        //expect(browser).toHaveTitleContaining("ProtoCommerce")
        const radioButton = await $$("//*[@name='radio']")
        await radioButton[0].click();
        await expect($(".modal-body")).not.toBeDisplayed()
        const dropDown =await $("select.form-control")
        dropDown.selectByAttribute("value","teach")
        await browser.pause(3000)
        expectChai(await dropDown.getValue()).to.equal("teach")
    })

    xit("login check box  test", async () => {
        browser.url("/loginpagePractise/#")
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("LoginPage")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        //await $("#signInBtn").click()
        //expect(browser).toHaveTitleContaining("ProtoCommerce")
        const radioButton = await $$("//*[@name='radio']")
        await radioButton[0].click();
        await expect($(".modal-body")).not.toBeDisplayed()
        const dropDown =await $("select.form-control")
        dropDown.selectByAttribute("value","teach")
        await browser.pause(3000)
        expectChai(await dropDown.getValue()).to.equal("teach")
    })

   it("Add to Cart test", async () => {
        var products=["iphone X","Blackberry"]
        browser.url("/loginpagePractise/#")
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("LoginPage")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        const radioButton = await $$("//*[@name='radio']")
        await radioButton[0].click();
        await expect($(".modal-body")).not.toBeDisplayed()
        const dropDown =await $("select.form-control")
        await dropDown.selectByAttribute("value","teach")
        expectChai(await dropDown.getValue()).to.equal("teach")
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
           await browser.pause(3000)
           console.log(`${await $("//h3/strong").getText()}**********`)

                /**
         *  const filterdList= async (dropdownList)=> {
        await dropdownList.filter(async (item)=>{
            const text = await item.getText()
            return text === "India"
       })      
   }
         */

        await $(".btn.btn-success").click()
        await $("//*[@value='Purchase']").waitForExist()
        await browser.pause(3000)

        await $("#country").setValue("ind")
        await browser.pause(3000)


    })

})