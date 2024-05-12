describe('DodanieDania', () => {
  it('dodaje danie do menu', () => {
    cy.visit('https://localhost:7272/Dishes')
    cy.contains('button', 'Dodaj danie').click();
    cy.get('form').should('be.visible');

    cy.get('input[name="Name"]').type('Krupnik');
    cy.get('input[name="Description"]').type('Pożywny krupnik na żeberkach');
    cy.get('input[name="Prize"]').type('15');

    cy.get('input[type="submit"]').click();

    cy.contains('table', 'Krupnik').should('exist');
  })
})