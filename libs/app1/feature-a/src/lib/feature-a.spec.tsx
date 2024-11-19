import { render } from '@testing-library/react';

import FeatureA from './feature-a';

describe('FeatureA', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureA />);
    expect(baseElement).toBeTruthy();
  });
});
