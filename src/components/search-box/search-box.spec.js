import { Component as SearchBox } from './search-box';

describe('SearchBox', () => {
  it('should render', () => {
    const actual = shallow(
      <SearchBox />,
    );
    expect(actual).toMatchSnapshot();
  });
});

