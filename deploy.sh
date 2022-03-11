set -e
npm run build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:zcxiaobao/postgrad-notes.git master:blogs
cd -