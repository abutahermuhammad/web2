const EventEmiter = require('events');

const myEmitter = new EventEmiter();

myEmitter.on('birthday', (name) => {
    console.log(`Happy birthday ${name}`);
})

myEmitter.on('birthday', () => {
    console.log('Another event occured');
})

myEmitter.emit("birthday", "John");