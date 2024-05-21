import * as React from 'react';
import Button from '../Button/Button';
import { render } from '@testing-library/react-native';

it(`renders correctly`, () => {
    const tree = render(<Button title="Test" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it(`check loading is visible`, () => {
    const { getByTestId } = render(<Button title="Test" loading={true} />);
    expect(getByTestId('loading-button')).toBeTruthy();
});

it(`check title prop`, () => {
    const { getByTestId } = render(<Button title="Test" />);
    expect(getByTestId('title-button').props.children).toBe('Test');
});