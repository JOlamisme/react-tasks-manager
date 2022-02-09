import React from 'react';
import handleChange from "../TaskManager/TaskManager";
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TaskManager from '../TaskManager';


// describe("TaskManager rendering specification", () => {
//     it('TaskManager is rendered', () => {
//         const component = renderer.create(
//             <TaskManager/>
//         );
//         const tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//     });
// });



test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TaskManager />, div);


    expect(div.querySelector("h2").textContent).toBe("New Task")
})

// test("convert array of country data objects to array of countries", () => {
//     const inputObject = {
//         name: "name", capital: "name",
//         name: "description", capital: "description"
//     }


//     //act
//     const actualValue = handleChange(inputObject)

//     //assertions
//     expect(actualValue).toBeDefined();
// })

// test('there is a new flavor idea', () => {
//     expect(handleSubmit()).toBeDefined();
// });