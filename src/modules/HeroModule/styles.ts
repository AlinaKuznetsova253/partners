import heroBackgroundImage2x from "../../assets/images/image-hero-2x.jpg";

export const heroSectionStyles = {
  height: "100vh",
  backgroundImage: `url(${heroBackgroundImage2x})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.65)",
    zIndex: 1,
  },
};
