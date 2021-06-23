var firebaseConfig = {
    apiKey: "AIzaSyDZnOKzML4gdyUEa1RkwQcZhOeNkSLatog",
    authDomain: "contact-5936a.firebaseapp.com",
    databaseURL: "https://contact-5936a-default-rtdb.firebaseio.com",
    projectId: "contact-5936a",
    storageBucket: "contact-5936a.appspot.com",
    messagingSenderId: "83719771961",
    appId: "1:83719771961:web:4fa835307fc065c960bae8",
    measurementId: "G-CLYVNFLEM3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let firstname = document.querySelector(".firstname").value;
  let lastname = document.querySelector(".lastname").value;
  let country = document.querySelector(".country").value;
  let subject = document.querySelector(".subject").value;
  let phone = document.querySelector(".phone").value;
  console.log(firstname, lastname, country, subject, phone);

  saveContactInfo(firstname, lastname, country, subject, phone);
  //show alert
  document.querySelector('.alert').style.display = 'block';
  //hide alert after 3second
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(firstname, lastname, country, subject, phone) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    firstname: firstname,
    lastname: lastname,
    country: country,
    subject:subject,
    phone: phone,
  });
}

