describe('Automation Practice Form', () => {

    it('Fill the form', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.url().should('contain', 'demoqa')
        cy.get('#firstName').type('Ashot')
        cy.get('#lastName').type('Sargsyan')
        cy.get('#userEmail').type('user@examples.com')
        cy.get('#gender-radio-1').check({force: true})
        cy.get('#userNumber').type('0444444444')
        cy.get('#hobbies-checkbox-1').check({force: true})
        cy.get('#currentAddress').type('Tumanyan 1')
        cy.get('#submit').click()
        cy.get('#example-modal-sizes-title-lg').should('be.visible')
        cy.get('#closeLargeModal').click({force: true})
    });
})