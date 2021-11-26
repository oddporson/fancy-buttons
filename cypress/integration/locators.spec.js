/// <reference types="cypress" />

describe("Locators specific elements", () => {

  // before you run each test
    beforeEach(()=> {
      cy.visit('localhost:3000')
    })
  
  it("should locate elements with GET command", ()=>{
    // get all elements by tag name
    cy.get("button")
    // get element by className Angry Button
    cy.get(".AngryButton").click()
  })
  it("should locate elements with GET command for LightSwitch button", ()=> {
    cy.get("button");
    cy.get(".LightSwitchButton").click();
  })





})