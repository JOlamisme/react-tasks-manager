import TaskManager from '../TaskManager/TaskManger';
import TaskList from '../../components/TaskList/TaskList';
import React, { useState, useEffect, useRef } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Src from '../../index';
import './App.css';
import useLocalStorage from '../useLocalStorage';
import { API_GET_DATA } from '../../global/constants';


async function fetchData(setItems) {
  const res = await fetch(API_GET_DATA)
  const { items } = await res.json()
  setItems(items)
};

async function fetchSetData(items) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ items })
  })
};

const App = () => {
  const [items, setItems] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current) {
      return
    }
    fetchSetData(items)
      .then(items => submittingStatus.current = false)
  }, [items])

  useEffect(() => {
    fetchData(setItems)
  }, [])

  const addItem = (item) => {
    submittingStatus.current = true;
    setItems(
      [item, ...items]
    );
  }



  const toggleComplete = (id) => {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isChecked: !item.isChecked
          }
        } else {
          return item;
        }
      })
    )
  }

  const handleRemove = (id) => {
    submittingStatus.current = true;
    const targetlist = [...items].filter(item => item.id !== id)
    setItems(targetlist)
  }


  const handleUpdate = (id) => {
    const targetlist = [...items].find(item => item.id === id);
    alert(targetlist);
  }

  const handleDark = () => {
    setIsDark(true)
  }

  const handleWhite = () => {
    setIsDark(false)
  }

  return (
    <div className="background" style={{ backgroundColor: isDark ? 'rgb(21,21,21)' : 'white' }} >
      <div className="container">
        <div className="top-bar" style={{ display: 'flex' }}>
          <h1 className="title" style={{ color: isDark ? 'white' : 'black' }}>Welcome Back !</h1>
          {/* {!this.state.isDark && <a onClick={this.handleDark} href="#" className="dark-mode">
              <BsFillMoonFill />
            </a>}
            {this.state.isDark && <a onClick={this.handleWhite} href="#" className="dark-mode">
              <BsFillSunFill style={{ color: 'white' }} />
            </a>} */}
        </div>
        <TaskManager
          items={items}
          isDark={isDark}
          onSubmit={addItem}
          submittingStatus={submittingStatus}
        />
        <TaskList
          isDark={isDark}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
          toggleComplete={toggleComplete}
          items={items}
          submittingStatus={submittingStatus}
        />
      </div>
    </div>
  );
};


export default App;
