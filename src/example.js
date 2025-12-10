// Fixed linting errors - all violations resolved
const usedVar = 'test';

function test() {
  let x = 10;
  let y = 20;
  
  console.log('This is a test');
  console.log(usedVar);
  
  return x + y;
}

test();
