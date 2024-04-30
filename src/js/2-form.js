const formData = { email: '', message: '' };
const feedbackForm = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('.feedback-form>button');
const feedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state')
);
if (feedbackFormState) {
  feedbackForm.email.value = feedbackFormState.email;
  feedbackForm.message.value = feedbackFormState.message;
}
feedbackForm.addEventListener('input', inputForm);
function inputForm(evt) {
  evt.preventDefault();
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
submitBtn.addEventListener('click', submit);
function submit(evt) {
  evt.preventDefault();
  if (feedbackForm.email.value && feedbackForm.message.value) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
    formData.email = '';
    formData.message = '';
  } else {
    alert('«Fill please all fields»');
  }
}
