{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}

    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightValue;
    }
  }

  const ehtier = new SimpleEither(4, 5);
  ehtier.left(); // 4
  ehtier.right(); // 5
  const best = new SimpleEither({ name: "ellie" }, "hello");
}
