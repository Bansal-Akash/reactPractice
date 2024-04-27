import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText(/First react test case/i);
  const title = screen.getByTitle('hd wallpaper');
  expect(element ).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test('testing input test box', () => {
  render(<App/>);
  
  // name is the label name here
  const textbox = screen.getByRole("textbox", {name: 'User Name'});
  const placeholder = screen.getByPlaceholderText('user name');

  expect(textbox).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
  expect(textbox).toHaveAttribute('name', 'user');

  fireEvent.change(textbox, {target: {value: 'a'}});
  //fireEvent.click to test button click
  expect(textbox.value).toBe('a');
});

describe('test group', () => {
  beforeAll(() => {

  });
  beforeEach(() => {

  });
  afterAll(() => {

  });
  afterEach(() => {

  });

  test('functional component method test', () => {
    render(<App/>);
    const element = screen.getByTestId('testId');
    fireEvent.click(element);
    expect(screen.getByText('Hi testing')).toBeInTheDocument();

    // name is the label name here
    const age = screen.getByRole('textbox', {name: 'User Age'});
    expect(age).toBeInTheDocument();
  });

  test('functional props and mock functions', async () => {
    userEvent.setup();
    //mock a functional prop
    const testFunction = jest.fn();
    render(<App testFunction={testFunction}/>);
    const btn = screen.getByText('Functional props');
    await userEvent.click(btn);
    expect(testFunction).toHaveBeenCalled();
  });
})
