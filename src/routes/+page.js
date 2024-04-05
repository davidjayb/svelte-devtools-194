import { TestClass } from "$lib/TestClass.js";

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ url, fetch }) {
  const examplePropObject = {
    someProperty: "test",
    get className() {
      return "some class";
    },
  };
  const examplePropClass = new TestClass({
    someProperty: "test",
  });

  const exampleFunctionObject = {
    someProperty: "test",
    getClassName: () => "some class",
  };

  const exampleFunctionClass = new TestClass({
    someProperty: "test",
  });

  const examplePropObjectArray = [examplePropObject];
  const examplePropClassArray = [examplePropClass];
  return {
    examplePropObject,
    examplePropClass,
    exampleFunctionObject,
    exampleFunctionClass,
    examplePropObjectArray,
    examplePropClassArray,
  };
}
