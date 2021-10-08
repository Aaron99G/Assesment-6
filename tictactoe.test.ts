import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
    await driver.sleep(2000)
});

test('Checking for an O after choosing Cell 2/Upper right', async () => {

    let cell = await (await driver).findElement(By.id('cell-2'));
    await cell.click();
    
    await driver.sleep(2000)
});

test('Checking for an O after choosing Cell 6/Lower left', async () => {

    let cell = await (await driver).findElement(By.id('cell-6'));
    await cell.click();
    
    await driver.sleep(2000)
});

test('Checking for an O after choosing Cell 4/Middle', async () => {

    let cell = await (await driver).findElement(By.id('cell-4'));
    await cell.click();
    
    await driver.sleep(2000)
});

//Harder
// test('Checking for an O after choosing any cell', async () => {
        
//     // let table = document.getElementById('game-board');
//     for (let index = 0; index <9; index++) {
//         let box = document.getElementById(`cell-${index}`);
//         if (box != null) {
            
//         }
//     }
        

//     let cell = await (await driver).findElement(By.id(`cell-6`));
//     await cell.click();
    
    


//     await driver.sleep(2000)
// });