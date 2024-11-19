# workspace-nx-devkit-storybook

![](https://github.com/user-attachments/assets/61f7bd8a-aee2-40d7-adc7-01c64f33b7d1)

## How to add stories automatically

Use `createProjectGraphAsync` to get the paths to the stories.

You can filter the stories by using the name or tags of the project.

```js
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
```

## Run Storybook

To run the storybook for your app, use:

```sh
npx nx run app1:storybook
```

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
