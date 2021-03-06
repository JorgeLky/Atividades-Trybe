const shipLength = require('../exercise7');

const ships = [
    {
        name: "Titanic",
        length: 269.1
    },
    {
        name: "Queen Mary 2",
        length: 1132,
        measurementUnit: "feet"
    },
    {
        name: "Yamato",
        length: 256,
        measurementUnit: "meters"
    }
]

// escreva shipLength abaixo

//assert.equal(shipLength(ships[0]), "Titanic is 269.1 meters long")
//assert.equal(shipLength(ships[1]), "Queen Mary 2 is 1132 feet long")
//assert.equal(shipLength(ships[2]), "Yamato is 256 meters long")
    
test('testing ship length function', () => {
expect(shipLength(ships[0])).toEqual('Titanic is 269.1 meters long');
expect(shipLength(ships[1])).toEqual('Queen Mary 2 is 1132 feet long');
expect(shipLength(ships[2])).toEqual('Yamato is 256 meters long');
})