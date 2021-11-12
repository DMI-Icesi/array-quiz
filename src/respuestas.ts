import TridimensionalPoint from "./TridimensionalPoint";
import BidimensionalPoint from "./BidimensionalPoint";

const punto808 = new TridimensionalPoint(8, 0, 8);
const punto348 = new TridimensionalPoint(3, 4, 8);
const punto5310 = new TridimensionalPoint(5, 3, 10);
const punto701 = new TridimensionalPoint(7, 0, 1);
const punto800 = new TridimensionalPoint(8, 0, 0);
const punto1012 = new TridimensionalPoint(10, 1, 2);
const punto923 = new TridimensionalPoint(9, 2, 3);
const punto345 = new TridimensionalPoint(3, 4, 5);

const puntosEn3Dimensiones: TridimensionalPoint[] = [
    punto348,
    punto5310,
    punto701,
    punto800,
    punto1012,
    punto808,
    punto923,
    punto345,
];

// 1 100% si se hace con unshift o con splice
puntosEn3Dimensiones.unshift(new TridimensionalPoint(5, 3, 0));
/*
[
  TridimensionalPoint { x: 5, y: 3, z: 0 }, <------
  TridimensionalPoint { x: 3, y: 4, z: 8 },
  TridimensionalPoint { x: 5, y: 3, z: 10 },
  TridimensionalPoint { x: 7, y: 0, z: 1 },
  TridimensionalPoint { x: 8, y: 0, z: 0 },
  TridimensionalPoint { x: 10, y: 1, z: 2 },
  TridimensionalPoint { x: 8, y: 0, z: 8 },
  TridimensionalPoint { x: 9, y: 2, z: 3 },
  TridimensionalPoint { x: 3, y: 4, z: 5 }
]
 */

// 2
puntosEn3Dimensiones.splice(4, 0, new TridimensionalPoint(8, 8, 8));
/*[
  TridimensionalPoint { x: 3, y: 4, z: 8 },
  TridimensionalPoint { x: 5, y: 3, z: 10 },
  TridimensionalPoint { x: 7, y: 0, z: 1 },
  TridimensionalPoint { x: 8, y: 8, z: 8 },
  TridimensionalPoint { x: 8, y: 0, z: 0 }, <------
  TridimensionalPoint { x: 10, y: 1, z: 2 },
  TridimensionalPoint { x: 8, y: 0, z: 8 },
  TridimensionalPoint { x: 9, y: 2, z: 3 },
  TridimensionalPoint { x: 3, y: 4, z: 5 }
]*/

// 3 100% si lo hace con splice. 60% si lo hace con 2 shift()
puntosEn3Dimensiones.splice(0, 2);
/*
[
  ------>
  TridimensionalPoint { x: 7, y: 0, z: 1 },
  TridimensionalPoint { x: 8, y: 8, z: 8 },
  TridimensionalPoint { x: 8, y: 0, z: 0 },
  TridimensionalPoint { x: 10, y: 1, z: 2 },
  TridimensionalPoint { x: 8, y: 0, z: 8 },
  TridimensionalPoint { x: 9, y: 2, z: 3 },
  TridimensionalPoint { x: 3, y: 4, z: 5 }
]
*/

// 4. 100% si lo hace con splice. 60% si lo hace con 3 pop(). 80% si no lo hace con -2
puntosEn3Dimensiones.splice(-2, 3);
/*
[
  TridimensionalPoint { x: 7, y: 0, z: 1 },
  TridimensionalPoint { x: 8, y: 8, z: 8 },
  TridimensionalPoint { x: 8, y: 0, z: 0 },
  TridimensionalPoint { x: 10, y: 1, z: 2 },
  TridimensionalPoint { x: 8, y: 0, z: 8 }
  ------>
]
 */

// 5. 90% si no usaron TridimensionalPoint como tipo
puntosEn3Dimensiones.sort((a: TridimensionalPoint, b: TridimensionalPoint): number => {
    return b.z - a.z;
});
/*
[
  TridimensionalPoint { x: 8, y: 8, z: 8 },
  TridimensionalPoint { x: 8, y: 0, z: 8 },
  TridimensionalPoint { x: 10, y: 1, z: 2 },
  TridimensionalPoint { x: 7, y: 0, z: 1 },
  TridimensionalPoint { x: 8, y: 0, z: 0 }
]
*/

// 6 50% si usan indexOf, 100% si lo usan
let indexPunto1012 = puntosEn3Dimensiones.indexOf(punto1012);

if (indexPunto1012 !== -1) {
    puntosEn3Dimensiones.splice(indexPunto1012, 1);
}
/* [
  TridimensionalPoint { x: 8, y: 8, z: 8 },
  TridimensionalPoint { x: 8, y: 0, z: 8 },
  ------>
  TridimensionalPoint { x: 7, y: 0, z: 1 },
  TridimensionalPoint { x: 8, y: 0, z: 0 }
]
*/

// 7
const largoPuntos: number = puntosEn3Dimensiones.length;
// R: 5

// 8
const posicionXPuntoDos: number = puntosEn3Dimensiones[2].x;
// R: 8

// 9
const indiceYCero: number = puntosEn3Dimensiones.findIndex((punto: TridimensionalPoint) => {
    return punto.y === 0;
});
// R: 2

// 10
const puntosNuevos: TridimensionalPoint[] = [
    new TridimensionalPoint(5, 9, 7),
    new TridimensionalPoint(1, 7, 8),
    new TridimensionalPoint(2, 4, 8),
    new TridimensionalPoint(8, 6, 6),
    new TridimensionalPoint(7, 8, 1),
];

const todosLosPuntos: TridimensionalPoint[] = puntosEn3Dimensiones.concat(puntosNuevos);
/*
[
  TridimensionalPoint { x: 8, y: 8, z: 8 },
  TridimensionalPoint { x: 8, y: 0, z: 8 },
  TridimensionalPoint { x: 7, y: 0, z: 1 },
  TridimensionalPoint { x: 8, y: 0, z: 0 },
  TridimensionalPoint { x: 5, y: 9, z: 7 },
  TridimensionalPoint { x: 1, y: 2, z: 8 },
  TridimensionalPoint { x: 2, y: 4, z: 8 },
  TridimensionalPoint { x: 8, y: 2, z: 6 },
  TridimensionalPoint { x: 7, y: 3, z: 1 }
]
 */

// 11
const puntosEn2Dimensiones: BidimensionalPoint[] = todosLosPuntos.map((point: TridimensionalPoint) => {
    return new BidimensionalPoint(point.x, point.y);
});
/*
[
  BidimensionalPoint { x: 8, y: 8 },
  BidimensionalPoint { x: 8, y: 0 },
  BidimensionalPoint { x: 7, y: 0 },
  BidimensionalPoint { x: 8, y: 0 },
  BidimensionalPoint { x: 5, y: 9 },
  BidimensionalPoint { x: 1, y: 2 },
  BidimensionalPoint { x: 2, y: 4 },
  BidimensionalPoint { x: 8, y: 2 },
  BidimensionalPoint { x: 7, y: 3 }
]
 */

// 12
const yMayorOIgualA5: BidimensionalPoint[] = puntosEn2Dimensiones.filter((point: BidimensionalPoint) => {
    return point.y >= 5;
});
/*
[
  BidimensionalPoint { x: 8, y: 8 },
  BidimensionalPoint { x: 5, y: 9 },
  BidimensionalPoint { x: 1, y: 7 },
  BidimensionalPoint { x: 8, y: 6 },
  BidimensionalPoint { x: 7, y: 8 }
]
 */

// 13
const menosElPrimeroYElUltimo: BidimensionalPoint[] = yMayorOIgualA5.slice(1, yMayorOIgualA5.length - 1);
/*
[
  BidimensionalPoint { x: 5, y: 9 },
  BidimensionalPoint { x: 1, y: 7 },
  BidimensionalPoint { x: 8, y: 6 }
]
 */

// 14
menosElPrimeroYElUltimo.forEach((punto: BidimensionalPoint) => {
    punto.imprimirPosiciones();
});
/*
5 9
1 7
8 6
 */

// 15
menosElPrimeroYElUltimo.reverse();
/*
[
  BidimensionalPoint { x: 8, y: 6 },
  BidimensionalPoint { x: 1, y: 7 },
  BidimensionalPoint { x: 5, y: 9 }
]
 */
