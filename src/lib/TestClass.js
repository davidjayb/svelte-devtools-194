class TestClass {
  /**
   * @param {any} obj
   */
  constructor(obj) {
    obj && Object.assign(this, obj);
  }

  get className() {
    return "class get prop";
  }

  getClassName() {
    return "class function";
  }
}

class TestSubClass extends TestClass {
  get subClassProp() {
    return "subclass get prop";
  }

  subClassFunction() {
    return "subclass function";
  }
}

export { TestClass, TestSubClass };
