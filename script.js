const DOMHandlers = (() => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return {
    handleFormSubmit,
  };
})();

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', DOMHandlers.handleFormSubmit);
