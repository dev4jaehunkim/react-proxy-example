import React from 'react'

const DisplayToDo = ({numberOfTodos, getAllTodo}) => {
    
    return(
        <div className="display-wrapper">
            <div className="display-box">
                <div className="display-board">
                    <h4>생성된 수</h4>
                    <div className="number">
                    {numberOfTodos}
                    </div>
                </div>
                <div className="get-button">
                    <button onClick={() => getAllTodo()}>Get all ToDos</button>
                </div>
            </div>
        </div>
    )
}

export default DisplayToDo;