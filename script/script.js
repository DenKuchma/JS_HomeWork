const getFromHTML = (element) => document.getElementById(element)
let jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdlLXR3by5pLXdwLWRldi5jb20vIiwiYXVkIjoiaHR0cHM6Ly9zdGFnZS10d28uaS13cC1kZXYuY29tLyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7ImlkIjoxOSwidXNlcl9lbWFpbCI6InRlc3RAZ21haWwuY29tIiwid';


getFromHTML('registrationForm').addEventListener("submit", function (event) {
    event.preventDefault();

    const email = getFromHTML('email').value;
    const password = getFromHTML('password').value;
    const data = {
        email,
        password
    };

    fetch("https://stage-two.i-wp-dev.com/wp-json/v4/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData)
        if (responseData.code === 200) {
            jwtToken = responseData.jwt;
            alert(responseData.message);
        } else {
            console.error(responseData.message);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

fetch("https://stage-two.i-wp-dev.com/wp-json/v4/users", {
    method: "GET",
    headers: {
    "Authorization": `Bearer ${jwtToken}`
    }
})
.then(response => response.json())
.then(users => {
    const userList = getFromHTML("userList");
    for (const userId in users) {
        const user = users[userId];
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <strong>ID:</strong> ${user.user_ID}<br>
        <strong>Login:</strong> ${user.user_login}<br>
        <strong>First Name:</strong> ${user.first_name}<br>
        <strong>Last Name:</strong> ${user.last_name}<br>
        <strong>Avatar:</strong> <img class="avatar" src="${user.avatar_url}" alt="Avatar"><br>
        `;
        userList.appendChild(listItem);
    }
    })
    .catch(error => {
        console.error("Error:", error);
    });

getFromHTML("updateAvatarForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const newAvatarUrl = getFromHTML("avatarUrl").value;
    const userId = getFromHTML('userId').value;

    const data = {
        id: userId,
        avatar_url: newAvatarUrl
    };
    fetch("https://stage-two.i-wp-dev.com/wp-json/v4/user", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`
        },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status === 200) {
                const newAvatarUrl = responseData.new_avatar_url;
                alert("Мы сделали западло, обнови страничку");
            } else {
            console.error(responseData.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
