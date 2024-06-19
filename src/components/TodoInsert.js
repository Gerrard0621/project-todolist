import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';
import { useState } from 'react';

// 새로운 Todo 항목을 입력하고 추가할 수 있는 컴포넌트
// App.js에서 일정 목록(배열)에 일정을 추가하는 함수를 props를 통해 전달받는다.
const TodoInsert = function ({eventHandler}) {
    const [inputValue, setInputValue] = useState('');

    // input 요소 값 변경에 대한 이벤트 처리
    const handleChangeInput = function(event){
        setInputValue(event.target.value);
    }

    // 일정 등록 버튼 이벤트 처리
    const handleAddTodoBtn = function(event){
        event.preventDefault();
        // props를 통해 전달은 함수를 호출하여 일정을 배열에 등록한다.
        eventHandler(inputValue);
        setInputValue('');
    }

    return (
        <form className='TodoInsert' onSubmit={handleAddTodoBtn}>
            <input placeholder='할 일을 입력하세요' value={inputValue} onInput={handleChangeInput} />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;