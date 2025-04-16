import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';;

function TaskList({ tasks, onDelete }) {
  if (!tasks.length) {
    return <p className="text-center text-gray-500">Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="taskItem">
          <span>{task}</span>
          <button onClick={() => onDelete(index)} className="btn-excluir">
  Excluir
</button>

        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
