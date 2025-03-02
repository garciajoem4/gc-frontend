/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import './scroll.css';

const Column = ({ title, tasks, id }) => {
  return (
    <div className="column flex-1 h-[600px] overflow-y-scroll border border-1 border-gray bg-[#f4f5f7]">
      <div className="mt-0 px-8 py-4 text-center text-white font-bold bg-blue-500 sticky top-0">
        {title}
      </div>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className="p-4 min-h-[100px] grow-1 bg-[#f4f5f7]"
            ref={provided.innerRef}
          >
            {tasks.map((task, index) =>
              task !== undefined ? (
                <Card key={index} index={index} task={task} />
              ) : null
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;

// Prop types validation
Column.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  ),
  id: PropTypes.string
};
