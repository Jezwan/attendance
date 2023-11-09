callData()

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;

    fetch('https://0m3q5zuw40.execute-api.eu-north-1.amazonaws.com/invoke/dbmanager')
    .then(res => res.json())
    .then(data => {
        var resultsByName = data.filter(item => item.name.toLowerCase() == (name.toLowerCase()));
        var resultsByDate = data.filter(item => item.date == date);
        var resultsByNameAndDate = data.filter(item => item.name.toLowerCase() == (name.toLowerCase()) && item.date == date);
        return [resultsByName, resultsByDate, resultsByNameAndDate]
    })
    .then(arr => {
        document.getElementById('table').innerHTML = ''
        if(arr[2].length != 0) {
            arr[2].forEach(user => {
                const payload = `<tr>
                                <th scope="row">${user.name}</th>
                                <td>${user.id}</td>
                                <td>${user.date}</td>
                                <td>${user.status}</td>
                                </tr>`
                document.getElementById('table').insertAdjacentHTML('beforeend', payload)
            })
        }
        else if(arr[1].length != 0) {
            arr[1].forEach(user => {
                const payload = `<tr>
                                <th scope="row">${user.name}</th>
                                <td>${user.id}</td>
                                <td>${user.date}</td>
                                <td>${user.status}</td>
                                </tr>`
                document.getElementById('table').insertAdjacentHTML('beforeend', payload)
            })
        }
        else if(arr[0].length != 0) {
            arr[0].forEach(user => {
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
        .catch(error => {
                console.log(error)
        })
}