import TaskManager from '../TaskManager/TaskManger';
import TaskList from '../../components/TaskList/TaskList';
import React, { useState, useEffect } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Src from '../../index';
import './App.css';


const App = () => {

  const [state, setState] = useState({
    items: [],
    isDark: false
  });


  const addItem = (item) => {
    setState({
      items: [item, ...state.items]
    });
  }



  const toggleComplete = (id) => {
    setState({
      items: state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isChecked: !item.isChecked,
          }
        } else {
          return item;
        }
      })
    })
  }

  const handleRemove = (id) => {
    const targetlist = [...state.items].filter(item => item.id !== id)
    setState({ items: targetlist })
  }


  const handleUpdate = (id) => {
    const targetlist = [...state.items].find(item => item.id === id);
    alert(targetlist);
  }

  const handleDark = () => {
    setState({ isDark: true })
  }

  const handleWhite = () => {
    setState({ isDark: false })
  }

  return (
    <div className="background" style={{ backgroundColor: state.isDark ? 'rgb(21,21,21)' : 'white' }} >
      <div className="container">
        <div className="top-bar" style={{ display: 'flex' }}>
          <h1 className="title" style={{ color: state.isDark ? 'white' : 'black' }}>Welcome Back !</h1>
          {/* {!this.state.isDark && <a onClick={this.handleDark} href="#" className="dark-mode">
              <BsFillMoonFill />
            </a>}
            {this.state.isDark && <a onClick={this.handleWhite} href="#" className="dark-mode">
              <BsFillSunFill style={{ color: 'white' }} />
            </a>} */}
        </div>
        <TaskManager items={state.items} isDark={state.isDark} onSubmit={addItem} />
        <TaskList isDark={state.isDark} handleRemove={handleRemove} handleUpdate={handleUpdate} toggleComplete={toggleComplete} items={state.items} />
      </div>
    </div>
  );
}


export default App;
