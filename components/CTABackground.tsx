import Image from "next/image";

import styles from "@/components/scss/CallToAction.module.scss";
import { useEffect, useMemo, useState } from "react";

const CTABackground = ({ color }: { color: string }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SVGBackground = useMemo(() => {
    if (windowWidth <= 468) return <SVGBackgroundMobile color={color} />;
    if (windowWidth >= 469 && windowWidth < 744)
      return <SVGBackgroundTablet color={color} />;
    if (windowWidth >= 744 && windowWidth < 1280)
      return <SVGBackgroundDesktop color={color} />;
    if (windowWidth >= 1280 && windowWidth < 1512)
      return <SVGBackgroundXLDesktop color={color} />;
    return <SVGBackgroundXXLDesktop color={color} />;
  }, [windowWidth]);
  return <div className={styles.imageContainer}>{SVGBackground}</div>;
};

const SVGBackgroundMobile = ({ color }: { color: string }) => {
  return (
    <>
      <svg
        width="468"
        height="1002"
        viewBox="0 0 468 1002"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2266_5200"
          //   style="mask-type:alpha"
          style={{ maskType: "alpha" } as React.CSSProperties}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="468"
          height="1002"
        >
          <rect width="468" height="1002" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2266_5200)">
          <rect x="-10" y="-111" width="478" height="398" fill="#FEEFDD" />
          <ellipse cx="234.5" cy="632" rx="656.5" ry="632" fill={color} />
        </g>
      </svg>
    </>
  );
};

const SVGBackgroundTablet = ({ color }: { color: string }) => {
  return (
    <>
      <svg
        width="744"
        height="959"
        viewBox="0 0 744 959"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2269_5215"
          //   style="mask-type:alpha"
          style={{ maskType: "alpha" } as React.CSSProperties}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="744"
          height="959"
        >
          <rect width="744" height="959" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2269_5215)">
          <rect y="-111" width="744" height="436" fill="#FEEFDD" />
          <ellipse cx="372" cy="605" rx="797" ry="605" fill={color} />
        </g>
      </svg>
    </>
  );
};
const SVGBackgroundDesktop = ({ color }: { color: string }) => {
  return (
    <>
      <svg
        width="1280"
        height="972"
        viewBox="0 0 1280 972"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2269_5212"
          //   style="mask-type:alpha"
          style={{ maskType: "alpha" } as React.CSSProperties}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1280"
          height="972"
        >
          <rect width="1280" height="972" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2269_5212)">
          <rect y="-111" width="1280" height="398" fill="#FEEFDD" />
          <ellipse
            cx="636.928"
            cy="1047.21"
            rx="1534.77"
            ry="1047.21"
            fill={color}
          />
        </g>
      </svg>
    </>
  );
};
const SVGBackgroundXLDesktop = ({ color }: { color: string }) => {
  return (
    <>
      <svg
        width="1512"
        height="729"
        viewBox="0 0 1512 729"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2269_5206"
          //   style="mask-type:alpha"
          style={{ maskType: "alpha" } as React.CSSProperties}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1512"
          height="729"
        >
          <rect width="1512" height="729" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2269_5206)">
          <rect y="-75" width="1512" height="398" fill="#FEEFDD" />
          <ellipse cx="756" cy="724" rx="1000" ry="724" fill={color} />
        </g>
      </svg>
    </>
  );
};
const SVGBackgroundXXLDesktop = ({ color }: { color: string }) => {
  return (
    <>
      <svg
        width="2500"
        height="729"
        viewBox="0 0 2500 729"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2269_5209"
          //   style="mask-type:alpha"
          style={{ maskType: "alpha" } as React.CSSProperties}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="2500"
          height="729"
        >
          <rect width="2500" height="729" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2269_5209)">
          <rect width="2500" height="315" fill="#FEEFDD" />
          <ellipse cx="1250" cy="724" rx="1653.44" ry="724" fill={color} />
        </g>
      </svg>
    </>
  );
};

export default CTABackground;
