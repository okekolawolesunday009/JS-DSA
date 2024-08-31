function contextTest() {
  let x = 10;
  function foo() {
    console.log(x);
  }
  function bar() {
    x = 20;
    foo();
  }
  bar();
}
function result() {
	const res = contextTest();  
	return res;
}
result()
