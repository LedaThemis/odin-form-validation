import './styles.css';
import countriesList from './countries.js';

const DOMHelpers = (() => {
  const createOptionElement = (innerText, value) => {
    const option = document.createElement('option');
    option.innerText = innerText;
    option.value = value;
    return option;
  };
  const populateCountryDropdown = (countriesList) => {
    const countryDropdown = document.querySelector('#country');
    for (let i = 0; i < countriesList; i++) {
      const option = createOptionElement(countriesList[i], countriesList[i]);
      countryDropdown.appendChild(option);
    }
  };

  return {
    populateCountryDropdown,
  };
})();

const DOMHandlers = (() => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmailBlur = (e) => {
    e.preventDefault();
    const emailInput = e.target;
    if (emailInput.validity.typeMismatch) {
      console.log(emailInput.validity.typeMismatch);
      emailInput.reportValidity();
    }
  };

  return {
    handleFormSubmit,
    handleEmailBlur,
  };
})();

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', DOMHandlers.handleFormSubmit);

const emailInput = document.querySelector('#email');
emailInput.addEventListener('blur', DOMHandlers.handleEmailBlur);

DOMHelpers.populateCountryDropdown(countriesList);
