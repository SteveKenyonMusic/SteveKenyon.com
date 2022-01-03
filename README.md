## dev setup

- clone
- npm i
- start new branch with change description ex - "hideaki/update-gatsby-v4"
- `gatsby develop`
- code, git add and commit
- when done, `git push --set-upstream origin <branchName>`
- merge with dev branch on gitHub
- switch back to dev branch
- git pull origin dev
- `gatsby develop` - check to make sure everything works
- if good, final merge dev -> master PR will prompt a test deploy with Netlify
