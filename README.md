### Netlify Deployment Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/95e633fe-d876-4fb2-8f3e-669c13a7a870/deploy-status)](https://app.netlify.com/sites/portfolio-test-xyz/deploys)

---

To run locally, start the development server:

```bash
yarn dev
```

Go to - [http://localhost:5173/](http://localhost:5173/)

---

**React Rought Notation**
*https://github.com/linkstrifer/react-rough-notation*

**Style inspiration:**
*https://www.youtube.com/watch?v=zl9iXZrw_dw&t=137s*

##### TODO:

- [ ] Bring back old navbar from `Layout.jsx`?
- [ ] Add screenshots of Projects (which are links) to the Projects section
- [x] Bring back `VerticalSpace.jsx` + `SmoothScrollLink` + add back the "Back to Top" button
- [x] Figure out clever way to DRY with RoughNotation for every word that needs an effect
- [x] Create a Utility component which will || will not return the visual effect added to the word(s) passed to it.

##### Notes:

- With the new method of auto-scrolling to different sections I need to look into if I need react-router-dom for anything else before potentially getting rid of it because I still have links to the different sections in the navbar which is redundant.

##### Open Questions:

- Should I use ShadCN/UI for component styling?
