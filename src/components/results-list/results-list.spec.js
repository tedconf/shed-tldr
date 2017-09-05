import { Component as ResultsList } from './results-list';

describe('ResultsList', () => {
  it('should render', () => {
    const actual = shallow(
      <ResultsList />,
    );
    expect(actual).toMatchSnapshot();
  });
});

