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
    for (let i = 0; i < countriesList.length; i++) {
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
      emailInput.reportValidity();
    }
  };

  const handleZipCodeBlur = (e) => {
    e.preventDefault();
    const zipCodeInput = e.target;
    if (zipCodeInput.validity.patternMismatch) {
      zipCodeInput.setCustomValidity('Please enter a valid zip code, example: 65251');
      zipCodeInput.reportValidity();
    } else {
      zipCodeInput.setCustomValidity('');
    }
  };

  return {
    handleFormSubmit,
    handleEmailBlur,
    handleZipCodeBlur,
  };
})();

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', DOMHandlers.handleFormSubmit);

const emailInput = document.querySelector('#email');
const zipCodeInput = document.querySelector('#zip-code');

emailInput.addEventListener('blur', DOMHandlers.handleEmailBlur);
zipCodeInput.addEventListener('blur', DOMHandlers.handleZipCodeBlur);
zipCodeInput.addEventListener('input', DOMHandlers.handleZipCodeBlur);

DOMHelpers.populateCountryDropdown(countriesList);
