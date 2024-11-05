document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validate inputs (simple validation for demo purposes)
    if (!email || !password || !role) {
        alert('Please fill all fields.');
        return;
    }

    // Check role and redirect
    if (role === 'student') {
        window.location.href = 'student-dashboard.html'; // Redirect to Student Module
    } else if (role === 'educator') {
        window.location.href = 'educator-dashboard.html'; // Redirect to Educator Module
    } else {
        alert('Invalid role selected.');
    }
});
