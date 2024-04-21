// Ambil elemen input nama, email, password, telepon, dan umur
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const teleponInput = document.getElementById('telepon');
const umurInput = document.getElementById('umur');

// Tambahkan event listener input untuk validasi real-time pada input nama
namaInput.addEventListener('input', function() {
    const namaValue = namaInput.value.trim();

    // Validasi input nama dengan regular expression
    const regexNama = /^[a-zA-Z\s]+$/;
    const isValidNama = regexNama.test(namaValue);

    // Tampilkan pesan kesalahan jika input nama tidak valid
    const namaError = document.getElementById('nama-error');
    if (!isValidNama) {
        namaError.textContent = 'Nama hanya boleh berisi huruf kapital.';
    } else {
        namaError.textContent = '';
    }
});

// Tambahkan event listener input untuk validasi real-time pada input email
emailInput.addEventListener('input', function() {
    const emailValue = emailInput.value.trim();

    // Validasi input email dengan regular expression
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = regexEmail.test(emailValue);

    // Tampilkan pesan kesalahan jika input email tidak valid
    const emailError = document.getElementById('email-error');
    if (!isValidEmail) {
        emailError.textContent = 'Email tidak valid.';
    } else {
        emailError.textContent = '';
    }
});

// Tambahkan event listener input untuk validasi real-time pada input password
passwordInput.addEventListener('input', function() {
    const passwordValue = passwordInput.value;

    // Validasi input password: minimal 6 karakter
    const isValidPassword = passwordValue.length >= 6;

    // Tampilkan pesan kesalahan jika input password tidak valid
    const passwordError = document.getElementById('password-error');
    if (!isValidPassword) {
        passwordError.textContent = 'Password harus memiliki minimal 6 karakter.';
    } else {
        passwordError.textContent = '';
    }
});

// Tambahkan event listener input untuk validasi real-time pada input nomor telepon
teleponInput.addEventListener('input', function() {
    const teleponValue = teleponInput.value.trim();

    // Validasi input nomor telepon dengan regular expression
    const regexTelepon = /^[0-9]+$/;
    const isValidTelepon = regexTelepon.test(teleponValue);

    // Tampilkan pesan kesalahan jika input nomor telepon tidak valid
    const teleponError = document.getElementById('telepon-error');
    if (!isValidTelepon) {
        teleponError.textContent = 'Nomor telepon hanya boleh berisi angka.';
    } else {
        teleponError.textContent = '';
    }
});

// Tambahkan event listener input untuk validasi real-time pada input umur
umurInput.addEventListener('input', function() {
    const umurValue = umurInput.value;

    // Validasi input umur: harus berupa angka dan minimal 18 tahun
    const isValidUmur = !isNaN(umurValue) && parseInt(umurValue) >= 18;

    // Tampilkan pesan kesalahan jika input umur tidak valid
    const umurError = document.getElementById('umur-error');
    if (!isValidUmur) {
        umurError.textContent = 'Umur harus berupa angka dan minimal 15 tahun.';
    } else {
        umurError.textContent = '';
    }
});
