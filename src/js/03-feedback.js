import { throttle } from 'throttle-debounce';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', inputValue);
form.addEventListener('submit', onSubmit);
const submitBtn = form.lastElementChild;
submitBtn.addEventListener('submit', onSubmit);

const checkValues = JSON.parse(localStorage.getItem('feedback-form-state')) ?? '';
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

emailInput.value = checkValues.email ?? '';
messageInput.value = checkValues.message ?? '';



function inputValue(event) {
    event.preventDefault();
    const { elements : {email, message}} = event.currentTarget;
    let feedbackFormState = {
        'email': email.value,
        'message': message.value
    };
    throttleFunc(feedbackFormState);
}

const throttleFunc = throttle(
	500,
	(num) => {
		localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
	},
	{ noLeading: false, noTrailing: false }
);

function onSubmit(event) {
    event.preventDefault();
    console.log('email:', emailInput.value);
    console.log('message:', messageInput.value);
    form.reset();
    localStorage.removeItem('feedback-form-state')
}
