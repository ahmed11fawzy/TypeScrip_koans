// ! // This is the exhaustive check.

/*  // ? this code to ensure all cases are handled in a switch statement
    

*/
type Shap = "circle" | "square" | "triangle";

const shapeChecker = (shape: Shap) => {
  switch (shape) {
    case "circle":
      return "3.14";
    case "square":
      return "4 sides";

    default:
      // This is the exhaustive check.
      // TypeScript will check if the `vehicle` type can be assigned to `never`.
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
};

console.log(shapeChecker("circle"));
console.log(shapeChecker("square"));
