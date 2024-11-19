import { render } from '@testing-library/react';

import FeatureC from './feature-c';

describe('FeatureC', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureC />);
    expect(baseElement).toBeTruthy();
  });
});
