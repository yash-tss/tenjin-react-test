// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9DLyskYk67REQMnTM53pan
import * as React from "react";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";

export default function GlobalContextsProvider(props) {
  const { children, embedCssProps } = props;
  return (
    <EmbedCss
      {...embedCssProps}
      css={
        embedCssProps && "css" in embedCssProps
          ? embedCssProps.css
          : "/* CSS snippet */\r\n.yash-button{\r\n  width: 500px;\r\n  height: 200px;\r\n  background-color: rebeccapurple;\r\n  border-radius: 24px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"
      }
    >
      {children}
    </EmbedCss>
  );
}
