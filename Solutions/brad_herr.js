identity(x) ⇒ x
// Write a function identity that takes an argument and returns that argument

addb(a, b) ⇒ number
Write a binary function addb that takes two numbers and returns their sum

subb(a, b) ⇒ number
Write a binary function subb that takes two numbers and returns their difference

mulb(a, b) ⇒ number
Write a binary function mulb that takes two numbers and returns their product

minb(a, b) ⇒ number
Write a binary function minb that takes two numbers and returns the smaller one

maxb(a, b) ⇒ number
Write a binary function maxb that takes two numbers and returns the larger one

add(...nums) ⇒ number
Write a function add that is generalized for any amount of arguments

sub(...nums) ⇒ number
Write a function sub that is generalized for any amount of arguments

mul(...nums) ⇒ number
Write a function mul that is generalized for any amount of arguments

min(...nums) ⇒ number
Write a function min that is generalized for any amount of arguments

max(...nums) ⇒ number
Write a function max that is generalized for any amount of arguments

addRecurse(...nums) ⇒ number
Write a function addRecurse that is the generalized add function but uses recursion

mulRecurse(...nums) ⇒ number
Write a function mulRecurse that is the generalized mul function but uses recursion

minRecurse(...nums) ⇒ number
Write a function minRecurse that is the generalized min function but uses recursion

maxRecurse(...nums) ⇒ number
Write a function maxRecurse that is the generalized max function but uses recursion

not(func) ⇒ function
Write a function not that takes a function and returns the negation of its result

acc(func, initial) ⇒ function
Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

accPartial(func, start, end) ⇒ function
Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.

accRecurse(func, initial) ⇒ function
Write a function accRecurse that does what acc does but uses recursion

fill(num) ⇒ array
Write a function fill that takes a number and returns an array with that many numbers equal to the given number

fillRecurse(num) ⇒ array
Write a function fillRecurse that does what fill does but uses recursion

set(...args) ⇒ array
Write a function set that is given a list of arguments and returns an array with all duplicates removed

identityf(x) ⇒ function
Write a function identityf that takes an argument and returns a function that returns that argument

addf(a) ⇒ function
Write a function addf that adds from two invocations

liftf(binary) ⇒ function
Write a function liftf that takes a binary function, and makes it callable with two invocations

pure(x, y) ⇒ array
Write a pure function pure that is a wrapper arround the impure function impure

function impure(x) {
  y++;
  z = x * y;
}
var y = 5, z;


impure(20);
z; // 120


impure(25);
z; // 175

curryb(binary, a) ⇒ function
Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument

curry(func, ...outer) ⇒ function
Write a function curry that is generalized for any amount of arguments

inc(x) ⇒ number
Without writting any new functions, show multiple ways to create the inc function

twiceUnary(binary) ⇒ function
Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice

doubl(x) ⇒ number
Use the function twiceUnary to create the doubl function

square(x) ⇒ number
Use the function twiceUnary to create the square function

twice(x) ⇒ any
Write a function twice that is generalized for any amount of arguments

reverseb(binary) ⇒ function
Write a function reverseb that reverses the arguments of a binary function

reverse(func) ⇒ function
Write a function reverse that is generalized for any amount of arguments

composeuTwo(unary1, unary2) ⇒ function
Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both

composeu(...funcs) ⇒ any
Write a function composeu that is generalized for any amount of arguments

composeb(binary1, binary2) ⇒ function
Write a function composeb that takes two binary functions and returns a function that calls them both

composeTwo(func1, func2) ⇒ function
Write a function composeTwo that takes two functions and returns a function that calls them both

compose(...funcs) ⇒ function
Write a function compose that takes any amount of functions and returns a function that takes any amount of arguments and gives them to the first function, then that result to the second function and so on

limitb(binary, lmt) ⇒ function
Write a function limitb that allows a binary function to be called a limited number of times

limit(func, lmt) ⇒ function
Write a function limit that is generalized for any amount of arguments

genFrom(x) ⇒ function
Write a function genFrom that produces a generator that will produces a series of values

genTo(gen, lmt) ⇒ function
Write a function genTo that takes a generator and an end limit, and returns a generator that will produce numbers up to that limit

genFromTo(start, end) ⇒ function
Write a function genFromTo that produces a generator that will produce values in a range

elementGen(array, gen) ⇒ function
Write a function elementGen that takes an array and a generator and returns a generator that will produce elements from the array

element(array, gen) ⇒ function
Write a function element that is a modified elementGen function so that the generator argument is optional. If a generator is not provided, then each of the elements of the array will be produced.

collect(gen, array) ⇒ function
Write a function collect that takes a generator and an array and produces a function that will collect the results in the array

filter(gen, predicate) ⇒ function
Write a function filter that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate

filterTail(gen, predicate) ⇒ function
Write a function filterTail that uses tail-recursion to perform the filtering

concatTwo(gen1, gen2) ⇒ function
Write a function concatTwo that takes two generators and produces a generator that combines the sequences

concat(...gens) ⇒ function
Write a function concat that is generalized for any amount of arguments

concatTail(...gens) ⇒ function
Write a function concatTail that uses tail-recursion to perform the concating

gensymf(symbol) ⇒ function
Write a function gensymf that makes a function that generates unique symbols

gensymff(unary, seed) ⇒ function
Write a function gensymff that takes a unary function and a seed and returns a gensymf

fibonaccif(first, second) ⇒ function
Write a function fibonaccif that returns a generator that will return the next fibonacci number

counter(i) ⇒ object
Write a function counter that returns an object containing two functions that implement an up/down counter, hiding the counter

revocableb(binary) ⇒ object
Write a function revocableb that takes a binary function, and returns an object containing an invoke function that can invoke a function and a revoke function that disables the invoke function

revocable(func) ⇒ object
Write a function revocable that is generalized for any amount of arguments

extract(array, prop) ⇒ array
Write a function extract that takes an array of objects and an object property name and converts each object in the array by extracting that property

m(value, source) ⇒ object
Write a function m that takes a value and an optional source string and returns them in an object

addmTwo(m1, m2) ⇒ object
Write a function addmTwo that adds two m objects and returns an m object

addm(...ms) ⇒ object
Write a function addm that is generalized for any amount of arguments

liftmbM(binary, op) ⇒ object
Write a function liftmbM that takes a binary function and a string and returns a function that acts on m objects

liftmb(binary, op) ⇒ object
Write a function liftmb that is a modified function liftmbM that can accept arguments that are either numbers or m objects

liftm(func, op) ⇒ object
Write a function liftm that is generalized for any amount of arguments

exp(value) ⇒ any
Write a function exp that evaluates simple array expressions

expn(value) ⇒ any
Write a function expn that is a modified exp that can evaluate nested array expressions

addg(value) ⇒ number | undefined
Write a function addg that adds from many invocations, until it sees an empty invocation

liftg(binary) ⇒ function
Write a function liftg that will take a binary function and apply it to many invocations

arrayg(value) ⇒ array
Write a function arrayg that will build an array from many invocations

continuizeu(unary) ⇒ function
Write a function continuizeu that takes a unary function and returns a function that takes a callback and an argument

continuize(any) ⇒ function
Write a function continuize that takes a function and returns a function that takes a callback and an argument

vector()
Make an array wrapper object with methods get, store, and append, such that an attacker cannot get access to the private array

exploitVector()
Let's assume your vector implementation looks like something like this:

vector = () => {
  let array = [];
  return {
    append: (v) => array.push(v),
    get: (i) => array[i],
    store: (i, v) => array[i] = v
  };
}
Can you spot any security concerns with this approach? Mainly, can we get access to the array outside of vector? Note: the issue has nothing to do with prototypes and we can assume that global prototypes cannot be altered. Hint: Think about using this in a method invocation. Can we override a method of vector?

vectorSafe()
How would you rewrite vector to deal with the issue from above?

pubsub()
Make a function pubsub that makes a publish/subscribe object. It will reliably deliver all publications to all subscribers in the right order.

mapRecurse(array, predicate) ⇒ array
Make a function mapRecurse that performs a transformation for each element of a given array, recursively

filterRecurse(array, predicate) ⇒ array
Make a function filterRecurse that takes in an array and a predicate function and returns a new array by filtering out all items using the predicate, recursively.


identity(x) ⇒ any
Write a function identity that takes an argument and returns that argument

Param	Type
x	any
Example

identity(3) // 3

addb(a, b) ⇒ number
Write a binary function addb that takes two numbers and returns their sum

Param	Type
a	number
b	number
Example

addb(3, 4) // 3 + 4 = 7

subb(a, b) ⇒ number
Write a binary function subb that takes two numbers and returns their difference

Param	Type
a	number
b	number
Example

subb(3, 4) // 3 - 4 = -1

mulb(a, b) ⇒ number
Write a binary function mulb that takes two numbers and returns their product

Param	Type
a	number
b	number
Example

mulb(3, 4) // 3 * 4 = 12

minb(a, b) ⇒ number
Write a binary function minb that takes two numbers and returns the smaller one

Param	Type
a	number
b	number
Example

minb(3, 4) // 3

maxb(a, b) ⇒ number
Write a binary function maxb that takes two numbers and returns the larger one

Param	Type
a	number
b	number
Example

maxb(3, 4) // 4

add(...nums) ⇒ number
Write a function add that is generalized for any amount of arguments

Param	Type
...nums	number
Example

add(1, 2, 4) // 1 + 2 + 4 = 7

sub(...nums) ⇒ number
Write a function sub that is generalized for any amount of arguments

Param	Type
...nums	number
Example

sub(1, 2, 4) // 1 - 2 - 4 = -5

mul(...nums) ⇒ number
Write a function mul that is generalized for any amount of arguments

Param	Type
...nums	number
Example

mul(1, 2, 4) // 1 * 2 * 4 = 8

min(...nums) ⇒ number
Write a function min that is generalized for any amount of arguments

Param	Type
...nums	number
Example

min(1, 2, 4) // 1

max(...nums) ⇒ number
Write a function max that is generalized for any amount of arguments

Param	Type
...nums	number
Example

max(1, 2, 4) // 4

addRecurse(...nums) ⇒ number
Write a function addRecurse that is the generalized add function but uses recursion

Param	Type
...nums	number
Example

addRecurse(1, 2, 4) // 1 + 2 + 4 = 7

mulRecurse(...nums) ⇒ number
Write a function mulRecurse that is the generalized mul function but uses recursion

Param	Type
...nums	number
Example

mulRecurse(1, 2, 4) // 1 * 2 * 4 = 8

minRecurse(...nums) ⇒ number
Write a function minRecurse that is the generalized min function but uses recursion

Param	Type
...nums	number
Example

minRecurse(1, 2, 4) // 1

maxRecurse(...nums) ⇒ number
Write a function maxRecurse that is the generalized max function but uses recursion

Param	Type
...nums	number
Example

maxRecurse(1, 2, 4) // 4

not(func) ⇒ function
Write a function not that takes a function and returns the negation of its result

Param	Type
func	function
Example

const isOdd = (x) => x % 2 === 1
const isEven = not(isOdd)
isEven(1) // false
isEven(2) // true

acc(func, initial) ⇒ function
Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

Param	Type
func	function
initial	any
Example

let add = acc(addb, 0)
add(1, 2, 4) // 7

let mul = acc(mulb, 1)
mul(1, 2, 4) // 8

accPartial(func, start, end) ⇒ function
Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.

Param	Type
func	function
start	number
end	number
Example

const addSecondToThird = accPartial(add, 1, 3)
addSecondToThird(1, 2, 4, 8) // [ 1, 6, 8 ]

accRecurse(func, initial) ⇒ function
Write a function accRecurse that does what acc does but uses recursion

Param	Type
func	function
initial	number
Example

let add = accRecurse(addb, 0)
add(1, 2, 4) // 7

let mul = accRecurse(mulb, 1)
mul(1, 2, 4) // 8

fill(num) ⇒ array
Write a function fill that takes a number and returns an array with that many numbers equal to the given number

Param	Type
num	number
Example

fill(3) // [ 3, 3, 3 ]

fillRecurse(num) ⇒ array
Write a function fillRecurse that does what fill does but uses recursion

Param	Type
num	number
Example

fillRecurse(3) // [ 3, 3, 3 ]

set(...args) ⇒ array
Write a function set that is given a list of arguments and returns an array with all duplicates removed

Param	Type
...args	any
Example

let oneAndTwo = set(1, 1, 1, 2, 2, 2) // [ 1, 2 ]

identityf(x) ⇒ function
Write a function identityf that takes an argument and returns a function that returns that argument

Param	Type
x	any
Example

let three = identityf(3)
three() // 3

addf(a) ⇒ function
Write a function addf that adds from two invocations

Param	Type
a	number
Example

addf(3)(4) // 7

liftf(binary) ⇒ function
Write a function liftf that takes a binary function, and makes it callable with two invocations

Param	Type
binary	function
Example

let addf = liftf(addb)
addf(3)(4) // 7

liftf(mulb)(5)(6) // 30

pure(x, y) ⇒ array
Write a pure function pure that is a wrapper arround the impure function impure

function impure(x) {
  y++;
  z = x * y;
}

var y = 5, z;

impure(20);
z; // 120

impure(25);
z; // 175
Returns: array - an array containing y and z

Param	Type
x	number
y	number
Example

pure(20, 5) // [ 6, 120 ]
pure(25, 6) // [ 7, 175 ]

curryb(binary, a) ⇒ function
Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument

Param	Type
binary	function
a	any
Example

let add3 = curryb(addb, 3)
add3(4) // 7

curryb(mulb, 5)(6) // 30

curry(func, ...outer) ⇒ function
Write a function curry that is generalized for any amount of arguments

Param	Type
func	function
...outer	any
Example

curry(add, 1, 2, 4)(4, 2, 1) = 1 + 2 + 4 + 4 + 2 + 1 = 14
curry(sub, 1, 2, 4)(4, 2, 1) = 1 - 2 - 4 - 4 - 2 - 1 = -12
curry(mul, 1, 2, 4)(4, 2, 1) = 1 * 2 * 4 * 4 * 2 * 1 = 64

inc(x) ⇒ number
Without writting any new functions, show multiple ways to create the inc function

Param	Type
x	number
Example

inc(5) // 6
inc(inc(5)) // 7

twiceUnary(binary) ⇒ function
Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice

Param	Type
binary	function
Example

let doubl = twiceUnary(addb)
doubl(11) // 22

let square = twiceUnary(mulb)
square(11) // 121

doubl(x) ⇒ number
Use the function twiceUnary to create the doubl function

Param	Type
x	number
Example

doubl(11) // 22

square(x) ⇒ number
Use the function twiceUnary to create the square function

Param	Type
x	number
Example

square(11) // 121

twice(x) ⇒ any
Write a function twice that is generalized for any amount of arguments

Param	Type
x	function
Example

let doubleSum = twice(add)
doubleSum(1, 2, 4) // 1 + 2 + 4 + 1 + 2 + 4 = 14

reverseb(binary) ⇒ function
Write a function reverseb that reverses the arguments of a binary function

Param	Type
binary	function
Example

let bus = reverseb(subb)
bus(3, 2) // -1

reverse(func) ⇒ function
Write a function reverse that is generalized for any amount of arguments

Param	Type
func	function
Example

reverse(sub)(1, 2, 4) // 4 - 2 - 1 = 1

composeuTwo(unary1, unary2) ⇒ function
Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both

Param	Type
unary1	function
unary2	function
Example

composeuTwo(doubl, square)(5) // 100

composeu(...funcs) ⇒ any
Write a function composeu that is generalized for any amount of arguments

Param	Type
...funcs	function
Example

composeu(doubl, square, identity, curry(add, 1, 2))(5) // (5 + 5) * (5 + 5) + 1 + 2 = 103

composeb(binary1, binary2) ⇒ function
Write a function composeb that takes two binary functions and returns a function that calls them both

Param	Type
binary1	function
binary2	function
Example

composeb(addb, mulb)(2, 3, 7) // 35

composeTwo(func1, func2) ⇒ function
Write a function composeTwo that takes two functions and returns a function that calls them both

Param	Type
func1	function
func2	function
Example

composeTwo(add, square)(2, 3, 7) // (2 + 3 + 7)^2 = 144

compose(...funcs) ⇒ function
Write a function compose that takes any amount of functions and returns a function that takes any amount of arguments and gives them to the first function, then that result to the second function and so on

Param	Type
...funcs	function
Example

const f = compose(add, doubl, fill, max)
f(0, 1, 2)
// add(0, 1, 2) -> 3
// doubl(3) -> 6
// fill(6) -> [ 6, 6, 6, 6, 6, 6 ]
// max([ 6, 6, 6, 6, 6, 6 ]) -> 6

limitb(binary, lmt) ⇒ function
Write a function limitb that allows a binary function to be called a limited number of times

Param	Type
binary	function
lmt	number
Example

let addLmtb = limitb(addb, 1)
addLmtb(3, 4) // 7
addLmtb(3, 5) // undefined

limit(func, lmt) ⇒ function
Write a function limit that is generalized for any amount of arguments

Param	Type
func	function
lmt	number
Example

let addLmt = limit(add, 1)
addLmt(1, 2, 4) // 7
addLmt(3, 5, 9, 2) // undefined

genFrom(x) ⇒ function
Write a function genFrom that produces a generator that will produces a series of values

Param	Type
x	number
Example

let index = genFrom(0)

index.next().value // 0
index.next().value // 1
index.next().value // 2

genTo(gen, lmt) ⇒ function
Write a function genTo that takes a generator and an end limit, and returns a generator that will produce numbers up to that limit

Param	Type
gen	function
lmt	number
Example

let index = genTo(genFrom(1), 3)

index() // 1
index() // 2
index() // undefined

genFromTo(start, end) ⇒ function
Write a function genFromTo that produces a generator that will produce values in a range

Param	Type
start	number
end	number
Example

let index = genFromTo(0, 3)
index() // 0
index() // 1
index() // 2
index() // undefined

elementGen(array, gen) ⇒ function
Write a function elementGen that takes an array and a generator and returns a generator that will produce elements from the array

Param	Type
array	array
gen	function
Example

let ele = elementGen(['a', 'b', 'c', 'd'], genFromTo(1, 3))

ele() // 'b'
ele() // 'c'
ele() // undefined

element(array, gen) ⇒ function
Write a function element that is a modified elementGen function so that the generator argument is optional. If a generator is not provided, then each of the elements of the array will be produced.

Param	Type
array	array
gen	function
Example

let ele = element(['a', 'b', 'c', 'd'])

ele() // 'a'
ele() // 'b'
ele() // 'c'
ele() // 'd'
ele() // undefined

collect(gen, array) ⇒ function
Write a function collect that takes a generator and an array and produces a function that will collect the results in the array

Param	Type
gen	function
array	array
Example

let array = []
let col = collect(genFromTo(0, 2), array)

col() // 0
col() // 1
col() // undefined
array // [0, 1]

filter(gen, predicate) ⇒ function
Write a function filter that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate

Param	Type
gen	function
predicate	function
Example

let fil = filter(genFromTo(0, 5), (val) => val % 3 === 0)

fil() // 0
fil() // 3
fil() // undefined

filterTail(gen, predicate) ⇒ function
Write a function filterTail that uses tail-recursion to perform the filtering

Param	Type
gen	function
predicate	function
Example

let third = (val) => val % 3 === 0
let fil = filterTail(genFromTo(0, 5), third)

fil() // 0
fil() // 3
fil() // undefined

concatTwo(gen1, gen2) ⇒ function
Write a function concatTwo that takes two generators and produces a generator that combines the sequences

Param	Type
gen1	function
gen2	function
Example

let con = concatTwo(genFromTo(0, 3), genFromTo(0, 2))
con() // 0
con() // 1
con() // 2
con() // 0
con() // 1
con() // undefined

concat(...gens) ⇒ function
Write a function concat that is generalized for any amount of arguments

Param	Type
...gens	function
Example

let con = concat(genFromTo(0, 3), genFromTo(0, 2), genFromTo(5, 7))
con() // 0
con() // 1
con() // 2
con() // 0
con() // 1
col() // 5
col() // 6
con() // undefined

concatTail(...gens) ⇒ function
Write a function concatTail that uses tail-recursion to perform the concating

Param	Type
...gens	function
Example

let con = concatTail(genFromTo(0, 3), genFromTo(0, 2), genFromTo(5, 7))
con() // 0
con() // 1
con() // 2
con() // 0
con() // 1
col() // 5
col() // 6
con() // undefined

gensymf(symbol) ⇒ function
Write a function gensymf that makes a function that generates unique symbols

Param	Type
symbol	string
Example

let genG = gensymf('G')
let genH = gensymf('H')

genG() // 'G1'
genH() // 'H1'
genG() // 'G2'
genH() // 'H2'

gensymff(unary, seed) ⇒ function
Write a function gensymff that takes a unary function and a seed and returns a gensymf

Param	Type
unary	function
seed	number
Example

let gensymf = gensymff(inc, 0)
let genG = gensymf('G')
let genH = gensymf('H')

genG() // 'G1'
genH() // 'H1'
genG() // 'G2'
genH() // 'H2'

fibonaccif(first, second) ⇒ function
Write a function fibonaccif that returns a generator that will return the next fibonacci number

Param	Type
first	number
second	number
Example

let fib = fibonaccif(0, 1)
fib() // 0
fib() // 1
fib() // 1
fib() // 2
fib() // 3
fib() // 5
fib() // 8

counter(i) ⇒ object
Write a function counter that returns an object containing two functions that implement an up/down counter, hiding the counter

Param	Type
i	number
Example

let obj = counter(10)
let { up, down } = obj

up() // 11
down() // 10
down() // 9
up() // 10

revocableb(binary) ⇒ object
Write a function revocableb that takes a binary function, and returns an object containing an invoke function that can invoke a function and a revoke function that disables the invoke function

Param	Type
binary	function
Example

let rev = revocableb(addb)

rev.invoke(3, 4) // 7
rev.revoke()
rev.invoke(5, 7) // undefined

revocable(func) ⇒ object
Write a function revocable that is generalized for any amount of arguments

Param	Type
func	function
Example

let rev = revocable(add)

rev.invoke(3, 4) // 7
rev.revoke()
rev.invoke(5, 7) // undefined

extract(array, prop) ⇒ array
Write a function extract that takes an array of objects and an object property name and converts each object in the array by extracting that property

Param	Type
array	array
prop	string
Example

let people = [{ name: 'john' }, { name: 'bob' }]
let names = extract(people, 'name') // ['john', 'bob']

m(value, source) ⇒ object
Write a function m that takes a value and an optional source string and returns them in an object

Param	Type
value	any
source	any
Example

JSON.stringify(m(1)) // '{"value":1,"source":"1"}'

JSON.stringify(m(Math.PI, 'pi')) // '{"value":3.14159...,"source":"pi"}'

addmTwo(m1, m2) ⇒ object
Write a function addmTwo that adds two m objects and returns an m object

Param	Type
m1	function
m2	function
Example

JSON.stringify(addmTwo(m(3), m(4))) // '{"value":7,"source":"(3+4)"}'

JSON.stringify(addmTwo(m(1), m(Math.PI, 'pi'))) // '{"value":4.14159...,"source":"(1+pi)"}'

addm(...ms) ⇒ object
Write a function addm that is generalized for any amount of arguments

Param	Type
...ms	function
Example

JSON.stringify(addm(m(1), m(2), m(4))) // '{"value":7,"source":"(1+2+4)"}'

liftmbM(binary, op) ⇒ object
Write a function liftmbM that takes a binary function and a string and returns a function that acts on m objects

Param	Type
binary	function
op	string
Example

let addmb = liftmbM(addb, '+')

JSON.stringify(addmb(m(3), m(4))) // '{"value":7,"source":"(3+4)"}'

JSON.stringify(liftmbM(mul, '*')(m(3), m(4))) // '{"value":12,"source":"(3*4)"}'

liftmb(binary, op) ⇒ object
Write a function liftmb that is a modified function liftmbM that can accept arguments that are either numbers or m objects

Param	Type
binary	function
op	string
Example

let addmb = liftmb(addb, '+')

JSON.stringify(addmb(3, 4)) // '{"value":7,"source":"(3+4)"}'

liftm(func, op) ⇒ object
Write a function liftm that is generalized for any amount of arguments

Param	Type
func	function
op	string
Example

let addm = liftm(add, '+')

JSON.stringify(addm(m(3), m(4))) // '{"value":7,"source":"(3+4)"}'

JSON.stringify(liftm(mul, '*')(m(3), m(4))) // '{"value":12,"source":"(3*4)"}'

exp(value) ⇒ any
Write a function exp that evaluates simple array expressions

Param	Type
value	any
Example

let sae = [mul, 1, 2, 4]
exp(sae) // 1 * 2 * 4 = 8
exp(42) // 42

expn(value) ⇒ any
Write a function expn that is a modified exp that can evaluate nested array expressions

Param	Type
value	any
Example

let nae = [Math.sqrt, [add, [square, 3], [square, 4]]]

expn(nae) // sqrt(((3*3)+(4*4))) === 5

addg(value) ⇒ number | undefined
Write a function addg that adds from many invocations, until it sees an empty invocation

Param	Type
value	number
Example

addg() // undefined
addg(2)() // 2
addg(2)(7)() // 9
addg(3)(0)(4)() // 7
addg(1)(2)(4)(8)() // 15

liftg(binary) ⇒ function
Write a function liftg that will take a binary function and apply it to many invocations

Param	Type
binary	function
Example

liftg(mulb)() // undefined
liftg(mulb)(3)() // 3
liftg(mulb)(3)(0)(4)() // 0
liftg(mulb)(1)(2)(4)(8)() // 64

arrayg(value) ⇒ array
Write a function arrayg that will build an array from many invocations

Param	Type
value	any
Example

arrayg() // []
arrayg(3)() // [3]
arrayg(3)(4)(5)() // [3, 4, 5]

continuizeu(unary) ⇒ function
Write a function continuizeu that takes a unary function and returns a function that takes a callback and an argument

Param	Type
unary	function
Example

sqrtc = continuizeu(Math.sqrt)
sqrtc(console.log, 81) // logs '9'

continuize(any) ⇒ function
Write a function continuize that takes a function and returns a function that takes a callback and an argument

Param	Type
any	function
Example

mullc = continuize(Math.mul)
mulc(console.log, 81, 4, 2) // logs '648'

vector()
Make an array wrapper object with methods get, store, and append, such that an attacker cannot get access to the private array

Example

let v = vector()
v.append(7)
v.store(1, 8)
v.get(0) // 7
v.get(1) // 8

exploitVector()
Let's assume your vector implementation looks like something like this:

vector = () => {
  let array = [];
  return {
    append: (v) => array.push(v),
    get: (i) => array[i],
    store: (i, v) => array[i] = v
  };
}
Can you spot any security concerns with this approach? Mainly, can we get access to the array outside of vector? Note*: the issue has nothing to do with prototypes and we can assume that global prototypes cannot be altered. Hint*: Think about using this in a method invocation. Can we override a method of vector?

Example

let v = vector()
v.append(1)
v.append(2)
let internalData = exploitVector(v) // [1, 2]

vectorSafe()
How would you rewrite vector to deal with the issue from above?

Example

let v = vectorSafe()
v.append(1)
v.append(2)
let internalData = exploitVector(v) // undefined

pubsub()
Make a function pubsub that makes a publish/subscribe object. It will reliably deliver all publications to all subscribers in the right order.

Example

let ps = pubsub()
ps.subscribe(log)
ps.publish('It works!') // log('It works!')

mapRecurse(array, predicate) ⇒ array
Make a function mapRecurse that performs a transformation for each element of a given array, recursively

Param	Type
array	array
predicate	function
Example

mapRecurse([1, 2, 3, 4], (x) => x * 2) // [ 2, 4, 6, 8 ]

filterRecurse(array, predicate) ⇒ array
Make a function filterRecurse that takes in an array and a predicate function and returns a new array by filtering out all items using the predicate, recursively.

Param	Type
array	array
predicate	function
Example

filterRecurse([1, 2, 3, 4], (x) => x % 2 === 0) // [ 2, 4 ]