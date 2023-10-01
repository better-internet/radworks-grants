/*
  Tests the add package.
*/

const add = require('add')

function testAdd() {
  try {
    const x = 1
    const y = 2

    const result = add(x,y)
    console.log('result: ', result)
  } catch(err) {
    console.error(err)
  }
}
testAdd()
