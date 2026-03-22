## Pre-requisites
### Install NVM and Node
Tutorials on how to do this:
- https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
- https://oneuptime.com/blog/post/2026-01-15-install-nodejs-nvm-ubuntu/view

Use node LTS version `nvm use --lts`

### Install Git
https://git-scm.com/install/linux

## Using this project
In order to run the npm commands, you need to tell node which version should be used
In the root of the project run: `nvm use` or `nvm use --lts`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Project creation process
 - Created repository in github: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
 - Created project using: `npx create-react-app frontend_training`
 - CD into project root: `cd frontend_training`
 - Added repository created in github to project: `git remote add origin git@github.com:deprecatum/frontend_training.git`
 - Created master branch for project/repository: `git branch -M master`
 - Added project files into branch: `git add .`
 - Commited project files: `git commit -m "Initialize project using Create React App"`
 - Pushed project local changes to remote: `git push --set-upstream origin master`

## Process for committing changes
 - First create a new branch `git checkout -b "BRANCH_NAME"`
 - Add local changes to branch `git add *`
 - Commit the changes `git commit -m "COMMIT_MESSAGE"`
 - Push local changes to remote `git push`
