const delButtonHandler = async (event) => {
    const response = await fetch(`/withdraw`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete character');
    }
};
document
.querySelector('.withdraw')
.addEventListener('click', delButtonHandler);












