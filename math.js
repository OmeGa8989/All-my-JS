const add = (x, y) => x + y;

const pi = 3.141519;

const square = x => x * x;

// module.exports = 'HELLO'

// module.exports.add = add;
// module.exports.pi = pi;
// module.exports.square = square;

// const math = {
//     add: add,
//     square: square,
//     pi: pi
// }

// module.exports.obj1 = math;

exports.obj = {
    sq: square,
    pi: pi,
    add: add
}
