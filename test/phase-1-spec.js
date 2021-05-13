const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz} = require("../problems/phase-1");

describe("isFive(num)", () => { 
  it("should return true if the num is 5 otherwise false", () => {
    //Arrange
    let expected = true
    //Act
    // let input = 5
    let actual = isFive(5)
    //Assert
    expect(actual).to.equal(expected)
  });
  it("should return false if the num is not equal to 5", () => {
    //Arrange
    let expected = false
    //Act
    let actual = isFive(6)
    //Assert
    expect(actual).to.equal(expected)
  })
});

describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    let expected = true
    //Act
    let actual = isOdd(13)

    //Assert
    expect(actual).to.equal(expected)

  });
  it("should return false if the num is even", () => {
    //Arrange
    let expected = false
    
    //Act
    let actual = isOdd(8)
    //Assert
    expect(actual).to.equal(expected)

  });

  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let expected = Error
    
    //Act
    let actual = () => {isOdd('Serge')}
    //Assert
    expect(actual).to.throw(expected)
    
  });
});

describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange
      let expected = [9, 10, 11, 12, 13]
      //Act
      let actual = myRange(9, 13)
      // Assert
      expect(actual).to.eql(expected);

    });
  });

  context("if step is provided", () => {
    it("should return the correct array", () => {
     //Arrange
      let expected = [9, 11, 13]
      //Act
      let actual = myRange(9, 13, 2)
      // Assert
      expect(actual).to.eql(expected);
    });
  });

  it("should throw an error if num is not type of Number", () => {
    let expected = Error
    
    //Act
    let actual = () => {myRange('S')}
    //Assert
    expect(actual).to.throw(expected)
  });
});

describe('fizzBuzz(max)', ()=> {
  it('should throw a RangeError if max < 0', ()=> {
    //Arrange
    let expected = RangeError
    
    //Act
    let actual = () => {fizzBuzz(-13)}
    
    //Assert
    expect(actual).to.throw(expected)

  })
  it('should throw a TypeError if max is not a number', ()=> {
   let expected = TypeError
    
    //Act
    let actual = () => {fizzBuzz('S')}
    
    //Assert
    expect(actual).to.throw(expected)
    ;

  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', ()=> {
    //Arrange
    let expected = [3, 5, 6, 9, 10, 12, 18, 20, 21, 24, 25, 27, 33, 35]
    
    //Act
    let actual = fizzBuzz(36)
    //Assert
    expect(actual).to.eql(expected)

  })
})
