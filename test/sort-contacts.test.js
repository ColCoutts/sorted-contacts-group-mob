const test = QUnit.test;

QUnit.module('test suite two');

function sortContacts(contacts, sortChoice) {
    const property = sortChoice.property;
    contacts.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return 1;
        }
        return -1;
    });
    return contacts;
}

const contacts = [
    { firstName: 'Zelda', age: 1000 },
    { firstName: 'Marth', age: 27 },
    { firstName: 'Julius', age: 2 }
];

test('sorts contacts by first name', function(assert) {
    //arrange
    const sortChoice = {
        property: 'firstName'
    };

    //act 
    const result = sortContacts(contacts, sortChoice);
    const sorted = [
        { firstName: 'Julius', age: 2 },
        { firstName: 'Marth', age: 27 },
        { firstName: 'Zelda', age: 1000 },
    ];
    
    assert.deepEqual(result, sorted);
});



test('sorts contacts by age', function(assert) {
    //arrange
    const sortChoice = {
        property: 'age'
    };
    //act 
    const result = sortContacts(contacts, sortChoice);
    const sorted = [
        { firstName: 'Julius', age: 2 },
        { firstName: 'Marth', age: 27 },
        { firstName: 'Zelda', age: 1000 },
    ];
    
    assert.deepEqual(result, sorted);
});