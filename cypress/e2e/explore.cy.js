// cypress/integration/explorePage.spec.js
describe('Explore Page', () => {
    it('should log in and navigate to dashboard', () => {
        cy.visit('/explore');

        // Check if the page contains the logo
        cy.get('img[alt="logo image"]').should('exist');

        // Mock the login process
        cy.intercept('POST', '/api/auth/login', {
            fixture: 'loginResponse.json',
        }).as('login');

        // Click the "Start here" button
        cy.get('.border-primary_11').click();

    });
});
