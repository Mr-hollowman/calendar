import { weeks, months, monthCodeList, checkLeapYear, monthWith31 } from '../Calendar/helper';

describe('weeks', () => {
  it('should return an array of seven days of the week', () => {
    expect(weeks).toHaveLength(7);
    expect(weeks[0]).toBe('Su');
    expect(weeks[1]).toBe('Mo');
    expect(weeks[2]).toBe('Tu');
    expect(weeks[3]).toBe('We');
    expect(weeks[4]).toBe('Th');
    expect(weeks[5]).toBe('Fr');
    expect(weeks[6]).toBe('Sa');
  });
});

describe('months', () => {
  it('should return an array of twelve months', () => {
    expect(months).toHaveLength(12);
    expect(months[0]).toBe('January');
    expect(months[1]).toBe('February');
    expect(months[2]).toBe('March');
    expect(months[3]).toBe('April');
    expect(months[4]).toBe('May');
    expect(months[5]).toBe('June');
    expect(months[6]).toBe('July');
    expect(months[7]).toBe('August');
    expect(months[8]).toBe('September');
    expect(months[9]).toBe('October');
    expect(months[10]).toBe('November');
    expect(months[11]).toBe('December');
  });
});

describe('checkLeapYear', () => {
  it('should return 1 if the year is a leap year, 0 otherwise', () => {
    expect(checkLeapYear(2000)).toBe(1);
    expect(checkLeapYear(2004)).toBe(1);
    expect(checkLeapYear(1900)).toBe(0);
    expect(checkLeapYear(2002)).toBe(0);
  });
});
