interface HasLength {
    length: number;
}

/* файнкции getLength() принимают любой объект, у которого есть свойство length */

function getLength_v1(item: {length: number}) {
    console.log('value of \'length\' property', item.length);
}

function getLength_v2(item: HasLength) {
    console.log('value of \'length\' property', item.length);
}

let user = {
    name: 'Yuri',
    length: 21
};
getLength_v1([1, 2, 3, 4, 5]);
getLength_v1(user);
getLength_v2([1, 2, 3, 4, 5]);
getLength_v2(user);
