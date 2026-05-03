import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PracticeFormPage from "../../pages/PracticeFormPage";

let formData;
const assertInvalid = (selector) => {
  cy.get(selector).then(($el) => {
    expect($el[0].checkValidity()).to.eq(false);
  });
};

Given("I have practice form data", () => {
  return cy.fixture("practice_form").then((data) => {
    formData = data;
  });
});

Given("I open the practice form", () => {
  const page = new PracticeFormPage();
  page.visit();
});

When("I complete the practice form", () => {
  const page = new PracticeFormPage();

  page.visit();
  page.fillName(formData.firstName, formData.lastName);
  page.fillEmail(formData.email);
  page.selectGender(formData.gender);
  page.fillMobile(formData.mobile);
  page.setDateOfBirth(formData.dateOfBirth);
  page.addSubjects(formData.subjects);
  page.selectHobbies(formData.hobbies);
  page.uploadPicture(formData.picture);
  page.fillAddress(formData.address);
  page.selectStateAndCity(formData.state, formData.city);
  cy.screenshot("form-diligenciado");
  page.submit();
  cy.screenshot("form-enviado");
});

When("I submit the form without required fields", () => {
  const page = new PracticeFormPage();
  cy.screenshot("sad-form-vacio");
  page.submit();
  cy.screenshot("sad-validaciones");
});

Then("I should see the confirmation modal", () => {
  cy.get("#example-modal-sizes-title-lg").should(
    "have.text",
    "Thanks for submitting the form"
  );
  cy.get(".modal-content").should("contain", formData.firstName);
  cy.get(".modal-content").should("contain", formData.lastName);
  cy.get(".modal-content").should("contain", formData.email);
});

Then("I should see required field validation", () => {
  cy.get("#userForm").then(($form) => {
    expect($form[0].checkValidity()).to.eq(false);
  });
  assertInvalid("#firstName");
  assertInvalid("#lastName");
  assertInvalid("#userNumber");
  cy.get('input[name="gender"]').then(($inputs) => {
    const anyChecked = Array.from($inputs).some((input) => input.checked);
    expect(anyChecked).to.eq(false);
  });
});
