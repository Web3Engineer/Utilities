const l = console.log;

l(/^[0-9]+$/.test("12345")); // true (contains only digits)
l(/^[0-9]+$/.test("a12!!")); // false (contains non-digit characters)
l(/^[0-9]+$/.test("12 34")); // false (contains whitespace)

l(/^[0-9]$/.test("3")); // true (contains only one digit)
l(/^[0-9]$/.test("33")); // false (contains two digits)

l(/^[A-Za-z]+$/.test("SomeText")); // true (contains only letters)
l(/^[A-Za-z]+$/.test("1Some!!!")); // false (contains non-letter characters)
l(/^[A-Za-z]+$/.test("Some Text")); // false (contains whitespace)

l(/^(Chicken|Cow|Cat)$/.test("Chicken")); // true (contains 'Chicken')
l(/^(Chicken|Cow|Cat)+$/.test("Chicken", "Cat")); // true (contains 'Chicken' or 'Cow', or 'Cat')

l("my string here".includes("here")); // Output: true
l("my string here".includes("chicken")); // Output: false
