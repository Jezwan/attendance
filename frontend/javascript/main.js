callData()

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()
    var name = document.getElementById('name').value
    var date = document.getElementById('date').value

    fetch('https://0m3q5zuw40.execute-api.eu-north-1.amazonaws.com/invoke/dbmanager')
    .then(res => {
        return res.json()
    })
    .then(data => {
        data.sort((first,second) => {
            return first.ts - second.ts
        })
        if (date == '') {
            object = data.filter(item => item.name.toLowerCase().replace(/\s/g, '').includes(name.toLowerCase().replace(/\s/g, '')))
        }
        else if (name == '') {
            object = data.filter(item => timestamp(item.ts).date == date)
        }
        else {
            object = data.filter(item => item.name.toLowerCase().replace(/\s/g, '').includes(name.toLowerCase().replace(/\s/g, '')) && timestamp(item.ts).date == date)
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
                                <td>${timestamp(user.ts).date}</td>
                                <td>${timestamp(user.ts).time}</td>
                                <td>${user.status}</td>
                                </tr>`
                document.getElementById('table').insertAdjacentHTML('beforeend', payload)
            })
        }
        else if(name == '' && date == '') {
            callData()
        }
    })
    .catch(error => console.log(error))

})

//calling data from aws

function callData() {
    fetch('https://0m3q5zuw40.execute-api.eu-north-1.amazonaws.com/invoke/dbmanager')
    .then(res => {
        return res.json()
    })
    .then(data => {
        data.sort((first,second) => {
            return first.ts - second.ts
        })
        data.forEach(user => {
            const payload = `<tr>
                            <th scope="row">${user.name}</th>
                            <td>${user.id}</td>
                            <td>${timestamp(user.ts).date}</td>
                            <td>${timestamp(user.ts).time}</td>
                            <td>${user.status}</td>
                            </tr>`
                document.getElementById('table').insertAdjacentHTML('beforeend', payload)
        })
    })
    .catch(error => console.log(error))
}

//covert UNIX timestamp to ISO

function timestamp(unixTimestamp) {
    const dateObject = new Date(Number(unixTimestamp))
    return {
        date : dateObject.getFullYear().toString()+"-"+(dateObject.getMonth()+1).toString()+"-"+dateObject.getDate().toString(),
        time : dateObject.getHours().toString()+":"+dateObject.getMinutes().toString()+":"+dateObject.getSeconds().toString()
    }
}