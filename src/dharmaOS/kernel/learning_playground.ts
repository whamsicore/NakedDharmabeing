
class MyClass {
  method1() {
    console.log('Executing method1');
  }

  method2() {
    console.log('Executing method2');
  }
}

function withMiddleware(target:any) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      const originalMethod = target[prop];
      if (typeof originalMethod === 'function') {
        return function(this:any, ...args:any[]) {
          console.log(`Middleware before ${String(prop)}`);
          const result = originalMethod.apply(this, args);
          console.log(`Middleware after ${String(prop)}`);
          return result;
        };
      }
      return originalMethod;
    }
  });
}

const myClassWithMiddleware = withMiddleware(new MyClass());
myClassWithMiddleware.method1(); // Middleware before method1 -> Executing method1 -> Middleware after method1
myClassWithMiddleware.method2(); // Middleware before method2 -> Executing method2 -> Middleware after method2