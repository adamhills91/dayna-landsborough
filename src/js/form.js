const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      document.querySelector(".form-submit-message").textContent =
        "Thank you for your message, I'll respond as soon as possible.";
      document.querySelector("form").reset();
    })
    .catch((error) => {
      document.querySelector(".form-submit-message").textContent = error;
    });
};

document.querySelector("form").addEventListener("submit", handleSubmit);
