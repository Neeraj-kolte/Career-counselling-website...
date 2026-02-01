document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    if (!form) {
        console.error("Form with id 'registerForm' not found.");
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();
        let phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const role = document.querySelector('input[name="role"]:checked').value;

        // Basic validations
        if (fullname.length < 3) {
            alert("Please enter your full name (at least 3 characters).");
            return;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            alert("Password should be at least 6 characters long.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if (/^\d{10}$/.test(phone)) {
            phone = '+91' + phone;
        }
        if (!/^\+?\d{10,15}$/.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }
        
        // Step 1: Send OTP to email
        fetch('/api/auth/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, role })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                // Step 2: Prompt user to enter OTP
                const userOtp = prompt('OTP sent to your email. Please enter the OTP to complete registration:');
                if (!userOtp) {
                    alert('Registration cancelled. OTP not entered.');
                    return;
                }
                // Step 3: Verify OTP and Register
                fetch('/api/auth/verify-register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: fullname,
                        email,
                        phone,
                        password,
                        role,
                        otp: userOtp
                    })
                })
                .then(res => res.json())
                .then(regData => {
                    if (regData.success && regData.user) {
                        // ⭐️ YEH LINE ADD KARO:
                        localStorage.setItem("user", JSON.stringify(regData.user));
                        alert('Registration successful! You are now logged in.');
                        window.location.href = '/dashboard.html';
                    } else if (regData.success) {
                        alert('Registration successful! You can now log in.');
                        window.location.href = '/login.html';
                    } else {
                        alert(regData.message || 'Registration failed.');
                    }
                })
                .catch(err => {
                    alert('Registration failed. Please try again.');
                    console.error(err);
                });
            } else {
                alert(data.message || 'Failed to send OTP.');
            }
        })
        .catch(err => {
            alert('Failed to send OTP. Please try again.');
            console.error(err);
        });
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
