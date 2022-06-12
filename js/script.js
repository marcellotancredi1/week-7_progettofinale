let users = fetch('..//users.json')
.then(response => response.json());
console.log(users)

let arr = new Array();


users.then(data => {
    let people = document.querySelector('.card');
        data.forEach(ele => {
            let clienti = document.createElement('div');
            clienti.innerHTML = `<img src="${ele.profileURL}">
                                <h3> ${ele.username} </h3>
                                <h4> ${ele.firstName} ${ele.lastName} </h4>
                                <p> ${ele.gender} </p>
                                <p> ${ele.email} </p>
                                `;
            arr.push(ele);
            people.appendChild(clienti);
        })
})


