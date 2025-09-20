interface lenghty {
  length: number;
}

//  extends

// ? T extends lenghty means that T must be an object with a length property
function getLenght<T extends lenghty>(obj: T) {
  console.log(obj.length);
  return obj.length;
}

getLenght("hello");
getLenght([1, 2, 3]);

// ? keyof T means that T must be an object with a key of type T

const info = {
  name: "John",
  age: 30,
  city: "New York",
};

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

console.log(getProperty(info, "name"));
console.log(getProperty(info, "age"));
console.log(getProperty(info, "city"));

// generic Class

class Stack<T> {
  private data: T[] = [];
  constructor(private size: number) {}
  push(item: T) {
    if (this.data.length >= this.size) {
      throw new Error("Stack is full");
    }
    this.data.push(item);
  }

  pop(): T {
    if (this.data.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.data.pop() as T;
  }
}

const stringStack = new Stack<string>(5);

stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop());
