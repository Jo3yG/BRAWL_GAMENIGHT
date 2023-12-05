const newFormHandler = async (event) => {
    event.preventDefault();
const charName = document.querySelector('#character-name').value.trim();
const description = document.querySelector('#character-description').value.trim();
const regMoves = document.querySelector('#character-regular-moves').value.trim();
const finalSmash = document.querySelector('#character-final-smash').value.trim();
const gameSeries = document.querySelector('#character-series').value.trim();
const firstApp = document.querySelector('#character-first-appear').value.trim();

if (charName && description && regMoves && finalSmash && gameSeries && firstApp){
    const response = await fetch('/api/newCharacter',{
     method: 'POST',
     body: JSON.stringify({charName, description, regMoves, finalSmash, gameSeries, firstApp}), 
     headers : {
        'Content-Type': 'application/json',
     },
    });
    if (response.ok){
        document.location.replace('/');
    } else {
        alert('Character not added');
    }
}
};
document
.querySelector('.newCharacterForm')
.addEventListener('submit', newFormHandler);
