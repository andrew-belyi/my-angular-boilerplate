---
title: 'merge'
date: '2020-01-01'
author: 'Max Koretskyi'
typora-root-url: ..\..\..\public
---
## About
This operator combines a number of observables streams and concurrently emits all values from every given input stream. As values from any combined sequence are produced, those values are emitted as part of the resulting sequence. Such process is often referred to as flattening in documentation.
The stream completes when all input streams complete and will throw an error if any of the streams throws an error. It will never complete if some of the input streams don't complete.
Use this operator if you're not concerned with the order of emissions and is simply interested in all values coming out from multiple combined streams as if they were produced by one stream.
## Diagram
In the diagram below you can see the `H` higher-order stream that produces two inner streams `A` and `B`. The `mergeAll` operator combines values from these two streams and then passes them through to the resulting sequence as they occur.
![mergeall diagram](/content/rxjs/merge.gif)
## Setup
```javascript
const a = stream('a', 200, 3, 'partial');
const b = stream('b', 200, 3, 'partial');
merge(a, b).subscribe(fullObserver('merge'));
// can also be used as an instance operator
a.pipe(merge(b)).subscribe(fullObserver('merge'));
```
## Editable demo
<iframe src="https://stackblitz.com/edit/combining-sequences-merge?embed=1" height="400" width="745"></iframe>
