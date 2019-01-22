const mapping = require('./mapping.json');
const quilt = require('./index');

test('there are 256 emoji', () => {
    expect(mapping.length).toBe(256);
});

test('it creates a quilt', () => {
    const q = quilt('b79aa65c-4a5b-4d36-b2c9-9e02b6548c31');
    expect(q.length).toBe(35);
})