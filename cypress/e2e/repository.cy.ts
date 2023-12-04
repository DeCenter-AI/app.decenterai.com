/// <reference types="cypress" />

describe('Page Component', () => {
  beforeEach(() => {
    cy.visit('dashboard/repository')
  })

  it('should interact with the page elements and repository component', () => {
    cy.get('.h-full', { timeout: 10000 }).should('exist')

    // Interaction with elements
    cy.get('[placeholder="Filter by name"]').type('Example Filter Text')

    // Assertion - Check if the button with "Next" text exists
    cy.get('button').contains('Next').should('exist')

    // Click the "Next" button
    cy.get('button').contains('Next').click()

    // Assertion - Check if the modal link exists and click it
    cy.contains('Modal').click()

    // Assertion - Check if the repository component is rendered
    cy.get('.w-[85%] .Repository').should('exist')
  })
})
