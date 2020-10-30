const stack = require('./stack')


test('adds 1 + 2 to equal 3', () => {
    expect(stack.sum(1, 2)).toBe(3);
  });

  //Stacks

  //What is it?
//   A stack is a abstract data type that is a collection of objects that are inserted 
//   using the principle of LIFO


// Examples 
// Terminal History
// Recursion StackOverflow
// Limited Capacity
// Operations for A Stack Data Type
// push and pop


// push(element, stack) returns a stack with the element on the top
// pop(s) returns the top element
// Auxilliary 
// Size returns how many elements are in the stack
// peek returns what is on the otp but doesnt remove it
test('create Stack', ()=>{
    s = stack.createStack()
    s === [];
})
test('push',()=>{
    s = stack.createStack()
    s2 = stack.push(2,s)
    s3 = stack.push(3,s2)
    expect(stack.pop(s3)).toBe(3)


})

test('pop',()=>{

})

test('create queue', ()=> {
  q = stack.createQueue;
  expect(stack.isEmpty(q)).toBe(true);  
})

test('enqueue', () => {

})