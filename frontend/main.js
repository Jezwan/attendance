callData()

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;

    fetch('https://0m3q5zuw40.execute-api.eu-north-1.amazonaws.com/invoke/dbmanager')
    .then(res => res.json())
    .then(data => {
        if (date == '') {
            var object = data.filter(item => item.name.toLowerCase() == name.toLowerCase());
        }
        else if (name == '') {
            var object = data.filter(item => item.date == date);
        }
        else {
            var object = data.filter(item => item.name.toLowerCase() == name.toLowerCase() && item.date == date);
        }
        return object
    })
    .then(data => {
        document.getElementById('table').innerHTML = ''
        if(Object.keys(data).length != 0) {
            data.forEach(user => {
                const payload = `<tr>
                                <th scope="row">${user.name}</th>
                                <td>${user.id}</td>
                                <td>${user.date}</td>
                                <td>${user.status}</td>
                                </tr>`
                document.getElementById('table').insertAdjacentHTML('beforeend', payload)
            })
        }
        else if(name == '' && date == '') {
            callData()
        }
    })
    .catch(error => console.log(error));

});

//calling data from aws

function callData() {
    fetch('https://0m3q5zuw40.execute-api.eu-north-1.amazonaws.com/invoke/dbmanager')
        .then(res => {
            return res.json()
        })
        .then(data => {
            data.forEach(user => {
                const payload = `<tr>
                                    <th scope="row">${user.name}</th>
                                    <td>${user.id}</td>
                                    <td>${user.date}</td>
                                    <td>${user.status}</td>
                                </tr>`
                document.getElementById('table').insertAdjacentHTML('beforeend', payload)
            });
        })
        .catch(error => console.log(error));
}