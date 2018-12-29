const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}`);
  // }
});

it('should square a number', () => {
  const res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
  // if (res !== 9) {
  //   throw new Error(`Expected 9, but got ${res}`);
  // }
});

it('should set user firstName and lastName.', () => {
  const user = utils.setName({ age: 100, location:'Spain' },'Javier Machin');

  expect(user)
    .toBeA('object')
    .toInclude({ firstName: 'Javier', lastName: 'Machin'});
});


// it('should expect some values', () =>{
//   expect(12).toNotBe(11);

//   expect({name: 'Javi'}).toEqual({name: 'Javi'});
  
//   expect([2,3,4]).toInclude(2);
  
//   expect([2,3,4]).toExclude(6);

//   expect({
//     name: 'Javi',
//     age: 100,
//     location: 'Spain'
//   }).toInclude({
//     age: 100
//   })
// });