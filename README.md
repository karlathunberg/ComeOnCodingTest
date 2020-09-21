**Disclaimer: The following repo is the codebase of a coding test done by Karl A-Thunberg
as a step in the interviewing process by [ComeOn](https://www.comeon.com).**

# ComeOn Casino

Welcome to the source code of the frontend for ComeOn Casino. It is written in Typescript and uses React and Redux. Not yet released.

Tags: `git`, `yarn`, `typescript`, `react`, `redux`, `parcel`, `semantic-ui`, `prettier`, `VS Code`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This dev environment was created from a PC running Windows 10 using Visual Studio Code and git. It should also work on Linux and MacOs but not yet verified.

### Get Source Code

Source code lives in [Karl A-Thunbergs GitHub account](https://github.com/karlathunberg/ComeOnCodingTest). Recommended way is to [add an ssh key on your GitHub account](https://docs.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account) and then clone the repo using a git client of your choice (e.g. SourceTree for a GUI or git for windows if you want a CLI).

```
cd /path/to/where/you/want/the/code
git clone git@github.com:karlathunberg/ComeOnCodingTest.git
```

### Start the application

There is a git hook that will install all dependencies when pulling from the remote but if you do not have the latest dependencies (for example if you downloaded the repo as a zip) you should first run:

```
yarn install
```

Then to start the application:

```
yarn run
```

This should open up a browser tab to your now up-and-running frontend on [localhost:3000](http://localhost:3000). It is also running a mock API on [localhost:3001](http://localhost:3001) which your local frontend will use.

### Debugging With VS Code

When your frontend is running you can debug from VS Code by running the Chrome launch setting.

### Testing

Run tests using either:

```
yarn test // for single run
yarn test:watch // for watch mode which will rerun tests when files are changed
```

## Deployment

This application has not yet been released.

To build files for release run:

```
yarn build
```

This will put built files into the **dist/** folder which can then be hosted on a static file server. Make sure to populate the variables in `src/utils/variables.ts` before release.

## Development

Check out the following resources:

- [Specification](https://github.com/comeon-group/comeon-javascript-test)
- [Taskboard](https://trello.com/b/oR5n61a3/comeon-coding-test)
- [Time tracker](https://clockify.me/projects/5f63a8c5d95ec85fb3352f9d/edit)
