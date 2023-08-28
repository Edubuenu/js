const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const age = document.querySelector('#age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    document.write(`Idade: ${age}, Gênero: ${gender}`);
});

window.document.write(`Preencha os dados acima para ver o resultado`)