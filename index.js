const mapping = require('./mapping.json');
const size = 4;

module.exports = uuid => {
    let quilt = new Array(size).fill('');
    const buffer = Buffer.from(uuid.replace(/-/g, ''), 'hex');
    for (let i = 0; i < size * size; ++i) {
        quilt[i % size] += mapping[buffer[i]];
    }
    return quilt.join('\n');
}
