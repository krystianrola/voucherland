// It tells vs code that this test is using cypress and it help with autocompletion
/// <reference types="cypress" />

describe("[FlowTest] User Log in and out flow", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("Renders on correct URL", () => {
    cy.url().should("eq", "http://localhost:3000/");
    cy.get(".header").should("be.visible");
  });

  it("After user logs in", () => {
    cy.login();

    cy.dataCy("nav-account-btn").should("exist");
    cy.dataCy("nav-logout-btn").should("exist");
  });

  it("After user logs out", () => {
    cy.login();
    cy.logout();

    cy.visit("/articles");

    cy.dataCy("nav-register-btn").should("exist");
    cy.dataCy("nav-login-btn").should("exist");
  });
});

describe("[FlowTest] <TopDeals />", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("When user logged out, pop up to log in will show", () => {
    cy.getTestId("home-topdeals").scrollIntoView().trigger("mouseover");
    cy.getTestId("topdeals-login-popup").should("exist");
  });

  it("When user logged in, pop up to log in will not show", () => {
    cy.login();

    cy.getTestId("home-topdeals").scrollIntoView().trigger("mouseover");
    cy.getTestId("topdeals-login-popup").should("not.exist");
  });
});

describe("[FlowTest] Navigation Flow", () => {
  describe("Navigation in <Header />", () => {
    context("When user logged out", () => {
      beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
      });

      it("Register button navigates to RegisterPage", () => {
        cy.dataCy("nav-register-btn").last().click();
        cy.url().should("contain", "/register");
      });

      it("Login button navigates to LoginPage", () => {
        cy.dataCy("nav-login-btn").last().click();
        cy.url().should("contain", "/login");
      });

      it("Login button navigates to LoginPage", () => {
        cy.dataCy("nav-login-btn").last().click();
        cy.url().should("contain", "/login");
      });
    });

    context("When user logged in", () => {
      beforeEach(() => {
        cy.login();
      });

      it("Account button navigates to AccountPage", () => {
        cy.dataCy("nav-account-btn").last().click();
        cy.url().should("contain", "/account");
      });

      it("Logout button navigates to Homepage", () => {
        cy.visit("/contact");
        cy.logout();

        cy.url().should("contain", "/");
        cy.dataCy("nav-register-btn").should("exist");
        cy.dataCy("nav-login-btn").should("exist");
      });
    });

    context("Navigation in <Nav />", () => {
      beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
      });

      it("Home list-item navigates to HomePage", () => {
        cy.getTestId("list-item-home").click();
        cy.url().should("contain", "/");
      });

      it("Vouchers list-item navigates to VouchersPage", () => {
        cy.getTestId("list-item-vouchers").click();
        cy.url().should("contain", "/vouchers");
      });

      it("Artiles list-item navigates to ArticlePage", () => {
        cy.getTestId("list-item-articles").click();
        cy.url().should("contain", "/articles");
      });

      it("Contact list-item navigates to ContactPage", () => {
        cy.getTestId("list-item-contact").click();
        cy.url().should("contain", "/contact");
      });

      it("Header title navigates to HomePage", () => {
        cy.visit("/vouchers");

        cy.getTestId("desktop-header").click();
        cy.url().should("contain", "/");
      });
    });
  });

  describe("Navigation in <RegisterPage />", () => {
    beforeEach(() => {
      cy.visit("/register");
    });

    it("Login button navigates to LoginPage", () => {
      cy.getTestId("register-login-btn").click();
      cy.url().should("contain", "/login");
    });

    it("Go-back button navigates to Home", () => {
      cy.getTestId("register-goback-btn").click();
      cy.url().should("contain", "/");
    });
  });

  describe("Navigation in <LoginPage />", () => {
    beforeEach(() => {
      cy.visit("/login");
    });

    it("Register button navigates to RegisterPage", () => {
      cy.getTestId("login-register-btn").click();
      cy.url().should("contain", "/register");
    });

    it("Go-back button navigates to Home", () => {
      cy.getTestId("login-goback-btn").click();
      cy.url().should("contain", "/");
    });
  });
});
