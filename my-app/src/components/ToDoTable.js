import React from 'react'

const ToDoTable = ({toDos}) => {

    if (toDos.length === 0) return null;

    return(
        <div className="table-wrapper">
            <div className="table-box">
                <h2>My toDos</h2>
                <div className="table-scroll">
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>todo</th>
                            <th>category</th>
                            <th>isComplete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {toDos.map((toDo,index) => {
                                return (
                                    <tr key = {index} className={index%2 === 0?'odd':'even'}>
                                        <td>{index + 1}</td>
                                        <td>{toDo.todo}</td>
                                        <td>{toDo.category}</td>
                                        <td>{toDo.isComplete ? '✅' : '❌'}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ToDoTable;