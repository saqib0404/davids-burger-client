export const userAuthToken = user => {
    const currentUser = {
        email: user?.email
    }
    // console.log(currentUser);

    fetch('https://devids-burger-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('user-token', data.token)
        })
}