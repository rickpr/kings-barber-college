# Kings Barber College Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

This repo contains the code for the CMS running [https://kingsbarbercollege.com](https://kingsbarbercollege.com)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth,
and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Local Development

- Minimum Node.js version 14.15.0
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
- [Netlify CLI](https://github.com/netlify/cli)

Clone the Github repository:
```
$ git clone https://github.com/rickpr/kings-barber-college.git
$ cd kings-barber-college
$ npm install
$ netlify dev # or ntl dev
```

This uses [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature to serve any functions you have in the `netlify/functions` folder.

To test the CMS locally, you'll need to run a production build of the site:

```
$ npm run build
$ netlify dev # or ntl dev
```

### Media Libraries (installed, but optional)

Media Libraries have been included in this starter as a default. If you are not planning to use `Uploadcare` or `Cloudinary` in your project, you **can** remove them from module import and registration in `src/cms/cms.js`. Here is an example of the lines to comment or remove them your project.

```javascript
import CMS from "decap-cms-app";
// import uploadcare from 'decap-cms-media-library-uploadcare'
// import cloudinary from 'decap-cms-media-library-cloudinary'

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
```

Note: Don't forget to also remove them from `package.json` and `yarn.lock` / `package-lock.json` using `yarn` or `npm`. During the build decap-cms-app will bundle the media libraries as well, having them removed will save you build time.
Example:

```
npm uninstall decap-cms-media-library-uploadcare
```

OR

```
npm uninstall decap-cms-media-library-cloudinary
```


# Notes
This uses [Decap CMS](https://github.com/decaporg/decap-cms) with [Gatsby v4](https://www.gatsbyjs.com/gatsby-4/). You
will most likely find helpful documentation at both of these resources.
