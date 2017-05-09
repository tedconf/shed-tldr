import { Component as {{pascalCase componentName}} } from './{{kebabCase componentName}}';

describe('{{pascalCase componentName}}', () => {
  it('should render', () => {
    const actual = shallow(
      <{{pascalCase componentName}} />,
    );
    expect(actual).toMatchSnapshot();
  });
});

