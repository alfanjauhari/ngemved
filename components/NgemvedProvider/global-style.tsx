import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Inter';
  font-weight: 100 700;
  font-display: optional;
  src: url('/fonts/Inter.var.woff2') format('woff2');
}

html {
  font-family: Inter;
  font-size: 17px;
}

@media (max-width: 900px) {
  html {
    font-size: 15px;
  }
}

@media (max-width: 400px) {
  html {
    font-size: 13px;
  }
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

button {
  background-color: transparent;
  background-image: none;
}

fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

body {
  font-family: inherit;
  line-height: inherit;
  margin: 0;
}

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
}

hr {
  border-top-width: 1px;
}

img {
  border-style: solid;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
}

button,
[role="button"] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  padding: 0;
  line-height: inherit;
  color: inherit;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
}

img,
video {
  max-width: 100%;
  height: auto;
}
`;
