//register
const form = document.getElementById('profileForm');
const profileImg = document.querySelector('.profile-img img');

function generateRandomNumber() {
  return Math.floor(100000 + Math.random() * 900000);
} 
function storeRandomNumber() {
  localStorage.setItem('randomNumber', randomNum.toString());
}

function getStoredRandomNumber() {
  const storedNumber = localStorage.getItem('randomNumber');
  return storedNumber ? parseInt(storedNumber) : generateRandomNumber();
}

//contacts mail
function sendemail(){
  Email.send({
      SecureToken:"841e0fb5-f92f-4c22-a580-55b533084c30",
      To : 'timingotech@gmail.com',
      From : 'taonuga@gmail.com',
      Subject : "New Contact Form Enquiry",
      Body :"Name: "+ document.getElementById("name_contact").value +
            "<br>Message: "+ document.getElementById("msg").value +
            "<br>Email: "+ document.getElementById("email").value
  }).then(
    message => alert("Message Sent Successfully")
  );
} 
//verification mail
function sendemailverify() {
  Email.send({
    SecureToken: "841e0fb5-f92f-4c22-a580-55b533084c30",
    To: document.getElementById("email").value,
    From: 'taonuga@gmail.com',
    Subject: "Verification through Email",
    Body: "Your Verification Link is: " + generateRandomNumber()
  }).then();
}


const passwordInput = document.getElementById('password');
const showPasswordIcon = document.getElementById('showPasswordIcon');
const hidePasswordIcon = document.getElementById('hidePasswordIcon');

showPasswordIcon.addEventListener('click', function() {
  passwordInput.type = 'text';
  showPasswordIcon.style.display = 'none';
  hidePasswordIcon.style.display = 'inline-block';
});

hidePasswordIcon.addEventListener('click', function() {
  passwordInput.type = 'password';
  hidePasswordIcon.style.display = 'none';
  showPasswordIcon.style.display = 'inline-block';
});


form.addEventListener('submit', function(event) {
  event.preventDefault();

  
  // Get form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const country = document.getElementById('country').value;
  const meterType = document.getElementById('meterType').value;
  const verifymethod = document.getElementById('verifyType').value;


  if(verifymethod==='Email'){
    sendemailverify();
  }else if(verifymethod==='Messsage'){
    sendmessageverify();
  }
  alert('Check your ' + verifymethod + ' and Verify your account');
  window.location.href = 'verify.html';
  

    localStorage.setItem('profile', JSON.stringify({ firstName, lastName, email, phone, country, meterType, image: imageBase64 }));

});

//verification


function clickverify() {
  
  const verificationForm = document.getElementById('verificationForm');
 
  verificationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const verificationCode = document.getElementById('verificationCode').value;
    const storedRandomNumber = getStoredRandomNumber();

    if (verificationCode === storedRandomNumber.toString()) {
      alert('Verification successful!');
      window.location.href = 'index.html';
    } else {
      // Verification failed
      alert('Verification failed. You kept a wrong Verification.');
    }
  });
}