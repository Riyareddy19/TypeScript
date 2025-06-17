// Union | (OR)
function print_code(code) {
    console.log("My status code is ".concat(code)); //console.log("My status code is " + code); 
}
print_code(404);
print_code('404');
// Uunio Type Error
function print_pass(pass) {
    console.log("My status code is ".concat(pass)); //${pass.toUpperCase()} --> error
}
print_pass("Riya");
