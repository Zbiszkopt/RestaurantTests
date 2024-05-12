describe('UsunięcieDania', () => {
  it('usuwa danie', () => {
    cy.visit('https://localhost:7272/Dishes')
    cy.contains('tr', 'Krupnik').find('a:contains("Usuń danie")').click();
    cy.url().should('include', '/Dishes/Delete');
    cy.get('input[type="submit"]').click();
  

    cy.contains('table', 'Krupnik').should('not.exist');
  })
})