const formEl = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please complete all fields!");
  }
  console.log(`Email : ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", handleSubmit);
