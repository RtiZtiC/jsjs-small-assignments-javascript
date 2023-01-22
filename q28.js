for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    let c=0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        c++;
      }
    }
    if (c>2)
    {
        isPrime=false;
    }
    if (isPrime) {
      console.log(i);
    }
  }
  