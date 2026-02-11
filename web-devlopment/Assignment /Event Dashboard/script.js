const form = document.querySelector('#form');
const eventCard = document.querySelector('.cards'); // container for cards

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById("eventTitle").value;
    const date = document.getElementById("eventDate").value;
    const cat = document.getElementById("category").value;
    const desc = document.getElementById("description").value;

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h2>${title}</h2>
        <p>🗓️ ${date}</p>
        <button>${cat}</button>
        <p>${desc}</p>
        <div class="deletecard">
    `;

    card.querySelector('.deletecard').addEventListener('click',function(){
        card.remove()
    })

    eventCard.appendChild(card);
});

document.addEventListener('keydown'),(event)=>{
    document.querySelector('.key').innerText=event.key
}