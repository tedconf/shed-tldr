import { Component as {{pascalCase component_name}} } from './{{kebabCase component_name}}';

describe('{{pascalCase component_name}}', () => {
  it('should render', () => {
    const actual = shallow(
      <{{pascalCase component_name}} />,
    );
    expect(actual).toMatchSnapshot();
  });
});

