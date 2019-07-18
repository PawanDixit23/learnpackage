var event= require('events');
var myevent=new event.EventEmitter()


myevent.on('healtht', function(){
    console.log('This is Event')
})

myevent.emit('healtht')