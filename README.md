# Slidev Theme - NXYZ

[![NPM version](https://img.shields.io/npm/v/slidev-theme-nxyz?color=F141A8&label=)](https://www.npmjs.com/package/slidev-theme-nxyz)

A minimalistic [sli.dev](https://sli.dev) theme.

## Layouts

The theme currently has a limited set of layouts:

- `cover`
- `default`

### Cover Layout

The cover layout is supposed to be used on the very first slide. Using the following settings: 

```text
---
theme: "nxyz"
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
coverImagePath: "./node_modules/slidev-theme-nxyz/img/building.png"
barBottomText: ""
---
```
The settings produce the following cover slide:


![cover](img/cover.png)

### Default Layout

The deafult layout is supposed to be used on all slides following the cover slide. For example, using the following settings and text for a slide:
```text
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
```

Then we get the following:

![cover](img/default1.png)

### Additional Examples

Some additional examples based on the  `main.md` file in this repo can be seen in the following:

![cover](main-export/001.png)
![cover](main-export/002.png)
![cover](main-export/003.png)
![cover](main-export/004.png)
![cover](main-export/005.png)
![cover](main-export/006.png)
![cover](main-export/007.png)
![cover](main-export/008.png)
![cover](main-export/009.png)
![cover](main-export/010.png)
