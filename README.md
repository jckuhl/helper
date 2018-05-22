# Helper:

Type in a JavaScript native keyword and get a small guide on how to use it

# Install:

```
npm install -g pb-helper
```

_Note: package is still in development and unavailable at NPM at this time.  Readme will be updated to reflect when this is available_

# Use:

Just enter "pb-helper _keyword_" and it'll display information about that key word, if found.

```
pb-helper filter
```

Outputs:

```
*****  filter  *****


Use: Iterates each element of an array through a conditional test, creating a new array of elements that pass the test
Example: myArray = [5,7,10,12];
myArray = myArray.filter(x=> x < 10);
myArray === [5,7]
Parameters:  Callback (Element, [Index, Array (optional)]), [this Arg (optional)]
Returns:  New array of elements
Is on the following prototypes:  Array
More information:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


**********