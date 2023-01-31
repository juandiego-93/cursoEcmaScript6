const user = {username: 'jdsp', age: 29, country: 'PE'};
const {username, ...values } = user;
console.log(username);
console.log(values);