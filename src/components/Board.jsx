import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { data } from './constants';

const Board = () => {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [backlog, setBacklog] = useState([]);
  const [inReview, setInReview] = useState([]);

  useEffect(() => {
    setCompleted(data.filter(task => task.completed));
    setIncomplete(data.filter(task => !task.completed));
  }, []);

  const handleDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId) return;

    deletePreviousState(source.droppableId, draggableId);

    const task = findItemById(draggableId, [
      ...incomplete,
      ...completed,
      ...inReview,
      ...backlog
    ]);

    setNewState(destination.droppableId, task);
  };

  function deletePreviousState(sourceDroppableId, taskId) {
    switch (sourceDroppableId) {
      case '1':
        setIncomplete(removeItemById(taskId, incomplete));
        break;
      case '2':
        setCompleted(removeItemById(taskId, completed));
        break;
      case '3':
        setInReview(removeItemById(taskId, inReview));
        break;
      case '4':
        setBacklog(removeItemById(taskId, backlog));
        break;
      default:
        break;
    }
  }
  function setNewState(destinationDroppableId, task) {
    let updatedTask;
    switch (destinationDroppableId) {
      case '1': // TO DO
        updatedTask = { ...task, completed: false };
        setIncomplete([updatedTask, ...incomplete]);
        break;
      case '2': // DONE
        updatedTask = { ...task, completed: true };
        setCompleted([updatedTask, ...completed]);
        break;
      case '3': // IN REVIEW
        updatedTask = { ...task, completed: false };
        setInReview([updatedTask, ...inReview]);
        break;
      case '4': // BACKLOG
        updatedTask = { ...task, completed: false };
        setBacklog([updatedTask, ...backlog]);
        break;
      default:
        break;
    }
  }
  function findItemById(id, array) {
    return array.find(item => item.id === id);
  }

  function removeItemById(id, array) {
    return array.filter(item => item.id !== id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="w-full mx-auto max-w-[1200px] p-8 flex flex-row justify-between items-center">
        <Column title="SEGMENT" tasks={incomplete} id="1" />
        <Column title="JOBS" tasks={completed} id="2" />
        <Column title="PAINS" tasks={inReview} id="3" />
        <Column title="GAINS" tasks={backlog} id="4" />
      </div>
    </DragDropContext>
  );
};

export default Board;
