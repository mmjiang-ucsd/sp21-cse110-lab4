**1a**
1. line 9 prints "values added: 20"
2. line 13 prints "values added: 20" as well
3. line 9 prints "values added: 20"
4. line 13 returns an error since using "let" means result only exists within the if block it was defined in.
5. line 9 returns an error since the previous line tries to change result, but result cannot be reassigned after it was assigned to be 0.
6. Similar to 5, but we wouldn't even be able to access result since it only exists within the if block.

**1b**
1. line 12 will print "3", which is just the number of times the for loop iterated (and it looped 3 times because we had 3 things in the prices array passed in). We can print i because it was defined using var, meaning it can be accessed anywhere within the function it was defined in.
2. line 13 will print "150". Since discountedPrice has function scope, it persists throughout the function, and since the last price processed was 300 * (1-0.5), we print 150.
3. Similarly, line 14 will print "150". finalPrice has function scope, so we can access it anywhere in the function. The last thing to be processed was Math.round(150 * 100) / 100, which is how we got 150 again.
4. The function will return an array/list of the prices after they've been discounted: [50, 100, 150], since each price in the prices array will be discounted and pushed into this discounted array.
5. line 12 will return an error since i only exists within the scope of the for loop, so we can't print it once we exit the loop.
6. Again, line 13 will cause an error because we try to print something that no longer exists. discountedPrice is only within the scope of the for loop.
7. Line 14 will print "150". finalPrice was defined outside the for loop, so it exists within the scope of the entire function. So we print the last computation performed, which was Math.round(150 * 100) / 100 = 150.
8. The function will return the same thing as before, [50, 100, 150]. The original discounted array may disappear after leaving the function, but since we return the array, we can save/utilize outside of the function.
9. Line 11 will still cause an error since i no longer exists once we exit the for loop.
10. Line 12 will print "3", which makes sense since it is the length of the prices array. This length variable was declared using const before the for loop, so it exists within the scope of the function.
11. The function will return [50, 100, 150] just fine. This works because we're technically not re-declaring the array, we're simply adding to the array that the const variable is pointing to.
12a. student.name
12b. student['Grad Year']
12c. student.greeting()
12d. student['Favorite Teacher'].name
12e. student.courseLoad[0]
13a. output is '32' since JS will interpret this as a string value + a number value, and since + is also used for string concatenation, it will see that first string and try to concatenate the rest of the values as strings, so the 2 gets converted to a string and is concatenated with the '3'.
13b. output is 1. Strings can't be subtracted, so JS will convert the '3' to a number value and subtract 2 from 3.
13c. output is 3, since JS sees a number first and will convert the null to a 0 and add the two.
13d. output is '3null', since JS sees the string and converts null to "null" and then does string concatenation.
13e. output is 4, since JS will convert true to 1 and add it with 3 to get 4.
13f. output is 0, since JS will map true to 1, null to 0, and do number addition.
13g. output is '3undefined', since JS sees the string and converts undefined to a string and concatenates them.
13h. output is NaN, since JS will try to do subtraction (and you can't subtract strings), but undefined is mapped to NaN, which when worked with mathematically will return NaN.
14a. output is true. Since the two values are different types, JS will convert them to numbers, so we get 2 > 1, which is true.
14b. output is false. Here, JS does string comparison using dictionary order. We compare each character, and since '2' is greater than '1' in dictionary order, we get false.
14c. output is true. The '2' is converted to a number, and 2 == 2.
14d. output is false. === will not do type conversion, so a number and string are not equal.
14e. output is false. True is converted to 1, and 1 != 2.
14f. output is true. When converting to Boolean, any value other than 0 is converted to true. So we get true === true.
15. == is an equality comparison that will perform type conversion, whereas === is an equality comparison that will not automatically try to convert datatypes. So if the two datatypes are different, then === immediately fails.
17. We end up with an array containing [2, 4, 6]. We pass in an array [1, 2, 3], and in the modifyArray function we push to newArr the result of applying the function doSomething to each item in our original array, which will just multiply each item by 2.
18. The console will print "1 4 3 2", with a new line in between each number. This is because the 1 gets printed first, the 2 is set to wait 1000ms before printing, and the 3 is set to wait 0ms, which makes it wait until the next event cycle (or the shortest possible delay), and so 4 has the chance to get printed first before it's time to print 3.