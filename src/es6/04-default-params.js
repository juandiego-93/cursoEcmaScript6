function newUser(name, age, country) {
    var name = name || 'Juandiego';
    var age = age || 29;
    var country = country || 'PE'
    console.log(name, age, country)
}

newUser();
newUser('Luiseduardo', 15, 'PE');

function newAdmin(name = 'JD', age = 29, country='PERÚ') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('FlavioPatricio', 29, 'Chile');