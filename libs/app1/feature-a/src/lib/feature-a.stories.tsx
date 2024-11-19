import { Meta, StoryObj } from '@storybook/react';

import { FeatureA } from './feature-a';

const meta: Meta<typeof FeatureA> = {
  title: 'FeatureA',
  component: FeatureA,
  args: {},
};

export default meta;

type Story = StoryObj<typeof FeatureA>;

export const Default: Story = {};
