import React from 'react'
import Footer from '../components/todo/Footer'
import AddTodo from '../components/todo/AddTodo'
import VisibleTodoList from '../components/todo/VisibleTodoList'

const ReduxExample = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default ReduxExample