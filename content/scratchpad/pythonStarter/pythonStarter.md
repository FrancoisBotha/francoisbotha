# Python Quick Start Reference 

This post is a quick reference and introduction to Python.

## Variables
Variable names must start with a letter or an underscore. There are 4 kinds of numbers: integers, floats, complex numbers and Booleans.

Floating point division:
```python
x = 9
y = 4
z = x / y
# = 2.25
```

Integer division:
```python
z = x // y
# z = 2
```

Strings:
```python
x = """Starting and ending a string with triple " characters
permits embedded newlines, and the use of " and ' without
backslashes"""
```
#### None
-> Like null, i.e. placeholder for some future value

## Data Structures
### Lists
Similar to arrays. Automatically grows as required. Can mix up date types in it.

```python
x = [1, 2, 3]
```

Example:
```python
my_list = ["apple", "banana", "cherry", "date"]

for item in my_list:
    print(item)
```

```python
my_list[0]
# 'apple'

my_list[-1]
# 'date'

my_list[1:3]
# ['banana', 'cherry']

# Make a copy of a list
x = my_list[:]
# x = ['apple', 'banana', 'cherry', 'date']

# Add element at the end
my_list.append('pear')
# x = ['apple', 'banana', 'cherry', 'date', 'pear']

# Remove the first instance of an occurence
my_list.remove('banana')
my_list
['apple', 'cherry', 'date', 'pear']

# List membership
'apple' in my_list
# True

```
Sorting a list:

```python
my_list.sort()
```

Can  concatenate lists using + operator.

Two dimensional matrices:
```python
m = [[0, 1, 2], [10, 11, 12], [20, 21, 22]]
m[2][2]
# 22
```

Create a deep copy of a list
```python
original = [[0], 1]
shallow = original[:]
import copy
deep = copy.deepcopy(original)
```

#### Other
- len
- min 
- max
- index
- count
- sum

### Tuples
Similar to lists, but cannot be modified.
E.g.
```python
x = ('a', 'b', 'c')
```

### Sets
E.g.
```python
x = set([1, 2, 3, 1, 3, 5])
# x = {1, 2, 3, 5}
```

## Strings
Like arrays of characters, but imutable. Can be concatenated with '+' operator (but join operator is more efficient).

```python
x = "Goodbye\n"
x = x[:-1]
# x = 'Goodbye'

len("Goodbye")
# 7 

" ".join(["join", "puts", "spaces", "between", "elements"])
# 'join puts spaces between elements'

"".join(["Separated", "by", "nothing"])
# 'Separatedbynothing'
```

#### Other
- split
- strip, lstrip, rstrip 
- find
- index
- count
- startswith, endswith
- replace
- isdigit
- isalpha
- islower
- isupper
- upper
- lower
- title
- repr / str (converts an object to a string)

Can also convert to a list, manipulate and convert back:
```python
text = "Hello World"
wordList = list(text)
wordList.reverse()
text = "".join(wordList)
print(text)
# dlroW olleH
```

String interpolation:
```python
"%s is the %s of %s" % ("Ambrosia", "food", "the gods")
# 'Ambrosia is the food of the gods'

value = 42
message = f"The answer is {value}"
print(message)
# The answer is 42
```
Example of reading and cleaning an input file:
```python
with open("moby_01.txt") as infile, open("moby_01_clean.txt", "w") as
outfile:
    for line in infile:
        # make all one case
        cleaned_line = line.lower()
        # remove punctuation
        cleaned_line = cleaned_line.translate(punct)
        # split into words
        words = cleaned_line.split()
        cleaned_words = "\n".join(words)
        # write all words for line
        outfile.write(cleaned_words)
```

