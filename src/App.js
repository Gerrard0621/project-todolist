import { useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import TodoItem from './components/TodoItem';

// 테스트를 위한 대량의 더미데이터 생성 및 반환을 위한 임시 함수 정의
const createDummyTodoList = function () {
  const dumyArray = [];
  for (let i = 1; i <= 20; i++) {
    dumyArray.push({ id: i, title: `해야할 일 : ${i}`, complete: false });
  }
  return dumyArray;
}


function App() {

  // 일정 목록을 저장하기 위한 배열 생성
  const dumyArray = [
    { id: 1, title: '리액트 기초 익히기', checked: false },
    { id: 2, title: '리액트 컴포넌트 스타일링하기', checked: false },
    { id: 3, title: '리액트 일정 관리 애플리케이션 구현', checked: false }
  ];

  // 일정 목록 배열을 state에 초기화 
  const [todoList, setTodoList] = useState(createDummyTodoList());

  // 일정 등록
  const createTodoFire = function(title) {
    // 새로운 일정 객체 생성 후 배열에 추가
    const todo = { id: App.todoId++, title: title, checked: false };
    // state에 설정
    setTodoList([...todoList, todo]);
  }
  
  //일정 삭제 
  
  const removeTodo = function (id) {
    const newTodo = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodo);
  }




  return (
    <TodoTemplate>
      <TodoInsert eventHandler={ createTodoFire} />
      <TodoList todoList={todoList} removeTodo={removeTodo} />
    </TodoTemplate>
  );
}

App.todoId = 4;

export default App;
