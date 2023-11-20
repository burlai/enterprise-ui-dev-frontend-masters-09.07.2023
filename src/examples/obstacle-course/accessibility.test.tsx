import { render } from 'test/utilities';
// Kostia: Axe is a library for accessibility testing. https://github.com/dequelabs/axe-core // TODO: ask if we should test accessibility (probably should)
import { axe, toHaveNoViolations } from 'jest-axe';
import ObstacleCourse from '.';

expect.extend(toHaveNoViolations);

it('should demonstrate this matcher`s usage', async () => {
  const { container } = render(<ObstacleCourse />);
  const results = await axe(container);

  // Kostia: toHaveNoViolations is checking the accessibility in general - all cases. Like no labels for inputs and so on
  expect(results).toHaveNoViolations();
});
