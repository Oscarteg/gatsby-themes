import React from "react";
import Helmet from "react-helmet";

export default function Head() {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Helmet>
  );
}
