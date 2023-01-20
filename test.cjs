//Storing the webdriver in %appdata%/local/bin on a Windows machine will save you SO MUCH TIME Googling.

const { By, Builder } = require( 'selenium-webdriver' );
const { suite } = require( 'selenium-webdriver/testing' );
const assert = require( "assert" );

suite( function ( env ) {
  describe( 'First script', async function () {
    let driver

    before( async function () {
      driver = await new Builder().forBrowser( 'chrome' ).build();
      await driver.manage().window().setRect( { width: 1500, height: 850 } );
    } );

    after( async () => await driver.quit() );

    it( 'First Selenium script', async function () {
      await driver.get( 'https://landistechnologies.com/' );

      let title = await driver.getTitle();
      assert.equal( "Home Page - Landis Technologies LLC", title );

      await driver.manage().setTimeouts( { implicit: 10000 } );

      let searchButton = await driver.findElement( By.className( 'menu-search' ) );

      await searchButton.click();

      await driver.wait( () => 10000 );

      let searchInputContainer = await driver.findElement( By.className( 'searchform' ) );

      async function sleep( msec ) {
        return new Promise( resolve => setTimeout( resolve, msec ) );
      }
      /*

      let searchInput = searchInputContainer.findElement(By.className('field'));


      await searchInput.sendKeys('Contact Center');

      /*
      let textBox = await driver.findElement(By.name('my-text'));
      let submitButton = await driver.findElement(By.css('button'));

      await textBox.sendKeys('Selenium');
      await submitButton.click();

      let message = await driver.findElement(By.id('message'));
      let value = await message.getText();
      assert.equal("Received!", value);
      */
    } );
  } );
} );