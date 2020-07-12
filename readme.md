##### steps: 
npm install next 
npm install react react-dom 
npm install axios 
npm install -g firebase-tools
npm install --save @zeit/next-css

##### image url
https://developers.themoviedb.org/3/getting-started/images
Example : 
> https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
base url : "https://image.tmdb.org/t/p/w500/"

##### CSS files 
> npm install @zeit/next-css

Make a file in / "next.config.js" and enter : 
```
// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS();
```

##### Deployment
> firebase login

> firebase init 

> firebase deploy 