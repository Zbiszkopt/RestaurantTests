describe('EdycjaDania', () => {
    it('edytuje dane dania', () => {
      cy.visit('https://localhost:7272/Dishes')
      cy.contains('tr', 'Krupnik').find('a:contains("Edytuj")').click();
      cy.url().should('include', '/Dishes/Edit');
      cy.contains('h1', 'Edit').should('exist')
      cy.get('form').should('be.visible');
  
      cy.get('input[name="Name"]').clear().type('Zapiekana');
      cy.get('input[name="Description"]').clear().type('Klasyczna z pieczarkami');
      cy.get('input[name="Prize"]').clear().type('12');
  
      cy.get('input[type="submit"]').click();
      cy.url().should('include', '/Dishes');
      cy.contains('table', 'Zapiekana').should('exist');
    })
  })