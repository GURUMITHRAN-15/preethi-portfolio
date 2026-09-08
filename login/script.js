// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.querySelector('.toggle-password i');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
  }
}

// Form validation and submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const remember = document.getElementById('remember').checked;
  
  // Basic validation
  if (!username) {
    alert('Please enter your username');
    return;
  }
  
  if (!password) {
    alert('Please enter your password');
    return;
  }
  
  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }
  
  // Demo submit (replace with actual API call)
  console.log('Login attempt:', { username, password, remember });
  alert(`Welcome back, ${username}!`);
  
  // Reset form
  this.reset();
});

// Social button handlers
document.querySelector('.social-btn.google').addEventListener('click', function() {
  alert('Google login coming soon!');
});

document.querySelector('.social-btn.github').addEventListener('click', function() {
  alert('GitHub login coming soon!');
});
