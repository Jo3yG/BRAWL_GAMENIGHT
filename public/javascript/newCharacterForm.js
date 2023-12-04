const newFormHandler = async (event) => {
    event.preventDefault();
const charName = document.querySelector('#characterName').value.trim();
const description = document.querySelector('#charDescription').value.trim();
const regMoves = document.querySelector('#regMoves').value.trim();
const finalSmash = document.querySelector('#finalSmash').value.trim();
const gameSeries = document.querySelector('#gameSeries').value.trim();
const firstApp = document.querySelector('#firstApp').value.trim();

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
