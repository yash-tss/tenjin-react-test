// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9DLyskYk67REQMnTM53pan
// Component: Rk7u60FIxD5x
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import { useScreenVariants as useScreenVariantsaFh7XZwKhsDa } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aFh7xZwKhsDA/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 9DLyskYk67REQMnTM53pan/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: Rk7u60FIxD5x/css
import VectorIcon from "../tenjin_website_new_aug/icons/PlasmicIcon__Vector"; // plasmic-import: Yt_kSm4JLsNv/icon
import Vector1058Icon from "../tenjin_website_new_aug/icons/PlasmicIcon__Vector1058"; // plasmic-import: S3JTgsTTnihB/icon
import GroupIcon from "../tenjin_website_new_aug/icons/PlasmicIcon__Group"; // plasmic-import: GL9zdLj8kdoR/icon
import Group2Icon from "../tenjin_website_new_aug/icons/PlasmicIcon__Group2"; // plasmic-import: 41ZqmsPmU_Wj/icon
import Vector2Icon from "../tenjin_website_new_aug/icons/PlasmicIcon__Vector2"; // plasmic-import: gyRmVzuSTKQt/icon
import Vector3Icon from "../tenjin_website_new_aug/icons/PlasmicIcon__Vector3"; // plasmic-import: r7N0mIhdw8R_/icon
import tenjinLogosvgLV8VeiIhPt8Y from "../tenjin_website_new_aug/images/tenjinLogosvg.svg"; // plasmic-import: lV8veiIhPt8Y/picture
import g9910NGph3QCx6Tcs from "../tenjin_website_new_aug/images/g9910.svg"; // plasmic-import: nGph3QCx6tcs/picture

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsaFh7XZwKhsDa()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__op5Hv
                )}
                href={"#"}
                platform={"react"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__wTlNg)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "16px"
                      : hasVariant(globalVariants, "screen", "tablet")
                      ? "25px"
                      : "30px"
                  }
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={{
                    src: tenjinLogosvgLV8VeiIhPt8Y,
                    fullWidth: 179,
                    fullHeight: 25,
                    aspectRatio: 7.16
                  }}
                />
              </PlasmicLink__>
            }
            className={classNames("__wab_instance", sty.navigationBar)}
            closeButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__gySg)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={8}
            menuItems={
              <React.Fragment>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___4Vrc9
                  )}
                  href={"/"}
                  platform={"react"}
                >
                  {"Home"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__hLLe1
                  )}
                  href={"/"}
                  platform={"react"}
                >
                  {"About"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__o76Wf
                  )}
                  href={"/"}
                  platform={"react"}
                >
                  {"Contact"}
                </PlasmicLink__>
              </React.Fragment>
            }
            openButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__yrlNz)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/menu.svg"}
              />
            }
            responsiveBreakpoint={768}
          />

          <Stack__
            as={"div"}
            data-plasmic-name={"heroRight"}
            data-plasmic-override={overrides.heroRight}
            hasGap={true}
            className={classNames(projectcss.all, sty.heroRight)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"heroTypo"}
              data-plasmic-override={overrides.heroTypo}
              hasGap={true}
              className={classNames(projectcss.all, sty.heroTypo)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"frame1171275602"}
                data-plasmic-override={overrides.frame1171275602}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame1171275602)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pizOh
                  )}
                >
                  {"Private Wealth Redefined"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___21WuR
                  )}
                >
                  {"Exclusive. Focused. Unmatched."}
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                data-plasmic-name={"frame1171275595"}
                data-plasmic-override={overrides.frame1171275595}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame1171275595)}
              >
                <Stack__
                  as={"button"}
                  data-plasmic-name={"downloadButton"}
                  data-plasmic-override={overrides.downloadButton}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.button,
                    sty.downloadButton
                  )}
                  ref={ref => {
                    $refs["downloadButton"] = ref;
                  }}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oe6R5
                    )}
                  >
                    {"Download App"}
                  </div>
                </Stack__>
                <Stack__
                  as={PlasmicLink__}
                  data-plasmic-name={"tenjinGptButton"}
                  data-plasmic-override={overrides.tenjinGptButton}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.tenjinGptButton
                  )}
                  platform={"react"}
                >
                  <VectorIcon
                    className={classNames(projectcss.all, sty.svg__bqXtw)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nmUfm
                    )}
                  >
                    {"Try TenjinGPT"}
                  </div>
                </Stack__>
                <div
                  data-plasmic-name={"itsFreeSvg"}
                  data-plasmic-override={overrides.itsFreeSvg}
                  className={classNames(projectcss.all, sty.itsFreeSvg)}
                >
                  <Vector1058Icon
                    className={classNames(projectcss.all, sty.svg__slTw8)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vOnps
                    )}
                  >
                    {"It\u2019s Free"}
                  </div>
                </div>
              </Stack__>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uM6E
                )}
              >
                {
                  "Access AI powered research, actionable insights & alerts on your current investments, and automated investing\u2014all in one app."
                }
              </div>
            </Stack__>
            <div
              data-plasmic-name={"phoneMockups"}
              data-plasmic-override={overrides.phoneMockups}
              className={classNames(projectcss.all, sty.phoneMockups)}
            />

            <Stack__
              as={"div"}
              data-plasmic-name={"brandsStack"}
              data-plasmic-override={overrides.brandsStack}
              hasGap={true}
              className={classNames(projectcss.all, sty.brandsStack)}
            >
              <div
                data-plasmic-name={"logoBlock"}
                data-plasmic-override={overrides.logoBlock}
                className={classNames(projectcss.all, sty.logoBlock)}
              >
                <div
                  data-plasmic-name={"openaiLogosvg"}
                  data-plasmic-override={overrides.openaiLogosvg}
                  className={classNames(projectcss.all, sty.openaiLogosvg)}
                >
                  <GroupIcon
                    className={classNames(projectcss.all, sty.svg__faVhA)}
                    role={"img"}
                  />
                </div>
              </div>
              <div
                data-plasmic-name={"logoBlock2"}
                data-plasmic-override={overrides.logoBlock2}
                className={classNames(projectcss.all, sty.logoBlock2)}
              >
                <div
                  data-plasmic-name={"zillowLogosvg"}
                  data-plasmic-override={overrides.zillowLogosvg}
                  className={classNames(projectcss.all, sty.zillowLogosvg)}
                >
                  <Group2Icon
                    className={classNames(projectcss.all, sty.svg__fhsMx)}
                    role={"img"}
                  />
                </div>
              </div>
              <div
                data-plasmic-name={"spacer"}
                data-plasmic-override={overrides.spacer}
                className={classNames(projectcss.all, sty.spacer)}
              />

              <div
                data-plasmic-name={"logoBlock3"}
                data-plasmic-override={overrides.logoBlock3}
                className={classNames(projectcss.all, sty.logoBlock3)}
              >
                <div
                  data-plasmic-name={"interactiveBrokersLogosvg"}
                  data-plasmic-override={overrides.interactiveBrokersLogosvg}
                  className={classNames(
                    projectcss.all,
                    sty.interactiveBrokersLogosvg
                  )}
                >
                  <div
                    data-plasmic-name={"layer1"}
                    data-plasmic-override={overrides.layer1}
                    className={classNames(projectcss.all, sty.layer1)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___3Ze7D)}
                      displayHeight={"22.125px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"154.386px"}
                      loading={"lazy"}
                      src={{
                        src: g9910NGph3QCx6Tcs,
                        fullWidth: 154.386,
                        fullHeight: 22.125,
                        aspectRatio: 6.73913
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                data-plasmic-name={"logoBlock4"}
                data-plasmic-override={overrides.logoBlock4}
                className={classNames(projectcss.all, sty.logoBlock4)}
              >
                <div
                  data-plasmic-name={"plaidLogosvg"}
                  data-plasmic-override={overrides.plaidLogosvg}
                  className={classNames(projectcss.all, sty.plaidLogosvg)}
                >
                  <div
                    data-plasmic-name={"group"}
                    data-plasmic-override={overrides.group}
                    className={classNames(projectcss.all, sty.group)}
                  >
                    <Vector2Icon
                      className={classNames(projectcss.all, sty.svg__mSvdS)}
                      role={"img"}
                    />

                    <div
                      data-plasmic-name={"maskGroup"}
                      data-plasmic-override={overrides.maskGroup}
                      className={classNames(projectcss.all, sty.maskGroup)}
                    >
                      <Vector3Icon
                        className={classNames(projectcss.all, sty.svg__iVlg)}
                        role={"img"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Stack__>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "heroRight",
    "heroTypo",
    "frame1171275602",
    "frame1171275595",
    "downloadButton",
    "tenjinGptButton",
    "itsFreeSvg",
    "phoneMockups",
    "brandsStack",
    "logoBlock",
    "openaiLogosvg",
    "logoBlock2",
    "zillowLogosvg",
    "spacer",
    "logoBlock3",
    "interactiveBrokersLogosvg",
    "layer1",
    "logoBlock4",
    "plaidLogosvg",
    "group",
    "maskGroup"
  ],

  navigationBar: ["navigationBar"],
  heroRight: [
    "heroRight",
    "heroTypo",
    "frame1171275602",
    "frame1171275595",
    "downloadButton",
    "tenjinGptButton",
    "itsFreeSvg",
    "phoneMockups",
    "brandsStack",
    "logoBlock",
    "openaiLogosvg",
    "logoBlock2",
    "zillowLogosvg",
    "spacer",
    "logoBlock3",
    "interactiveBrokersLogosvg",
    "layer1",
    "logoBlock4",
    "plaidLogosvg",
    "group",
    "maskGroup"
  ],

  heroTypo: [
    "heroTypo",
    "frame1171275602",
    "frame1171275595",
    "downloadButton",
    "tenjinGptButton",
    "itsFreeSvg"
  ],

  frame1171275602: ["frame1171275602"],
  frame1171275595: [
    "frame1171275595",
    "downloadButton",
    "tenjinGptButton",
    "itsFreeSvg"
  ],

  downloadButton: ["downloadButton"],
  tenjinGptButton: ["tenjinGptButton"],
  itsFreeSvg: ["itsFreeSvg"],
  phoneMockups: ["phoneMockups"],
  brandsStack: [
    "brandsStack",
    "logoBlock",
    "openaiLogosvg",
    "logoBlock2",
    "zillowLogosvg",
    "spacer",
    "logoBlock3",
    "interactiveBrokersLogosvg",
    "layer1",
    "logoBlock4",
    "plaidLogosvg",
    "group",
    "maskGroup"
  ],

  logoBlock: ["logoBlock", "openaiLogosvg"],
  openaiLogosvg: ["openaiLogosvg"],
  logoBlock2: ["logoBlock2", "zillowLogosvg"],
  zillowLogosvg: ["zillowLogosvg"],
  spacer: ["spacer"],
  logoBlock3: ["logoBlock3", "interactiveBrokersLogosvg", "layer1"],
  interactiveBrokersLogosvg: ["interactiveBrokersLogosvg", "layer1"],
  layer1: ["layer1"],
  logoBlock4: ["logoBlock4", "plaidLogosvg", "group", "maskGroup"],
  plaidLogosvg: ["plaidLogosvg", "group", "maskGroup"],
  group: ["group", "maskGroup"],
  maskGroup: ["maskGroup"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    heroRight: makeNodeComponent("heroRight"),
    heroTypo: makeNodeComponent("heroTypo"),
    frame1171275602: makeNodeComponent("frame1171275602"),
    frame1171275595: makeNodeComponent("frame1171275595"),
    downloadButton: makeNodeComponent("downloadButton"),
    tenjinGptButton: makeNodeComponent("tenjinGptButton"),
    itsFreeSvg: makeNodeComponent("itsFreeSvg"),
    phoneMockups: makeNodeComponent("phoneMockups"),
    brandsStack: makeNodeComponent("brandsStack"),
    logoBlock: makeNodeComponent("logoBlock"),
    openaiLogosvg: makeNodeComponent("openaiLogosvg"),
    logoBlock2: makeNodeComponent("logoBlock2"),
    zillowLogosvg: makeNodeComponent("zillowLogosvg"),
    spacer: makeNodeComponent("spacer"),
    logoBlock3: makeNodeComponent("logoBlock3"),
    interactiveBrokersLogosvg: makeNodeComponent("interactiveBrokersLogosvg"),
    layer1: makeNodeComponent("layer1"),
    logoBlock4: makeNodeComponent("logoBlock4"),
    plaidLogosvg: makeNodeComponent("plaidLogosvg"),
    group: makeNodeComponent("group"),
    maskGroup: makeNodeComponent("maskGroup"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
