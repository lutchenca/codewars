# CodeWars Javascript Solutions

---

## Return Negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

---

### Solution 01

```

function makeNegative(num) {
  return num > 0 ? num * -1 : num;
}

```

### Solution 02

```

function makeNegative(num) {
  if(num <= 0){
    return num;
  }
  else
     return num *=-1
}

```

---

[See on CodeWars.com](https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript)
