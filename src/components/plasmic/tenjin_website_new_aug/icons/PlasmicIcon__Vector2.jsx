// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.18.858C6.5.286 5.34 0 3.7 0H0v11.434h2.767V7.851h1.239c1.504 0 2.607-.33 3.31-.993.79-.743 1.188-1.732 1.188-2.966 0-1.28-.442-2.291-1.324-3.034zM3.937 5.264h-1.17V2.588h1.051c1.28 0 1.92.449 1.92 1.346 0 .886-.601 1.33-1.8 1.33zM13.238 0h-2.885v11.434h6.229V8.846h-3.344V0zm8.996 0l-4.532 11.434h3.106l.594-1.662h3.938l.544 1.662h3.14L24.524 0h-2.29zM22.2 7.457l1.19-3.907 1.17 3.908H22.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
