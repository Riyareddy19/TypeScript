//Typed Arrays

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push(10);
ourTuple.push('Something new and wrong');
console.log(ourTuple);

// Readonly Tuple

let newTuple: readonly [number, string, boolean] = [3, 'Hey this is me', true];
console.log(newTuple);

// Named Tuples

const graph: [x1: number, y1: number] = [55.2, 41.3];
console.log(graph);

//destructing tuples

const graph2: [number, number] = [86.3, 49.3];
const [x2, y2] = graph2;
console.log(graph2)
