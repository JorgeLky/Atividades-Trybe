const personLikes = require('../exercise3');

const alex = {
    name: "Alex",
    age: 26,
    likes: ["fly fishing"],
    nationality: "Australian"
}

const gunnar = {
    name: "Gunnar",
    age: 30,
    likes: ["hiking", "scuba diving", "taking pictures"],
    nationality: "Icelandic"
}


// assert.equal(personLikes(alex), "Alex is 26 years old and likes fly fishing.")
// assert.equal(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.")
    
test('person Likes function', () => {
    expect(personLikes(alex)).toBe('Alex is 26 years old and likes fly fishing.');
    expect(personLikes(gunnar)).toBe('Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');
})