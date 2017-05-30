import { Component as Layout } from './layout';

describe('Layout', () => {
  it('should render', () => {
    const actual = shallow(
      <Layout />,
    );
    expect(actual).toMatchSnapshot();
  });
});

