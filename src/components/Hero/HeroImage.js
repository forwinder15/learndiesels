import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function HeroImage() {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        alt="hero image"
        placeholder="blurred"
        src='../../images/png/hero-background.png'
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          layout: "fullWidth",
          display: "grid",
        }} >
      </div>
      </div>
  )
}