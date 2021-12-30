#!/bin/bash
# From https://medium.com/onfido-tech/travis-surge-github-auto-deploy-every-pr-branch-and-tag-a6c8c790831f
echo "Deploying to Github pages"
node node_modules/gh-pages/bin/gh-pages-clean
gh-pages -d public -r "https://ensbot:${GITHUB_API_TOKEN}@github.com/ensdomains/ensdomains-v2.git"
