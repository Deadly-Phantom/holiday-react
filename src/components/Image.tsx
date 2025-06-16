/* eslint-disable @next/next/no-img-element */

import { useState } from "react";


const Image = ({image, alt}: {image: string, alt: string}) => {
    const [fullScreen, setFullScreen] = useState(false);
  return (<>
  <div style={{
    display: fullScreen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 999,
    cursor: "pointer",
    transition: "opacity 0.3s ease",
    opacity: fullScreen ? 1 : 0,
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  }}></div>
    <img
        srcSet={`${image}&dpr=2 2x`}
        src={`${image}`}
        alt={alt || "Image"}
        style={fullScreen ? {
            height: "100%",
            objectFit: "contain",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000
        } : { height: "200px", objectFit: "cover", width: "100%" }}
        loading="lazy"
        onClick={() => {
            console.log("ToDo: Fullscreen");
            setFullScreen(!fullScreen);
        }}
    />
    </>
  )
}

export default Image