var user_input = process.stdin;
user_input.setEncoding('UTF-8');
console.log('Please enter your name')

user_input.on('data', function(data){
    console.log('Name '+ data)
})