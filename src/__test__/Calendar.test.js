import React from 'react';
import { render } from '@testing-library/react';
import Calendar from '../Calendar/Calendar';

describe('Calendar', () => {
  it('renders the correct month and year when 90\'s ', () => {
    const { getByText } = render(<Calendar date="1900-02-15" />);
    expect(getByText('February')).toBeInTheDocument();
    expect(getByText('1900')).toBeInTheDocument();
  });

  it('renders the correct month and year when 80\'s ', () => {
    const { getByText } = render(<Calendar date="1800-02-15" />);
    expect(getByText('February')).toBeInTheDocument();
    expect(getByText('1800')).toBeInTheDocument();
  });

  it('renders the correct month and year when 70\'s ', () => {
    const { getByText } = render(<Calendar date="1700-02-15" />);
    expect(getByText('February')).toBeInTheDocument();
    expect(getByText('1700')).toBeInTheDocument();
  });

  it('renders the correct month and year when 2.1k\'s ', () => {
    const { getByText } = render(<Calendar date="2100-02-15" />);
    expect(getByText('February')).toBeInTheDocument();
    expect(getByText('2100')).toBeInTheDocument();
  });

  it('renders the correct month and year when 2.2k\'s ', () => {
    const { getByText } = render(<Calendar date="2200-02-15" />);
    expect(getByText('February')).toBeInTheDocument();
    expect(getByText('2200')).toBeInTheDocument();
  });

  it('renders the correct month and year when 2.2k\'s ', () => {
    const { getByText } = render(<Calendar date="2300-02-15" />);
    expect(getByText('February')).toBeInTheDocument();
    expect(getByText('2300')).toBeInTheDocument();
  });


  it('renders the correct month and year when the leap year', () => {
    const { getByText } = render(<Calendar date="2016-02-15" />);
    expect(getByText('February')).toBeInTheDocument();
    expect(getByText('2016')).toBeInTheDocument();
  });

  it('renders the correct number of days for the given month', () => {
    const { getAllByTestId } = render(<Calendar date="2022-06-15" />);
    const dates = getAllByTestId('calendar-date');
    expect(dates).toHaveLength(30);
  });

  it('highlights the selected date', () => {
    const { getByText } = render(<Calendar date="2022-06-15" />);
    const selectedDate = getByText('15');
    expect(selectedDate).toHaveClass('calendar-selectedDate');
  });
});
