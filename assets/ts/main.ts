import { Greeter } from './greeter';

const g = new Greeter('gokhanyildiz9535');
g.greet();

interface Point {
 x: number;
 y: number;
}

function logPoint(p: Point) {
 console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

type Shape =
 | { kind: "circle"; radius: number }
 | { kind: "square"; x: number }
 | { kind: "triangle"; x: number; y: number };
// ---cut---
function height(s: Shape) {
 if (s.kind === "circle") {
  return 2 * s.radius;
 } else {
  // s.kind: "square" | "triangle"
  return s.x;
 }
}

function getLength(obj: string | string[]) {
 return obj.length;
}

class VirtualPoint {
 x: number;
 y: number;

 constructor(x: number, y: number) {
  this.x = x;
  this.y = y;
 }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"

console.log(getLength("gokhanyildiz9535"));