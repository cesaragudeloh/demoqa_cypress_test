class PracticeFormPage {
  visit() {
    cy.visit("/automation-practice-form");
  }

  fillName(firstName, lastName) {
    cy.get("#firstName").clear().type(firstName);
    cy.get("#lastName").clear().type(lastName);
  }

  fillEmail(email) {
    cy.get("#userEmail").clear().type(email);
  }

  selectGender(genderLabel) {
    cy.contains("label", genderLabel).click();
  }

  fillMobile(mobile) {
    cy.get("#userNumber").clear().type(mobile);
  }

  setDateOfBirth(dateText) {
    cy.get("#dateOfBirthInput").click().type(`{selectall}${dateText}{enter}`);
  }

  addSubjects(subjects) {
    subjects.forEach((subject) => {
      cy.get("#subjectsInput").type(`${subject}{enter}`);
    });
  }

  selectHobbies(hobbies) {
    hobbies.forEach((hobby) => {
      cy.contains("label", hobby).click();
    });
  }

  uploadPicture(fileName) {
    cy.get("#uploadPicture").selectFile(`cypress/fixtures/${fileName}`);
  }

  fillAddress(address) {
    cy.get("#currentAddress").clear().type(address);
  }

  selectStateAndCity(state, city) {
    cy.get("#react-select-3-input").type(`${state}{enter}`);
    cy.get("#react-select-4-input").type(`${city}{enter}`);
  }

  submit() {
    cy.get("#submit").scrollIntoView().click({ force: true });
  }
}

export default PracticeFormPage;
