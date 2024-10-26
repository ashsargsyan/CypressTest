class ProductsPage {
    elements = {
        clickAddToCart: '.btn:contains(Add to cart)',
        openCart: '#cartur',
        cartItems: '#tbodyid'
    }
    openSite() {
        cy.visit('https://demoblaze.com/')
    }
    visitProductPage(ProductName) {
        cy.get(this.elements.cartItems).contains(ProductName).click();
    }
    addToCart() {
        cy.get(this.elements.clickAddToCart).click()
        this.assertAlertMessage()
        cy.wait(500)
    }
    assertAlertMessage() {
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Product added').and('be.visible')
        });
    }
    goToCart() {
        cy.get(this.elements.openCart).click();
    }
    verifyProductInCart(ProductName) {
        cy.get(this.elements.cartItems).contains(ProductName).should('be.visible');
    }
}
export default ProductsPage
