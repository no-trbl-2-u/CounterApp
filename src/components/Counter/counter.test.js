import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import renderer from 'react-test-renderer';

it('should render 0', () => {
  const tree = renderer.create(<Counter/>).toJSON();
  expect(tree).toMatchSnapshot();
})

it('should render to 2', () => {
  const component = renderer.create(<Counter/>);
  component.getInstance().increment();
  component.getInstance().increment();
  expect(component.toJSON()).toMatchSnapshot();
})

it('should not go negative', () => {
  const component = renderer.create(<Counter/>)
  
  // Add 1, Subtract 2, is it less than 0?
  component.getInstance().increment();
  
  component.getInstance().decrement();
  component.getInstance().decrement();

  expect(component.toJSON()).toMatchSnapshot();
})