describe('STOCK BOSS', () => {

  const stockNumber = 'TSM'
  const baseUrl = Cypress.env('baseUrl')

  it ('Search Stock' , function () {
    
    cy.visit(baseUrl + stockNumber)

    cy.get('#keyratio-table > tbody > :nth-child(7) > :nth-child(28)').invoke('text').should('contain', 6.51)
    cy.get('#keyratio-table > tbody > :nth-child(12) > :nth-child(28)').invoke('text').should('contain', 1.83)




  })
})