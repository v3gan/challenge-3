let uiState = {
    isEditing: false,
    firstName: 'Jane',
    lastName: 'Jacobs',
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
    uiState.isEditing = !uiState.isEditing;
    updateUi();
  }
  
  function handleFirstNameChange() {
    firstNameText.textContent = firstNameInput.value;
    helloText.textContent = (
      'Hello ' +
      firstNameInput.value + ' ' +
      lastNameInput.value + '!'
    );
  }
  
  function handleLastNameChange() {
    lastNameText.textContent = lastNameInput.value;
    helloText.textContent = (
      'Hello ' +
      firstNameInput.value + ' ' +
      lastNameInput.value + '!'
    );
  }
  
  function handleDocumentLoaded() {
    updateUi();
  }
  
  function hide(el) {
    el.style.display = 'none';
  }
  
  function show(el) {
    el.style.display = '';
  }
  
  let form = document.getElementById('form');
  let editButton = document.getElementById('editButton');
  let firstNameInput = document.getElementById('firstNameInput');
  let firstNameText = document.getElementById('firstNameText');
  let lastNameInput = document.getElementById('lastNameInput');
  let lastNameText = document.getElementById('lastNameText');
  let helloText = document.getElementById('helloText');
  form.onsubmit = handleFormSubmit;
  firstNameInput.oninput = handleFirstNameChange;
  lastNameInput.oninput = handleLastNameChange;
  document.addEventListener('DOMContentLoaded', handleDocumentLoaded, false);
  
  function updateUi() {  
    console.log('updating');
    firstNameText.textContent = uiState.firstName;
    lastNameText.textContent = uiState.lastName;
    helloText.textContent = `Hello, ${uiState.firstName} ${uiState.lastName}`
    if(uiState.isEditing) {
        editButton.textContent = 'Save Profile';
        hide(firstNameText);
        hide(lastNameText);
        show(firstNameInput);
        show(lastNameInput);
    } else {
        editButton.textContent = 'Edit Profile';
        hide(firstNameInput);
        hide(lastNameInput);
        show(firstNameText);
        show(lastNameText);  
    }
  }
  