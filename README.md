# Timer on magento2

## parameters
`selector {String}`

Select the container to put timer in.

`endTime {Object}`

The timer will count down to this endTime.
`hour`, `min`, `sec` is option.
Default : 0

`showEndTime {Boolean}`
Allow end time show up.
Default : false

```
{
    year:2022,
    month:7,
    date:5
    [,hour:18,
    min:0,
    sec:0]
}
```

## example

1. include block in the page
![example1](doc/img/example_01.png)
![example2](doc/img/example_02.png)

2. call function
```javascript
let input = {year:2022,month:7,date:5,hr:18,min:0,sec:0};
let input2 = {year:2022,month:7,date:20};

startTimer({
    selector:'.peixuan-timer',
    finalTime: input,
    showEndTime: true
})
startTimer({
    selector:'.peixuan-timer2',
    finalTime: input2,
    showEndTime: false
})
```

