/// <reference types="cypress" />

describe('Settings Page', () => {
  beforeEach(() => {
    cy.visit('/dashboard/settings')
  })

  it('should interact with the settings page elements', () => {
    cy.contains('Profile').click()
    cy.url().should('include', '/dashboard/settings/profile')

    // Open the Security modal
    cy.contains('Security').click()
    cy.get('[data-cy=security-modal]').should('exist')

    // Click on the "Wallet connect" button
    cy.contains('Wallet connect').click()

    // Open the Notification modal
    cy.contains('Notification').click()
    cy.get('[data-cy=notification-modal]').should('exist')

    // Log Out
    cy.contains('Log Out').click()
  })
})
