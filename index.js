// Создать класс RangeValidator, со следующими свойствами:
// ■ from (number);
// ■ to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число
//в указанный диапазон. Метод возвращает значение, если значение валидно. И кинет ошибку, если нет.
/**
 * Abstract class
 */
class NumberValidator {
  /**
   * Prohibits the creation of objects.
   * @throws {Error} Throws Error when trying to create an object.
   */
  constructor() {
    if (this.constructor === NumberValidator) {
      throw new Error("Object of Abstract Class cannot be created");
    }
  }
  /**
 * Checks if value is a number.
 * @param {number} value Ther value is only number.
 * @returns {boolean} Returns true, if value is a number.
 * @throws {TypeError} Throws TypeError if value is not a number.
 */
  static isNumber(value) {
    if (!Number.isFinite(value)) {
      throw new TypeError(`${value} is not a number!`)
    }
    return true;
  }
}

/**Class representing a range validator for numbers*/
class RangeValidator {
  #from
  #to
  /**
   * Create a range validator.
   * @param {number} from - The range begin.
   * @param {number} to  - The range end.
   */
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(from) {
    NumberValidator.isNumber(from);
    this.#from = from;
  }
  get from() {
    return this.#from;
  }
  set to(to) {
    NumberValidator.isNumber(to);
    this.#to = to;
  }
  get to() {
    return this.#to;
  }
  get range() {
    return [this.#from, this.#to];
  }
  /**
   * Checks if a number is in a range.
   * @param {number} number 
   * @returns {boolean} Returns true if the number is in the specified range.
   * @throws {RangeError} Throws an error if the number is not in the specified range.
   */
  validate(number) {
    NumberValidator.isNumber(number);
    if (this.#from < this.#to && number > this.#from && number < this.#to) {
      return true;
    }
    if(this.#from > this.#to && number < this.#from && number > this.#to){
      return true;
    }
    throw RangeError(`The number ${number} is not in the range between ${this.#from} and ${this.#to}`);
  }
}

// Создать класс Figure3D
// Создать классы-потомки для Шара, Цилиндра и Куба.
// У всех классов должен быть метод для рассчета объема.

/**
 * Abstract class
 */
class Figure3D {
  /**
 * Prohibits the creation of objects.
 * @throws {Error} Throws Error when trying to create an object.
 */
  constructor(color) {
    this.color = color;
    if (this.constructor === Figure3D) {
      throw new Error("Object of Abstract Class cannot be created");
    }
  }
  set color(color) {
    this._color = color;
  }
  get color() {
    return this._color;
  }
  /**
   * Abstract method
   */
  calcVolume() {
    throw Error('This method must be implemented');
  }
}
class Sphere extends Figure3D {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  set radius(radius) {
    NumberValidator.isNumber(radius);
    this._radius = radius;
  }
  get radius() {
    return this.radius;
  }
  calcVolume() {
    return 4 / 3 * Math.PI * this._radius ** 3;
  }
}
class Cylinder extends Figure3D {
  constructor(color, square, height) {
    super(color);
    this.square = square;
    this.height = height;
  }
  set square(square) {
    NumberValidator.isNumber(square);
    this._square = square;
  }
  get square() {
    return this.square;
  }
  set height(height) {
    NumberValidator.isNumber(height);
    this._height = height;
  }
  get height() {
    return this.height;
  }
  calcVolume() {
    return this._square * this._height;
  }
}
class Cube extends Figure3D {
  constructor(color, height) {
    super(color);
    this.height = height;
  }
  set height(height) {
    NumberValidator.isNumber(height);
    this._height = height;
  }
  get height() {
    return this.height;
  }
  calcVolume() {
    return this._height ** 3;
  }
}
