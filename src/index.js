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

  const handlePasswordBlur = (e) => {
    const passwordInput = document.querySelector('#password');
    const passwordConfirmInput = document.querySelector('#confirmPassword');
    const passwordMismatchSpan = document.querySelector('#passwords-do-not-match');

    if (passwordInput.value !== passwordConfirmInput.value) {
      passwordMismatchSpan.style.display = '';
    } else {
      passwordMismatchSpan.style.display = 'none';
    }
  };

  return {
    handleFormSubmit,
    handleEmailBlur,
    handleZipCodeBlur,
    handlePasswordBlur,
  };
})();

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', DOMHandlers.handleFormSubmit);

const emailInput = document.querySelector('#email');
const zipCodeInput = document.querySelector('#zip-code');
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#confirmPassword');

emailInput.addEventListener('blur', DOMHandlers.handleEmailBlur);
emailInput.addEventListener('input', DOMHandlers.handleEmailBlur);

zipCodeInput.addEventListener('blur', DOMHandlers.handleZipCodeBlur);
zipCodeInput.addEventListener('input', DOMHandlers.handleZipCodeBlur);

passwordInput.addEventListener('blur', DOMHandlers.handlePasswordBlur);
passwordInput.addEventListener('input', DOMHandlers.handlePasswordBlur);
passwordConfirmInput.addEventListener('blur', DOMHandlers.handlePasswordBlur);
passwordConfirmInput.addEventListener('input', DOMHandlers.handlePasswordBlur);

DOMHelpers.populateCountryDropdown(countriesList);
