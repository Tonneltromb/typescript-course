let c = 'string';
let tuplesArray: [number, number, string] = [1, 2, '3']; //tuples type
let tuplesArray1: any[] = [1, 2, '3'];

enum Users {
    USER_1,
    USER_2,
    USER_3
}

function getError(error: string): never // специальный тип для функций, бросающих ошибки
{
    throw new Error(error);
}

let nullableVariable: number | null = 20; // иначе, нельзя будет присвоить null
nullableVariable = null;