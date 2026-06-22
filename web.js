
const loginOverlay = document.getElementById('loginOverlay');
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');


const validUsername = "admin";
const validPassword = "123";

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const inputUser = document.getElementById('username').value;
    const inputPass = document.getElementById('password').value;

    if (inputUser === validUsername && inputPass === validPassword) {
        loginOverlay.style.opacity = '0';
        setTimeout(() => {
            loginOverlay.style.display = 'none';
        }, 500);
    } else {
        errorMsg.textContent = "Username atau Password salah! Coba lagi.";
        
        document.getElementById('password').value = '';
    }
});


const btnOff = document.querySelectorAll('.buton')[0]; 
const btnOn = document.querySelectorAll('.buton')[1];  

const body = document.body;
const nav = document.querySelector('nav');
const cards = document.querySelectorAll('.card');
const titles = document.querySelectorAll('.card-teks h3');
const paragraphs = document.querySelectorAll('.card-teks p');

btnOff.addEventListener('click', () => {
    body.style.backgroundColor = '#1a1a1a';
    body.style.color = '#f4f7f6';
    
    nav.style.backgroundColor = '#2c3e50';
    document.querySelector('.navkiri h3').style.color = '#ffffff';
    document.querySelectorAll('.navkanan .button').forEach(btn => btn.style.color = '#ffffff');
    
    document.querySelector('.atap h1').style.color = '#ffffff';
    document.querySelector('.atap p').style.color = '#ccc';

    cards.forEach(card => {
        card.style.backgroundColor = '#2d2d2d';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.6)';
    });
    
    titles.forEach(title => title.style.color = '#ffffff');
    paragraphs.forEach(p => p.style.color = '#bbbbbb');

    btnOff.style.backgroundColor = '#dc2626'; 
    btnOn.style.borderColor = '#ffffff';
    btnOn.style.color = '#ffffff';
}); 

btnOn.addEventListener('click', () => {
    body.style.backgroundColor = '#f4f7f6';
    body.style.color = '#333';
    
    nav.style.backgroundColor = '#fff';
    document.querySelector('.navkiri h3').style.color = '#2c3e50';
    document.querySelectorAll('.navkanan .button').forEach(btn => btn.style.color = '#555');
    
    document.querySelector('.atap h1').style.color = '#2c3e50';
    document.querySelector('.atap p').style.color = '#666';

    cards.forEach(card => {
        card.style.backgroundColor = '#ffffff';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
    
    titles.forEach(title => title.style.color = '#2c3e50');
    paragraphs.forEach(p => p.style.color = '#777');

    btnOff.style.backgroundColor = '#2563eb';
    btnOn.style.borderColor = '#2563eb';
    btnOn.style.color = '#2563eb';
    btnOn.style.backgroundColor = 'transparent';
});
