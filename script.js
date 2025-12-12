// toggle for the dark and light mode in gallery
function toggleGalleryMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// the form validation for the contact page
function validateForm() {
  let name = document.getElementById("name").value;
  let msg = document.getElementById("message").value;

  if (name === "" || msg === "") {
    alert("Please fill out all required fields.");
    return false;
  }

  alert("Message sent!");
  return true;
}
