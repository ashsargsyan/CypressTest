import LoginPage from "../../PageObjects/LoginPage";

describe('Login tests', () => {
    const username = 'Test005'
    const password = 'test1234'

    it('Test Login with valid credentials', () => {
        const loginPage = new LoginPage();
        loginPage.openSite();
        loginPage.openLoginForm();
        loginPage.login(username, password);
        loginPage.assertWelcomeMessage(username);
        loginPage.assertLoginOptionsVisible();
        loginPage.assertLoginModalNotVisible();
    });
})