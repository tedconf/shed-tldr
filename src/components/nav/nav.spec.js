import { Component as Nav } from './nav';

describe('Nav', () => {
  it('should render', () => {
    const actual = shallow(
      <Nav />,
    );
    expect(actual).toMatchSnapshot();
  });
});

