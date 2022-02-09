import TaskManager from "../TaskManager/TaskManager";
import handleChange from "../TaskManager";


test("convert array of country data objects to array of countries", ()=>{
    const inputObject = [
        {name: "name", capital: "name"},
        {name: "description", capital: "description"},
        ]
      const expectedValue = ["name","description"]
      
      //act
      const actualValue = handleChange(inputObject)
      
      //assertions
      expect(actualValue).toEqual(expectedValue)
})