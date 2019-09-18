var programmer = [];    // array
var employee = {        // json object
    'name': 'John Johnson',
    'address': 'Oslo West 16',
    'phone': '12345678',
    'age': 21
};      

console.log(employee);                  // print employee as a json object
console.log(JSON.stringify(employee))   // print employee as a string

var new_employee = '{"name":"Anna Smith","address":"30 Good Shepherd St.","phone":"23456789"}';

// add to array
programmer.push(employee);
programmer.push(JSON.parse(new_employee));

// add a new key-value title: 'programmer'
// remove the key-value age, if exists 
for (let index in programmer) {
    let e = programmer[index];
    e['title'] = 'programmer';          // add a new key-value pair
    console.log(`${e.name} now has a ${e.title} title`);
    if (e.hasOwnProperty('age')) {
        delete e.age;                   // delete a key-value pair
    }
}

var me = {};                            // an empty json object
me.name = 'Batman';                     // add key-value pairs
me.title = 'Hero';
me.skill = ['hacking', 'node.js', 'mongoDB'];
me.email = {
    work: 'batman@gotham.gov',
    home: 'batman@batcave.com'
}
programmer.push(me);

console.log(programmer);