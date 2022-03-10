import ("./index.css")
import icon from "./asset/book.png"

const home = document.getElementById('root');
const box = document.getElementById('ip');
const holder = document.getElementById('output');

home.append(box);
home.append(holder);



const input = document.createElement('input');
input.classList.add('inputbox');
input.type = "text"
input.placeholder = "Hey 👋 Can Store Your Notes 😊"

const button = document.createElement('button');
button.textContent = "ADD"

button.addEventListener("click", (e) => {
    console.log(input.value)
    const notes = document.createElement('p');
    notes.textContent = input.value;
    input.value = "";
    const card = document.createElement('section');
    card.append(notes)
    card.classList.add('card');
    holder.append(card);


})

const img = document.createElement('img');
img.src = icon
box.append(img)
box.append(input);
box.append(button);

