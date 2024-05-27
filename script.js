document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = encodeURIComponent(document.querySelector('#name').value);
    const enrollment = encodeURIComponent(document.querySelector('#enrollment').value);
    const batch=encodeURIComponent(document.querySelector('#batch').value);

    window.location.href = `questions.html?name=${name}&enrollment=${enrollment}&batch=${batch}`;
});
