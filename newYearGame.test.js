// run it in command line:
// npx jest -c "{}" newYearGame.test.js

let game = require('./newYearGame');

test('Game basics', ()=>{
    expect(game(1, [1])).toBe('Ельф');
    expect(game(1, [2])).toBe('Олень');
    expect(game(2, [3,3])).toBe('Ельф');
    expect(game(3, [1,2,3])).toBe('Ельф');
    expect(game(3, [1,2,4])).toBe('Олень');
    expect(game(4, [1,2,4,5])).toBe('Олень');
    expect(game(4, [4,4,4,4])).toBe('Ельф');
    expect(game(5, [7,10,3,9,12])).toBe('Олень');
});