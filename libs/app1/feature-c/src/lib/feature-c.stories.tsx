import { Meta, StoryObj } from '@storybook/react';

import { FeatureC } from './feature-c';

const meta: Meta<typeof FeatureC> = {
  title: 'FeatureC',
  component: FeatureC,
  args: {},
};

export default meta;

type Story = StoryObj<typeof FeatureC>;

export const Default: Story = {};
