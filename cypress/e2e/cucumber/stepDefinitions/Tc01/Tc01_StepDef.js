/// <reference types="Cypress" />
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

import { HomePage } from '../../pageObject/HomePage';
import { ProductPage } from '../../pageObject/ProductPage';
import { CartPage} from '../../pageObject/CartPage';

const cartPage = new CartPage();
const homePage = new HomePage();
const productPage = new ProductPage();

Given('Open angularPractice', function(){
    cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
    
});

When('Add items to cart', function(){
    homePage.getShopTab().click();

    //This is a way to pickup more than one value from JSON file.
    cy.wrap(this.data.productName).each((element) => 
    {
        cy.selectProduct(element);
    });
    productPage.checkoutButton().click();
});

And('Validate the total prices', function(){
    cartPage.trimValue();
    cartPage.compareSumValue();
});

Then('Select the country submit and verify success', function(){
    cy.get('.btn-success').click();
        cy.get('#country').type(this.data.countryName);
        cy.get('.suggestions ul li a', {timeout: 6000}).click();
        cy.get('input[id="checkbox2"]').click({force: true});
        cy.get('input[type="submit"]').click();
        //cy.get('.alert').should('have.text',' Thank you! Your order will be delivered in next few weeks :-).');
        cy.get('.alert').then(function(element) 
        {
            const actualText = element.text();
            expect(actualText.includes("Success")).to.be.true;       
        });
});

When('I fill the form details', function(){
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    
});

Then('Validate the forms behaviour', function(){
        //comparing if data.name is the same in both inputs
    homePage.getTwoWayDataBinding().should('have.value',this.data.name);
    homePage.getEditBox().should('have.attr','minlength','2');
    homePage.getEnterpreneaur().should('be.disabled');
    Cypress.config('defaultCommandTimeout', 8000);
});

And('Select the shop page', function(){
    homePage.getShopTab().click();
});