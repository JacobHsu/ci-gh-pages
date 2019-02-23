[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)  

# ci-gh-pages

[create-react-app](https://github.com/facebook/create-react-app)  

### Lint test  (程式碼風格測試)
安裝 StandardJS 到專案中  
`$ npm install --save-dev standard snazzy`  

package.json
```
"scripts": {
  "lint": "standard --fix | snazzy"
},
```

`$ npm run lint`

### Unit test (單元測試)
> 用來測試 function 回傳的資料是否和預期的相同

`npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json @types/jest`  

package.json
```
"scripts": {
    "unit": "react-scripts test --coverage --env=jsdom"
},
"jest": {
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
    "collectCoverageFrom": [
      "src/**/*.js",
      "!src/__tests__/**/*",
      "!src/(App|index|setupTests).js"
    ],
    "coverageReporters": [
      "text",
      "lcov"
    ]
  },
```

`$ npm run unit`

### Deploy gh-pages

`$ npm install gh-pages --save-dev`  

package.json
```
//...
"homepage": "https://jacobhsu.github.io/ci-gh-pages"

"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

`$ npm run deploy`

### Travis CI

[.travis.yml](https://docs.travis-ci.com/user/tutorial/)  
```
script:
  - echo "npm test temporarily disabled"
  - npm run lint
  - npm run unit
  - npm run deploy
```

### Codecov 

`$ npm install --save-dev codecov`

.travis.yml
```
script:
  - npm run test && codecov
```

把 CODECOV_TOKEN 存到 Travis CI 裡的 Environment Variables

### References

[standard](https://www.npmjs.com/package/standard)  
[JavaScript Standard Style](https://standardjs.com/readme-zhtw.html)  
[snazzy](https://www.npmjs.com/package/snazzy)    
[Enzyme](https://www.npmjs.com/package/enzyme)  
[gh-pages](https://www.npmjs.com/package/gh-pages)  
[react-gh-pages](https://github.com/gitname/react-gh-pages)    
[Travis CI](https://travis-ci.org/) - Test and Deploy Your Code with Confidence  
[前端工程師在GitHub上持續整合與部署(CI/CD)](https://medium.com/@sky172839465/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E5%9C%A8github%E4%B8%8A%E6%8C%81%E7%BA%8C%E6%95%B4%E5%90%88%E8%88%87%E9%83%A8%E7%BD%B2-ci-cd-9735f622ae68)  

[StandardJS badge](https://standardjs.com/#is-there-a-readme-badge)  
[coverage badge](https://codecov.io/gh)  