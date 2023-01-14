const contentDiv = document.querySelector('#content');

export default function loadContact() {
  loadHero();
  loadContactInfo();
  loadContactForm();
}
function loadHero() {
  const heroDiv = document.createElement('div');
  heroDiv.setAttribute('id', 'contact-hero');
  heroDiv.classList.add('hero');
  loadHeader(heroDiv);
  contentDiv.appendChild(heroDiv);
}

function loadHeader(parentDiv) {
  const contactHeader = document.createElement('h1');
  contactHeader.textContent = 'Contact Us Today!';
  parentDiv.appendChild(contactHeader);
  contactHeader.setAttribute('id', 'contact-header');
}

function loadContactInfo() {
  const contactInfoDiv = document.createElement('div');
  contactInfoDiv.setAttribute('id', 'contact-info');
  const emailAddress = document.createElement('a');
  emailAddress.setAttribute('id', 'contact-email-address');
  const phoneNumber = document.createElement('p');
  phoneNumber.setAttribute('id', 'contact-phone-number');

  emailAddress.href = 'mailto:ralphsrestaurant@example.com';
  emailAddress.textContent = 'ralphsrestaurant@example.com';
  phoneNumber.textContent = '(100)-123-4567';

  contactInfoDiv.append(emailAddress, phoneNumber);
  contentDiv.appendChild(contactInfoDiv);
}

function loadContactForm() {
  const contactForm = document.createElement('form');
  contactForm.setAttribute('id', 'contactForm');

  const contactDescription = document.createElement('p');
  contactDescription.setAttribute('id', 'contact-description');
  contactDescription.textContent =
    'Please send us a message and we will get back to you as soon as we can! Thank you.';

  const nameInput = document.createElement('input');
  setInputValues(nameInput, 'text', 'nameInput', 'nameInput', 'Name');

  const nameLabel = createLabel('Name ', nameInput);

  const emailInput = document.createElement('input');
  setInputValues(emailInput, 'email', 'emailInput', 'emailInput', 'Email');

  const emailLabel = createLabel('Email ', emailInput);

  const phoneNumberInput = document.createElement('input');
  setInputValues(
    phoneNumberInput,
    'tel',
    'phoneNumberInput',
    'phoneNumberInput',
    'Phone Number'
  );

  const phoneNumberLabel = createLabel('Phone Number ', phoneNumberInput);

  // Subject Input
  const subjectInput = document.createElement('select');
  subjectInput.setAttribute('name', 'subjectInput');
  const subjectPlaceholder = document.createElement('option');
  subjectPlaceholder.selected = true;
  subjectPlaceholder.disabled = true;
  subjectPlaceholder.value = '';
  subjectPlaceholder.text = 'What would you like to contact us about?';
  subjectInput.appendChild(subjectPlaceholder);
  const subjectOptions = ['General', 'Press', 'Jobs'];
  subjectOptions.forEach((subjectOption) => {
    const currentSubject = document.createElement('option');
    currentSubject.value = subjectOption;
    currentSubject.textContent = subjectOption;
    subjectInput.appendChild(currentSubject);
  });

  const subjectLabel = createLabel(subjectPlaceholder.text, subjectInput);

  const messageInput = document.createElement('textarea');
  setInputValues(
    messageInput,
    'text',
    'messageInput',
    'messageInput',
    'Your Message'
  );

  const messageLabel = createLabel('Your Message ', messageInput);

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'Submit');
  submitBtn.textContent = 'Submit';

  // Prevent reload on submit button click
  contactForm.onsubmit = (e) => {
    e.preventDefault();
  };

  nameLabel.append(nameInput);

  contactForm.append(
    contactDescription,
    nameLabel,
    nameInput,
    emailLabel,
    emailInput,
    phoneNumberLabel,
    phoneNumberInput,
    subjectLabel,
    subjectInput,
    messageLabel,
    messageInput,
    submitBtn
  );

  contentDiv.appendChild(contactForm);

  function setInputValues(input, type, name, id, placeholder) {
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', id);
    input.setAttribute('placeholder', placeholder);
  }

  function createLabel(text, inputName) {
    const label = document.createElement('label');
    label.textContent = text;
    label.htmlFor = inputName;
    return label;
  }
}
