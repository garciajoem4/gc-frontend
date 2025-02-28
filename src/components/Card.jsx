/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 120px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${props => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TextContent = styled.div``;

const bgcolorChange = props => {
  let color = '';

  if (props.isDragging) {
    color = 'lightgreen';
  }

  if (props.isDraggable) {
    color = props.isBacklog ? '#F2D7D5' : '#DCDCDC';
  } else {
    color = props.isBacklog ? '#F2D7D5' : '#EAF4FC';
  }

  return color;
};

const Card = ({ task, index }) => {
  return (
    <Draggable draggableId={`${task?.id}`} key={task?.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div style={{ display: 'flex', justifyContent: 'start', padding: 2 }}>
            <span>
              <small>
                #{task?.id}
                {'  '}
              </small>
            </span>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', padding: 2 }}
          >
            <TextContent>{task?.title}</TextContent>
          </div>
          {provided.placeholder}
        </Container>
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
