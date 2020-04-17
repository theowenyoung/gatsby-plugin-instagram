import React from 'react';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      key="gatsby-plugin-instagram-preconnect-0"
      rel="preconnect"
      href="https://instagram.com"
    />,
  ]);
};