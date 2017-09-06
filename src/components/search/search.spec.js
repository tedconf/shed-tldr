import { Component as Search } from './search';

describe('Search', () => {
  it('should render', () => {
    const actual = shallow(
      <Search />,
    );
    expect(actual).toMatchSnapshot();
  });
});

