<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `ReferenceError: greetign is not defined`

<i>There is a typographical error in the variable name. Instead of greeting, it is written as greetign, which means greetign is not defined as a variable. Therefore, when you try to log greetign, it will result in a ReferenceError because the variable greetign is not declared before it is used.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: `"12"`

<i>In JavaScript, when we use the + operator with two operands and one of them is a string, JavaScript performs concatenation instead of arithmetic addition. In this case, the 1 is a number, and the "2" is a string. When we add them together with 1 + "2", JavaScript converts the number 1 to a string and then concatenates the two strings, resulting in "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `['🍕', '🍫', '🥑', '🍔']`

<i>Here, "info.favoriteFood" is initially assigned the value "🍕" which is the first element of the food array. However, later in the code, it is reassigned the value "🍝". This reassignment does not affect the food array, so when you log food, it remains ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `Hi there, undefined`

<i>In the "sayHi" function, there is a parameter name that is expected to be passed when the function is called. However, when you call sayHi() without providing an argument, the name parameter inside the function is undefined. Therefore, the function returns "Hi there, undefined", where undefined represents the missing argument.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: 2

<i>The forEach method iterates over the nums array elements, and for each element (num), it checks if num is a truthy value (in JavaScript, all numbers except 0 are considered truthy). When num is 0, the condition is not met, so count remains unchanged. However, for the other three elements (1, 2, and 3), the condition is true, and count is incremented by 1 each time. Therefore, the final value of count is 2.</i>

</p>
</details>
