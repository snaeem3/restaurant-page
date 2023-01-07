const contentDiv = document.querySelector('#content');

export default function loadContact() {
  loadHeader();
  loadContactInfo();
  loadContactForm();
}

function loadHeader() {
  const contactHeader = document.createElement('h1');
  contactHeader.textContent = 'Contact Us Today!';
  contentDiv.appendChild(contactHeader);
}

function loadContactInfo() {
  const contactInfoDiv = document.createElement('div');
  const emailAddress = document.createElement('p');
  const phoneNumber = document.createElement('p');

  emailAddress.textContent = 'Email: ralphsrestaurant@email.com';
  phoneNumber.textContent = 'Phone Number: (100)-123-4567';

  contactInfoDiv.append(emailAddress, phoneNumber);
  contentDiv.appendChild(contactInfoDiv);
}

function loadContactForm() {
  const contactForm = document.createElement('form');

  const nameInput = document.createElement('input');
  setInputValues(nameInput, 'text', 'nameInput', 'nameInput', 'Name');

  const emailInput = document.createElement('input');
  setInputValues(emailInput, 'email', 'emailInput', 'emailInput', 'Email');

  const phoneNumberInput = document.createElement('input');
  setInputValues(
    phoneNumberInput,
    'tel',
    'phoneNumberInput',
    'phoneNumberInput',
    'Phone Number'
  );

  const subjectInput = document.createElement('select');
  subjectInput.setAttribute('name', 'subjectInput');
  const subjectPlaceholder = document.createElement('option');
  subjectPlaceholder.selected = true;
  subjectPlaceholder.disabled = true;
  subjectPlaceholder.value = '';
  subjectPlaceholder.text = 'What would contact us about?';
  subjectInput.appendChild(subjectPlaceholder);
  const subjectOptions = ['General', 'Press', 'Jobs'];
  subjectOptions.forEach((subjectOption) => {
    const currentSubject = document.createElement('option');
    currentSubject.value = subjectOption;
    currentSubject.textContent = subjectOption;
    subjectInput.appendChild(currentSubject);
  });

  const messageInput = document.createElement('input');
  setInputValues(
    messageInput,
    'text',
    'messageInput',
    'messageInput',
    'Your Message'
  );

  contactForm.append(
    nameInput,
    emailInput,
    phoneNumberInput,
    subjectInput,
    messageInput
  );
  contentDiv.appendChild(contactForm);

  function setInputValues(input, type, name, id, placeholder) {
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', id);
    input.setAttribute('placeholder', placeholder);
  }
}
