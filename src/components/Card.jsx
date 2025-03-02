/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ task, index }) => {
  return (
    <Draggable draggableId={`${task?.id}`} key={task?.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="mx-4 mb-4 min-h-[120px] p-[8px] bg-white rounded shadow-md shadow-gray-400 pointer flex flex-col justify-between "
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div style={{ display: 'flex', justifyContent: 'start', padding: 2 }}>
            <span>
              <small>
                #{task?.id}
                {'  '}
              </small>
            </span>
          </div>
          <div className="my-auto flex justify-center">
            <div>{task?.title}</div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

export default Card;

Card.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }),
  index: PropTypes.number
};
