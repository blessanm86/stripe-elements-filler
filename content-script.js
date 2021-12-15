const params = new URLSearchParams(window.location.href);
const name = params.get('componentName');

const values = {
  cardNumber: '4242424242424242',
  cardExpiry: '12/25',
  cardCvc: '123',
};

document.querySelector(`[data-elements-stable-field-name="${name}"]`).value = values[name];
  document
    .querySelector(`[data-elements-stable-field-name="${name}"]`)
    .dispatchEvent(new Event('input', { bubbles: true }));