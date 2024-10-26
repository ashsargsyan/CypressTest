import ProductsPage from "../../PageObjects/ProductsPage";
describe('Add to Cart tests', () => {
    const ProductName = 'Samsung galaxy s6'

    it('Adding product to cart', () => {
        const ProductPage = new ProductsPage();
        ProductPage.openSite();
        ProductPage.visitProductPage(ProductName);
        ProductPage.addToCart();
        ProductPage.assertAlertMessage();
        ProductPage.goToCart();
        ProductPage.verifyProductInCart(ProductName);
    });
})