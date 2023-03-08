// Add your code here

function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = { name: name, email: email };
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch(url, config)
        .then(response => response.json())
        .then(data => {
            const id = data.id;
            document.body.innerHTML += id;
        })
        .catch(error => {
            document.body.innerHTML += error.message;
        });
}
