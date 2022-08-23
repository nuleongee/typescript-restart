const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for('abc');
const g: bigint = 1000000n;
const h: any = true;
const i: true = true; // 고정된 원시값
const j: 5 = 5; // 고정된 원시값

/* 함수 1 */
// function add(x: number, y: number): number {
//   return x + y;
// }

/* 함수 2-1 */
// const add: (x: number, y: number) => number = (x, y) => x + y;
/* 함수 2-2 */
// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;

/* 함수 3 */
interface Add {
  (x: number, y: number): number;
}
const add: Add = (x, y) => x + y;

/* 함수 */
const arr: string[] = ['123', '456'];
const arr2: number[] = [123, 456];
const arr3: Array<number> = [123, 456];
const arr4: [number, number, string] = [123, 456, 'hello']; // 튜플(tuple)

/* 객체 */
// const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
