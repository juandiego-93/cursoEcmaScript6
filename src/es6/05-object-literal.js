//enhaced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId //ES5
    }
}

console.log(newUser('jdsp',29, 'PE', 1));