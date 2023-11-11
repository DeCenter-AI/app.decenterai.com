/// <reference types="cypress" />

describe('Train Page Component', () => {
    beforeEach(() => {
        cy.visit('/dashboard/train');
    });

    it('should interact with the train page elements', () => {
        // Verify that the page is rendered
        cy.get('.h-full').should('exist');

        // Interaction with elements
        cy.get('[type="checkbox"]').click();

        // Assertion - Check if the checkbox is checked
        cy.get('[type="checkbox"]').should('be.checked');

        // Wait for the repository items to be rendered
        cy.get('[data-cy=repository-item]').should('have.length', repository.length);

        // Click on a repository item (you can adjust this based on your application's behavior)
        cy.get('[data-cy=repository-item]').first().click();

    });
});
