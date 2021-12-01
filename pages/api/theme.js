import memoize from 'fast-memoize';
import getConfig from 'next/config';

const generateCSS = async (theme) => {
  const propDefinitions = Object.entries(theme.rootProperties)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n');

  return `/* Generated through Unchained Create Theming */
:root {
${propDefinitions}
}
`;
};

const memoizedGenerateCSS = memoize(generateCSS);

export default async function handler(req, res) {
  const {
    publicRuntimeConfig: { theme },
  } = getConfig();
  const css = await memoizedGenerateCSS(theme);
  res.setHeader('content-type', 'text/css; charset=utf-8');
  res.end(css);
}
