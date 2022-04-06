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

const countries = fetch('https://restcountries.com/v3.1/all').then((res) => console.log(res));

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', DOMHandlers.handleFormSubmit);

const emailInput = document.querySelector('#email');
emailInput.addEventListener('blur', DOMHandlers.handleEmailBlur);
