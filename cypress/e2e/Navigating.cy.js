describe('Nawigacja strony', () => {
it('powinno przenosić do menu', () => {
    cy.visit('https://localhost:7272/');
    cy.contains('Menu').click();
    cy.url().should('include', '/Dishes');
  });
  
  it('powinno przenosić do strony kontakt', () => {
    cy.visit('https://localhost:7272/');
    cy.contains('Kontakt').click();
    cy.url().should('include', '/Home/Contact');
  });

  it('powinno przenosić z powrotem do strony głównej', () => {
    cy.visit('https://localhost:7272/Dishes');
    cy.contains('Strona Główna').click();
    cy.url().should('include', '/');
  });

  it('Powinno wyświetlać treści na stronie głównej', () => {
    cy.visit('https://localhost:7272/');
    cy.contains('Zamów. Odbierz. Ciesz się.');
  });

  it('Powinno wyświetlać stopkę z linkami', () => {
    cy.visit('https://localhost:7272/');
    cy.contains('Strona Główna').should('exist');
    cy.contains('Menu').should('exist');
    cy.contains('Kontakt').should('exist');
  });

})