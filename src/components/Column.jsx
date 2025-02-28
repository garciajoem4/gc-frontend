/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import './scroll.css';

const Container = styled.div`
  background-color: #f4f5f7;
  border-radius: 2.5px;
  width: 400px;
  height: 900px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`;

const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({ title, tasks, id }) => {
  return (
    <Container className="column">
      <Title
        style={{
          backgroundColor: 'lightblue',
          position: 'sticky',
          top: '0'
        }}
      >
        {title}
      </Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) =>
              task !== undefined ? (
                <Card key={index} index={index} task={task} />
              ) : null
            )}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
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
