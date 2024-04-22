/// <reference types="cypress"/>

describe('Todo list', () => {
  it('should store input text as value', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="todo-input"]').type("first todo item")
      .should('have.value', "first todo item")
  })
})