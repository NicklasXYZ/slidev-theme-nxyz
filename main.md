---
theme: "./"
layout: "cover"
colorSchema: "light"
fonts:
  sans: "Ubuntu"
  serif: "Kreon"
  mono: "Ubunto Monospace"
aspectRatio: "16/9"
highlighter: "prism"
presenter: true
slideTitle: "NXYZ Theme"
slideSubtitle: "Example Slides"
presentationID: "Lecture 1, Week X"
author: "Name N. Nameson"
university: "University of XYZ"
department: "Department of XYZ"
coverImagePath: "../img/building.png"
barBottomText: ""
---

<!-- Cover slide: Keep empty -->

---
layout: "default"
slideTitle: "One-Column Slide"  
slideSubtitle: "With a List"
---

A simple one-column slide with a list:

- Item 1
- Item 2
- Item 3
- Item 4
- Item 5
- Item 6
- Item 7


---
layout: "default"
slideTitle: "One-Column Slide"
slideSubtitle: "With Nested Lists" 
---

A simple one-column slide with nested-lists:

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2
    - Item 2.2.1
    - Item 2.2.2

---
layout: "default"
slideTitle: "Two-Column Slide"
slideSubtitle: "With a List & Image"
---

::left::

Here is a another list:

- Item 8
- Item 9
- Item 10
- Item 11
- Item 12
- Item 13
- Item 14


::right::

<!-- Image -->
![street](/img/street.png)

<!-- Image caption  -->
<div class="text-center">
  Here is an image of a street
</div>

---
layout: default
slideTitle: One-Column Slide  
slideSubtitle: With Some Blocks
---

<Block title="Black Block" color="black">

  This is an example of a _Black Block_ containing some plain text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices nunc eu condimentum tristique. Integer scelerisque metus eget interdum varius. Sed vulputate consequat orci tincidunt maximus. 

</Block>

<Block class="mt-8" title="Green Block" color="green">

  This is an example of a _Green Block_ containing a list:

  - Item 15
  - Item 16
  - Item 17

</Block>

---
layout: "default"
slideTitle: "One-Column Slide"  
slideSubtitle: "With Some Code"
---

Here is an example of some python `code`:

```python
keys_list = ['A', 'B', 'C']
values_list = ['blue', 'red', 'bold']

# Create a dictionary from 'keys_list' and 'values_list'
dict_method_2 = {key:value for key, value in zip(keys_list, values_list)}
```

Here is another examples of some python `code`:
```python
dicts_lists = [{"Name": "James", "Age": 20},  {"Name": "May", "Age": 14}, {"Name": "Katy", "Age": 23}]

# Sort the dictionary according to a persons age
dicts_lists.sort(key=lambda item: item.get("Age"))
```

---
layout: "default"
slideTitle: "Two-Column Slide"  
slideSubtitle: "With Some Blocks"
---

::left::

<Block title="Orange Block" color="orange">

  This is an example of an _Orange Block_ containing some maths:

  $$
  \begin{align*}
    2x + 3y  &= 6 \\
  \end{align*}
  $$

</Block>

<Block class="mt-8" title="Yellow Block" color="yellow">

  This is an example of an _Yellow Block_ containing some maths:

  $$
  \begin{align*}
    2x + 3y  &= 6 \\
    3x + 4y  &= 8 \\
  \end{align*}
  $$
</Block>

::right::

<Block title="Blue Block" color="blue">
  
  This is an example of a _Blue Block_ containing some maths:

  $$
  \begin{align*}
    3x + 4y  &= 8 \\
  \end{align*}
  $$
</Block>

<Block class="mt-8" title="Red Block" color="red">
  
  This is a _Red Block_ containing some code:

  ```python
  # This is a dictionary:
  simple_dict = { "Name": "Bob", "Age": 20}
  simple_dict = { "Name": "Bob", "Age": 20}
  ```
</Block>


---
layout: "default"
slideTitle: "Two-Column Slide"  
slideSubtitle: "With Some Mathematics"
---

::left::

The code:
```latex
$$
\begin{align*}
  \prod_{i=1}^{n} i
\end{align*}
$$
```

Produces:

$$
\begin{align*}
  \prod_{i=1}^{n} i
\end{align*}
$$

::right::

The code:
```latex
$$
\begin{align*}
  \sum_{i = 0}^{\infty} x^i
\end{align*}
$$
```

Produces:
$$
\begin{align*}
  \sum_{i = 0}^{\infty} x^i
\end{align*}
$$


---
layout: "default"
slideTitle: "Two-Column Slide" 
slideSubtitle: "With Some More Mathematics"
---

::left::

The code:
```latex
$$
\begin{align*}
  2x + 3y &= 6 \\
  3x + 4y &= 8 \\
  4x + 5y &= 9
\end{align*}
$$
```

Produces:

$$
\begin{align*}
  2x + 3y &= 6 \\
  3x + 4y &= 8 \\
  4x + 5y &= 9
\end{align*}
$$

::right::

The code:
```latex
$$
\begin{align*}
  2x + 3y &= 6, & a = 1 \\
  3x + 4y &= 8, & b = 2 \\
  4x + 5y &= 9, & c = 3
\end{align*}
$$
```

Produces:

$$
\begin{align*}
  2x + 3y &= 6, & a = 1 \\
  3x + 4y &= 8, & b = 2 \\
  4x + 5y &= 9, & c = 3
\end{align*}
$$

---
layout: "default"
slideTitle: "One-Column"  
slideSubtitle: "With Image + Long Paragraph"
---


![street](/img/building.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam arcu dignissim augue dictum, vitae pulvinar massa posuere. Aliquam erat volutpat. Pellentesque finibus dui in magna vulputate, nec iaculis felis scelerisque. Duis ut laoreet nisl, vitae porta nulla. Nullam nunc tellus, porta in dictum a, ullamcorper sit amet nunc.

---
layout: "default"
slideTitle: "One-Column Slide"  
slideSubtitle: "With a Table"
---

Here is a nice table:

|                 | Column 2      | Column 3   | Column 4 |
| --------------- |--------------:| ----------:|---------:|
| Row 1           | A             | $1.600,00  | €1.470,43|
| Row 2           | B             |   $12,00   | €11,03   |
| Row 3           | C             |    $1,00   | €2,76    |




---
layout: "default"
slideTitle: "Top, Three-Column, Bottom Slide" 
slideSubtitle: "With Some More Mathematics"
---

The two systems of linear equations 

<div/>

::left::
$$
\begin{align*}
2x_1 +           x_2 &= 2 \\
3x_1 + \phantom{x_2} &= 2
\end{align*}
$$

::middle::

<div class="my-4"/>

and

::right::
$$
\begin{align*}
x_1 + x_2 &= 2 \\
      x_2 &= 2
\end{align*}
$$

::bottom::

are equivalent because both systems have the unique solution: $x_1 = 1$, $x_2 = 0$.