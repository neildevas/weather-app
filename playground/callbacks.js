var getUser = (id, callback) => {
    var user = {
        id: 50,
        name: 'Neil'
    };
    setTimeout(() => {
        callback(user)
    }, 3000)
};


getUser(50, (user) => {
    console.log(user);
});