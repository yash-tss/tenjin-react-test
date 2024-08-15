// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.562 0c0 5.806-3.137 11-7.562 11 4.425 0 7.562 5.195 7.562 11 0-5.805 3.138-11 7.563-11C10.7 11 7.562 5.806 7.562 0zM16.5 11c0 2.903-1.569 5.5-3.782 5.5 2.213 0 3.782 2.598 3.782 5.5 0-2.902 1.568-5.5 3.781-5.5-2.213 0-3.781-2.597-3.781-5.5zm1.719-11c0 2.903-1.569 5.5-3.782 5.5 2.213 0 3.782 2.597 3.782 5.5 0-2.903 1.568-5.5 3.781-5.5-2.213 0-3.781-2.597-3.781-5.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
