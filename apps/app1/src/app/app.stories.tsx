import { Meta, StoryObj } from '@storybook/react';

import { App } from './app';

const meta: Meta<typeof App> = {
  title: 'App',
  component: App,
  args: {},
};

export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {};
