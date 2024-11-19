import { createProjectGraphAsync } from '@nx/devkit';

const getStories = async () => {
  const graph = await createProjectGraphAsync();
  const ignoredProjects = ['app1-e2e', 'app1-utils'];

  return Object.keys(graph.nodes)
    .filter((key) => graph.nodes[key].data.tags?.includes('scope:app1'))
    .filter((key) => !ignoredProjects.includes(key))
    .map((key) => {
      const project = graph.nodes[key].data;
      return {
        directory: `../../../${project.sourceRoot}`,
        titlePrefix: project.name,
      };
    });
};

/** @type import('@storybook/types').StorybookConfig */
const config = {
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  stories: getStories(),
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
