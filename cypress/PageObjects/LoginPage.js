class LoginPage {
    elements = {
        login: '#login2',
        LoginModal: '#loginModal',
        usernameField: '#loginusername',
        passwordField: '#loginpassword',
        loginBtn: 'button:contains(Log in)',
        welcomeUsername: '#nameofuser',
        loginRelatedOption: '#logout2',
        loginRelatedOptionCart: '#cartur',
    }

    openSite() {
        cy.visit('https://demoblaze.com/')
    }
    openLoginForm() {
        cy.get(this.elements.login).click()
        cy.wait(1000)
    }
    login(username, password) {
        cy.get(this.elements.usernameField).type(username)
        cy.get(this.elements.passwordField).type(password)
        cy.get(this.elements.loginBtn).click()
    }
    assertWelcomeMessage(username) {
        cy.get(this.elements.welcomeUsername).should('have.text', `Welcome ${username}`);
    }
    assertLoginOptionsVisible() {
        cy.get(this.elements.loginRelatedOption).should('be.visible')
        cy.get(this.elements.loginRelatedOptionCart).should('be.visible')
    }
    assertLoginModalNotVisible() {
        cy.get(this.elements.LoginModal).should('not.exist')
    }
}
export default LoginPage