let balance = 1000;

function updateBalance() {
  document.getElementById("balance").innerText = "Balance: $" + balance;
}

function addTransaction(amount, user, status) {
  let row = `<tr>
    <td>${amount}</td>
    <td>${user}</td>
    <td>${status}</td>
  </tr>`;
  document.getElementById("transactions").innerHTML += row;
}

// Calendar
function acceptMeeting() {
  alert("Meeting Accepted");
}

function declineMeeting() {
  alert("Meeting Declined");
}

// Video
function startCall() {
  document.getElementById("callStatus").innerText = "Call Status: ON";
}

function endCall() {
  document.getElementById("callStatus").innerText = "Call Status: OFF";
}

// Documents
function updateStatus() {
  let status = document.getElementById("docStatus").value;
  document.getElementById("statusText").innerText = "Status: " + status;
}

function signDoc() {
  let sig = document.getElementById("signature").value;
  if (sig) {
    alert("Signed by " + sig);
  } else {
    alert("Enter signature first");
  }
}

// Payment
function deposit() {
  balance += 100;
  updateBalance();
  addTransaction(100, "You", "Deposit");
}

function withdraw() {
  balance -= 100;
  updateBalance();
  addTransaction(100, "You", "Withdraw");
}

// Login
function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let otp = document.getElementById("otp").value;

  if (email && pass && otp) {
    document.getElementById("loginMsg").innerText = "Login Successful";
  } else {
    document.getElementById("loginMsg").innerText = "Fill all fields";
  }
}