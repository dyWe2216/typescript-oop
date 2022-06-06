{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time!!");
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time!!");
    }

    wortPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 X
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.wortPartTime();

  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);

  function getValue<T, K extends keyof T>(obj: T, key): T[K] {
    return obj[key];
  }

  const obj = {
    name: "ellie",
    age: 20,
  };

  console.log(getValue(obj, "name"));
}
