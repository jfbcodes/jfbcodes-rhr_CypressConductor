
describe('proof of concept Rails-React Cypress', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test

    // VISIT THE REACT APP
    cy.visit('http://localhost:3000/')
  })

  it('show me a button to load the users ', () => {
    cy.contains('Load Users')

  })
})
