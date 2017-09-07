import { Component as Scale } from './scale';

describe('Scale', () => {
  it('should render', () => {
    const actual = shallow(
      <Scale />,
    );
    expect(actual).toMatchSnapshot();
  });
});

