function saveProfile() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    localStorage.removeItem('bagItems');
    localStorage.removeItem('userProfile');
    localStorage.setItem('userProfile', JSON.stringify({ username, email, phone }));

    alert('Profile updated successfully!');
    alert("cart cleaned");
}

function loadProfile() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (userProfile) {
        document.getElementById('username').value = userProfile.username || '';
        document.getElementById('email').value = userProfile.email || '';
        document.getElementById('phone').value = userProfile.phone || '';
    }
}


document.addEventListener('DOMContentLoaded', loadProfile);
