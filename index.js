// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            Accept: 'application/json',
        },
        body:JSON.stringify({
            name: userName,
            email: userEmail
        }),
    })
    .then(res => res.json())
    .then(data => {
        const id = data.id;
        // Appending the id to the DOM
        const li = document.createElement('li');
        li.textContent = `User with id ${id} was created.`;
        document.body.appendChild(li);
     })
    .catch(error => {
       // Appending the error message to the DOM
       const li = document.createElement('li');
       li.textContent = `Error: ${error.message}`;
       document.body.appendChild(li);
    });
}
