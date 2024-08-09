import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'getting-started/guide' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Contributing',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Forking a Repository', slug: 'contributing/forking' },
						{ label: 'Cloning the Forked Repository', slug: 'contributing/cloning' },
						{ label: 'Creating New Branch', slug: 'contributing/new-branch' },
						{ label: 'Making Changes', slug: 'contributing/making-changes' },
						{ label: 'Committing and Pushing Changes', slug: 'contributing/commit' },
						{ label: 'Creating a Pull Request', slug: 'contributing/pull-request' },
					],
				},
			],
		}),
	],
});
