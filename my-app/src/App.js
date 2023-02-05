import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import CreateToDo from './components/CreateToDo';
import Footer from './components/Footer';

import { getAllBooks, createBook } from './services/BookService';
import { getAllTodos, createToDo } from './services/ToDoService';
import DisplayToDo from './components/DisplayToDo';
import ToDoTable from './components/ToDoTable';

function App () {

  const [bookShelf, setBookShelf] = useState({});
  const [todo, setTodo] = useState({});
  const [books, setBooks] = useState([]);
  const [toDos, setToDos] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [numberOfTodos, setnumberOfTodos] = useState(0);

  const handleSubmit = () => {
      createBook(bookShelf)
        .then(() => {
          setNumberBooks(numberOfBooks+1);
      });
  }

  const handleToDoSubmit = () => {
    createToDo(todo).then(() => {
      setnumberOfTodos(numberOfTodos+1);
    })
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const getAllTodo = () => {
    getAllTodos().then(data => {
      console.log(data);
      setToDos(data);
      setnumberOfTodos(data.length);
    });
  }

  const handleOnChangeForm = (e) => {
      let inputData = bookShelf;
      if (e.target.name === 'book') {
        bookShelf.book = e.target.value;
      } else if (e.target.name === 'category') {
        bookShelf.category = e.target.value;
      } else if (e.target.name === 'author') {
        bookShelf.author = e.target.value;
      }
      setBookShelf(inputData);
  }

  const handleToDoForm =  (e) => {
    console.log(e.target.checked);
    let inputData = todo;
    if (e.target.name === 'todo') {
      todo.todo = e.target.value;
    } else if (e.target.name === 'category') {
      todo.category = e.target.value;
    } else if (e.target.name === 'isComplete') {
      todo.isComplete = e.target.checked;
    }
    setTodo(inputData);
  }

  
  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook 
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <DisplayBoard 
          numberOfBooks={numberOfBooks} 
          getAllBook={getAllBook} 
        />
        <BookTable books={books} />
        <CreateToDo
          todo={todo}
          onChangeForm={handleToDoForm}
          handleSubmit={handleToDoSubmit}
        />
        <DisplayToDo
          numberOfTodos={numberOfTodos}
          getAllTodo={getAllTodo}
        />
        <ToDoTable toDos={toDos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
