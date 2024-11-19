import { Meta, StoryObj } from '@storybook/react';

import { FeatureB } from './feature-b';

const meta: Meta<typeof FeatureB> = {
  title: 'FeatureB',
  component: FeatureB,
  args: {},
};

export default meta;

type Story = StoryObj<typeof FeatureB>;

export const Default: Story = {};
