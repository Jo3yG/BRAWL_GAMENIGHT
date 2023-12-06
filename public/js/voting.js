const newVote = async function(event) {
    event.preventDefault();
    await fetch('/api/newCharacter/'+ this.value +"/votes",
    {
        method: 'POST'
    })   
    location.reload();
};
document
.querySelectorAll('.vote-button').forEach((button)=>{
    button.addEventListener('click',newVote)
})
