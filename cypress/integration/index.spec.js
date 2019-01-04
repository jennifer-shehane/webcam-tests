it('should work', () => {
  cy.visit('index.html')
  cy.get('#statusElement').contains('Webcam Success!')
})