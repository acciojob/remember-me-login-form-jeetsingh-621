  const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const checkbox = document.getElementById('checkbox');
        const existingButton = document.getElementById('existing');

 const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
            existingButton.style.display = 'block';
        };

 loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = usernameInput.value;
            const password = passwordInput.value;

            if (checkbox.checked) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            alert(`Logged in as ${username}`);
            
            if (checkbox.checked) {
                existingButton.style.display = 'block';
            } else {
                existingButton.style.display = 'none';
            }
        });

   existingButton.addEventListener('click', function() {
            const username = localStorage.getItem('username');
            alert(`Logged in as ${username}`);
        });