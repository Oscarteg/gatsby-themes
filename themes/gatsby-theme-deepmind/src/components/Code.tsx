import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { mdx } from "@mdx-js/react";

export default function Code({ children, className, live, render }) {
  const language = className.replace(/language-/, "");

  if (live) {
    return (
      <pre>
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => "/** @jsx mdx */\n" + code}
          scope={{ mdx }}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </pre>
    );
  }

  if (render) {
    return (
      <pre>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </pre>
    );
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {/* <Copy toCopy={codeString} /> */}
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
