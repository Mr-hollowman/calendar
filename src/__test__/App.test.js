import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders the input fields and submit button', () => {
    render(<App />);
    const inputs = screen.getAllByRole('spinbutton');
    const submitButton = screen.getByRole('button');
    expect(inputs).toHaveLength(3);
    expect(submitButton).toBeInTheDocument();
  });

  test('displays an alert message when an invalid Year is entered', () => {
    render(<App />);
    window.alert = jest.fn();

    let currentDate = new Date().toJSON().slice(0, 10);
    const YYYY = currentDate.slice(0,4)
    const MM = currentDate.slice(5,7)
    const DD = currentDate.slice(8)

    const yearInput = screen.getByPlaceholderText(YYYY);
    const monthInput = screen.getByPlaceholderText(MM);
    const dayInput = screen.getByPlaceholderText(DD);
    const submitButton = screen.getByRole('button');
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.change(monthInput, { target: { value: '13' } });
    fireEvent.change(dayInput, { target: { value: '4' } });
    fireEvent.click(submitButton);
    expect(window.alert.mock.calls.length).toBe(1)
  });

  test('displays an alert message when an Month is entered', () => {
    render(<App />);
    window.alert = jest.fn();

    let currentDate = new Date().toJSON().slice(0, 10);
    const YYYY = currentDate.slice(0,4)
    const MM = currentDate.slice(5,7)
    const DD = currentDate.slice(8)

    const yearInput = screen.getByPlaceholderText(YYYY);
    const monthInput = screen.getByPlaceholderText(MM);
    const dayInput = screen.getByPlaceholderText(DD);
    const submitButton = screen.getByRole('button');
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.change(monthInput, { target: { value: '12' } });
    fireEvent.change(dayInput, { target: { value: '0' } });
    fireEvent.click(submitButton);
    expect(window.alert.mock.calls.length).toBe(1)
  });

  test('displays an alert message when an Date is entered', () => {
    render(<App />);
    window.alert = jest.fn();

    let currentDate = new Date().toJSON().slice(0, 10);
    const YYYY = currentDate.slice(0,4)
    const MM = currentDate.slice(5,7)
    const DD = currentDate.slice(8)

    const yearInput = screen.getByPlaceholderText(YYYY);
    const monthInput = screen.getByPlaceholderText(MM);
    const dayInput = screen.getByPlaceholderText(DD);
    const submitButton = screen.getByRole('button');
    fireEvent.change(yearInput, { target: { value: '2500' } });
    fireEvent.change(monthInput, { target: { value: '13' } });
    fireEvent.change(dayInput, { target: { value: '0' } });
    fireEvent.click(submitButton);
    expect(window.alert.mock.calls.length).toBe(1)
  });


  test('updates the date when a valid date is entered and submitted', () => {
    render(<App />);
    let currentDate = new Date().toJSON().slice(0, 10);//YYYY-MM-DD // '2023-03-13'
    const YYYY = currentDate.slice(0,4)
    const MM = currentDate.slice(5,7)
    const DD = currentDate.slice(8)
    const yearInput = screen.getByPlaceholderText(YYYY);
    const monthInput = screen.getByPlaceholderText(MM);
    const dayInput = screen.getByPlaceholderText(DD);
    const submitButton = screen.getByRole('button');
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.change(monthInput, { target: { value: '04' } });
    fireEvent.change(dayInput, { target: { value: '15' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/April/i)).toBeInTheDocument();
    expect(screen.getByText(/2023/i)).toBeInTheDocument();
    expect(screen.getByText(/15/i)).toBeInTheDocument();
  });
});
