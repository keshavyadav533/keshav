const config = {
  title: "Keshav Yadav | Full-Stack Developer Student",
  description: {
    long: "Explore the portfolio of Keshav Yadav, a passionate full-stack web development student specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work and learning journey. Let's build something amazing together!",
    short:
      "Discover the portfolio of Keshav Yadav, a full-stack web development student creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Keshav Yadav",
    "portfolio",
    "full-stack developer student",
    "web development student",
    "web development",
    "3D animations",
    "interactive websites",
    "student portfolio",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Keshav Yadav",
  email: "keshavyadav2005562@gmail.com",
  site: "https://keshav-yadav-portfolio.vercel.app",

  // for github stars button
  githubUsername: "keshavyadav533",
  githubRepo: "keshav_s84",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/keshavyadav533?s=21",
    linkedin: "https://www.linkedin.com/in/keshav-yadav-9a28a5277",
    instagram: "https://www.instagram.com/keshavyadav562",
    facebook: "https://www.facebook.com/keshavyadav562/",
    github: "https://github.com/keshavyadav533",
  },
};
export { config };
