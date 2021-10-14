# Part 2

1. 3 will be printed because i is declared with var, so you can access it anywhere inside the function.
2. 150 will be printed because discountedPrice can be acessed anyhwere inside the function.
3. 150 will be printed because finalPrice is accessible from anywhere inside the function.
4. The function will return a list of discounted prices of the items rounded to 2 decimal places. [50,100,150] is returned.
5. This will error because i is only accessible inside the for loop.
6. This will error because discountedPrice is only accessible inside the for loop.
7. 150 will be printed because finalPrice is accesible inside the scope of the function.
8. [50,100,150] will be return since the discounted array is accessible inside the function.
9. This will error because i is only accesible inside the for loop. 
10. 3 will be printed because length is accessible inside the function scope. 
11. This will return [50,100,150] because const arrays are a reference to the array. Thus the array itself can be changed. 
12. A. student.name
    B. student["grad year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. A. '32' , the integer 2 gets casted to a string and does string concatenation
    B. 1, the string is casted to an interger and it does subtraction
    C. 3, null is treated like 0 
    D. '3null', null is casted to a string and does concatenation
    E. 4, true has the value 1 so 1+3=4
    F. 3, false has the value 0 so 0+3=3
    G. undefined is casted to a string and it does string concatenation
    H. NaN, 3 is casted to integer and subtracting undefined gives NaN
14. A. true, '2' becomes the number 2
    B. false, string comparison is by dictionary order
    C. true , '2' becomes the number 2
    D. false, === checks for same type and value, number and string are not same type
    E. false, true is represented by 1 so 1!=2
    F. true, Boolean(2) evaulates to true, thus true === true
15. === checks that the two variables are same type and value. == does a conversion of one of the variables if the types are mismatched before comparing the value
17. The returned value will be an array [2,4,6]. In modifyArray() for each value in the input array, the callback will get called to multiply that value by 2 and add it to the new array that eventually gets returned.
19. 1
    4
    3
    2
    Because 1 and 4 are printed instantly. 3 is printed with a delay of 0. And 2 is printed last with a delay of 1 second.
