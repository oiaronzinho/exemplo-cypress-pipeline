describe('Login no SauceDemo', () => { 
 it('Deve realizar o login e apresentar os produtos', () => { 
 cy.visit('https://www.saucedemo.com') 
 cy.get('[data-test="username"]').type('standard_user') 
 cy.get('[data-test="password"]').type('secret_sauce') 
 cy.get('[data-test="login-button"]').click() 
 cy.url().should('include', '/inventory.html') 
 cy.get('[data-test="title"]').should('contain', 'Products') 
 cy.get('[data-test="inventory-list"]').should('be.visible') 
 }) 
}) 