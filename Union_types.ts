// Union | (OR)

function print_code(code: string | number) 
{
  console.log(`My status code is ${code}`);//console.log("My status code is " + code); 
}
print_code(404);
print_code('404');

// Uunio Type Error

function print_pass(pass : string | number)
{
  console.log(`My password is ${pass}`) //${pass.toUpperCase()} --> error
}
print_pass("Riya");