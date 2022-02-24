const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  
  test('[2] returns a copy, leaving the original object intact', () => {

    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  })

  test('[4] the object returned is the exact same one we passed in', () => {
    let originalObj = { foo: '  foo  ', bar: ' bar ', baz: '   baz   ' }
    let trimmedObj = utils.trimPropertiesMutation(originalObj);
    expect(trimmedObj).toStrictEqual({ foo: 'foo', bar: 'bar', baz: 'baz' });
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
  const integers = [
    { integer: 1 },
    { integer: 2 },
    { integer: 3 },
    { integer: 4 },
    { integer: 5 }
  ]
  let largestInteger = utils.findLargestInteger(integers);
  expect(largestInteger).toEqual(5);
})

describe('[Exercise 4] Counter', () => {
  let counter;
  
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  });

  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    counter.countDown();
    expect(counter.initialNumber).toBe(3);
  })
  
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    for (let i = 0; i < 2; i++) {
      counter.countDown();
    }
    expect(counter.initialNumber).toBe(2);
  })

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for (let i = 0; i < 4; i++) {
      counter.countDown();
    }
    expect(counter.initialNumber).toBe(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    seasons.next();
    expect(seasons.currentSeason).toBe('summer');
  })

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    for (let i = 0; i < 2; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toBe('fall');
  })

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 0; i < 3; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toBe('winter');
  })

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 4; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toBe('spring');
  })

  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 5; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toBe('summer');
  })

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 40; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toBe('spring');
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })

  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(100);
    expect(focus.odometer).toEqual(100);
  })
  
  test('[16] driving the car uses gas', () => {
    focus.drive(120);
    expect(focus.odometer).toEqual(120);
    expect(focus.tank).toEqual(16);
  })

  test('[17] refueling allows to keep driving', () => {
    focus.drive(300);
    expect(focus.odometer).toEqual(300);
    expect(focus.tank).toEqual(10);
    focus.refuel(12);
    expect(focus.tank).toEqual(20);
    focus.drive(600);
    expect(focus.odometer).toEqual(900);
  })

  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.tank).toEqual(20);
    focus.refuel(100);
    expect(focus.tank).toEqual(20);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    const evenNumber = utils.isEvenNumberAsync(2);
    expect(evenNumber).toBe(true);
  })

  test('[20] resolves false if passed an odd number', () => {
    const evenNumber = utils.isEvenNumberAsync(3);
    expect(evenNumber).toBe(false);
  })
})
