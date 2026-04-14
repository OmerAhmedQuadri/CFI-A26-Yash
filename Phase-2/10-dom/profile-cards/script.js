const ADD_BTN = document.getElementById('add-profile-btn')
const DATA = document.getElementById('data')

ADD_BTN.addEventListener('click', () => {
    const username = prompt("Enter username");

    if (!username) return;

    console.log(username);
    
    const card = document.createElement('div');
    card.classList.add('profile-card');
    
    card.innerHTML = `
    <div class="card-front">
    <img src="./zerodha_landing.jpg" alt="Profile_pic">
    <div class="card-info">
    <h3>${username}</h3>
    <p>Role</p>
    </div>
    </div>
    `;
    
    DATA.appendChild(card)
});