

  //Google Sheet connect code
  var scriptURL = "https://script.google.com/macros/s/AKfycbyCE7gEwHql-GcTuLG6NacORhN3P2y5LZrofTY3IEYhFBvJCXWQLmW3gs0PhjDPs3Kd/exec";
  var form = document.forms['google-sheet'];
  form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
  });

  //script for scroll to top
$("#top").click(function () {
  $("html, body").animate({scrollTop: 0}, 1000);
});

