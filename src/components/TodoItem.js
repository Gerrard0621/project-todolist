import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox} from 'react-icons/md';
import './TodoItem.css';
import { useState } from 'react';
import React from 'react';
// 각 Todo 항목에 대한 정보를 보여주는 컴포넌트
const TodoItem = function ( {todo,removeTodo} ) {
    
    const {id, title, checked} = todo;

    const [inChecked, setChecked] = useState(false);
    
    const onCheck = () =>{
        setChecked((e)=>!e);
    };


    return (
        <div className='TodoItem'>
            <div className={`checkbox ${inChecked ? "checked" : " "}`}  onClick={onCheck} >
            {inChecked ? (<MdCheckBox />) : (<MdCheckBoxOutlineBlank />)}


                <div className='text'>{title}</div>
            </div>
            <div className='remove' onClick={()=> removeTodo(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

// export default TodoItem;
// 전달바은 pops가 변경되지 않는경우, 재 렌더링 되지 않도록 React.memo() 메서드 사용
// 컴포넌트 기반 컴포넌트 개발에서 shouldComponentUpdate() 메서드 역할과 같다.

export default React.memo(TodoItem);