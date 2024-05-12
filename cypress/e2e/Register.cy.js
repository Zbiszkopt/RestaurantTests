describe('Rejestracja', () => {
  it('powinno zarejestrować nowego użytkownika', () => {
    cy.visit('https://localhost:7272/');

    cy.contains('Rejestracja').click();

    cy.get('input[name="Input.Email"]').type('przykładowymail@wp.pl');
    cy.get('input[name="Input.Password"]').type('Haslo!@');
    cy.get('input[name="Input.ConfirmPassword"]').type('Haslo!@');

    cy.contains('Zarejestruj').click();

    cy.contains('Register Confirmation').should('exist');
  });
});