function* iterate(array){
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['JuanDiego','Flavio', 'Armando', 'Dwan']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);