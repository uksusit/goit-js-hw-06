const createComp = (partComp, callback) => callback({
    id: Date.now(),
    ...partComp
});

const logCompName = comp => console.log(comp.name);
const logCompInn = comp => console.log(comp.inn);
const logCompIP = comp => console.log(comp.ip);

const logCompALL = comp => console.log(comp);


createComp({
    name: 'r3ge',
    inn: 102483975,
    ip: '10.0.113.144',
    ram: 8,
    hdd:512
}, logCompName);

createComp({
    name: 'r3ge',
    inn: 102483975,
    ip: 0,
    ram: 8,
    hdd: 512
}, logCompInn);

createComp({
    name: 'r3ge',
    inn: 102483975,
    ip: '10.0.113.144',
    ram: 8,
    hdd: 512
}, logCompIP);
console.log('----------------------');
createComp({
    name: 'r3ge',
    inn: 102483975,
    ip: '10.0.113.144',
    ram: 8,
    hdd: 512
}, logCompALL);