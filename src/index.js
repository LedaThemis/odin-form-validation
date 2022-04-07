import './styles.css';
import countriesList from './countries.js';

const DOMHelpers = (() => {
  const validEmail = () => {
    const emailInput = document.querySelector('#email');
    return !emailInput.validity.typeMismatch && emailInput.value !== '';
  };
  const validCountry = () => {
    const countryInput = document.querySelector('#country');
    return countryInput.value !== '';
  };
  const validZipCode = () => {
    const zipCodeInput = document.querySelector('#zip-code');
    return !zipCodeInput.validity.patternMismatch && zipCodeInput.value !== '';
  };
  const validPasswords = () => {
    const passwordInput = document.querySelector('#password');
    const passwordConfirmInput = document.querySelector('#confirmPassword');
    return passwordInput.value === passwordConfirmInput.value;
  };

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
    validEmail,
    validCountry,
    validZipCode,
    validPasswords,
  };
})();

const DOMHandlers = (() => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      DOMHelpers.validEmail() &&
      DOMHelpers.validCountry() &&
      DOMHelpers.validZipCode() &&
      DOMHelpers.validPasswords()
    ) {
      alert('Well done, all inputs are valid!');
    }
  };

  const handleEmailBlur = (e) => {
    e.preventDefault();
    const emailInput = e.target;
    const emailMismatchSpan = document.querySelector('#invalid-email');
    if (!DOMHelpers.validEmail()) {
      emailMismatchSpan.textContent = emailInput.validationMessage;
      emailMismatchSpan.style.display = '';
    } else {
      emailMismatchSpan.textContent = '';
      emailMismatchSpan.style.display = '';
    }
  };

  const handleCountryChange = (e) => {
    const countryInput = e.target;
    if (DOMHelpers.validCountry()) {
      countryInput.classList.remove('invalid-input');
    }
  };

  const handleZipCodeBlur = (e) => {
    e.preventDefault();
    const zipCodeMismatchSpan = document.querySelector('#invalid-zip-code');
    if (!DOMHelpers.validZipCode()) {
      zipCodeMismatchSpan.style.display = '';
    } else {
      zipCodeMismatchSpan.style.display = 'none';
    }
  };

  const handlePasswordBlur = (e) => {
    const passwordMismatchSpan = document.querySelector('#passwords-do-not-match');

    if (!DOMHelpers.validPasswords()) {
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
    handleCountryChange,
  };
})();

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', DOMHandlers.handleFormSubmit);

const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const zipCodeInput = document.querySelector('#zip-code');
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#confirmPassword');

emailInput.addEventListener('blur', DOMHandlers.handleEmailBlur);
emailInput.addEventListener('input', DOMHandlers.handleEmailBlur);

countryInput.addEventListener('change', DOMHandlers.handleCountryChange);
countryInput.classList.add('invalid-input');

zipCodeInput.addEventListener('blur', DOMHandlers.handleZipCodeBlur);
zipCodeInput.addEventListener('input', DOMHandlers.handleZipCodeBlur);

passwordInput.addEventListener('blur', DOMHandlers.handlePasswordBlur);
passwordInput.addEventListener('input', DOMHandlers.handlePasswordBlur);
passwordConfirmInput.addEventListener('blur', DOMHandlers.handlePasswordBlur);
passwordConfirmInput.addEventListener('input', DOMHandlers.handlePasswordBlur);

DOMHelpers.populateCountryDropdown(countriesList);
