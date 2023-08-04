
describe('Автотест для huntingpony.com', function () {
    it('Поехали', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();
         cy.get('.add-cart-counter__btn').click();
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.add-cart-counter__detail-dop-text').click();
         cy.get('.cart-controls > .button').click();
         cy.contains('Оформление заказа').should('be.visible');
     })
 })
 