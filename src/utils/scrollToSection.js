const scrollToSection = async (elementRef = 0) => {
  window.scrollTo({
    top: elementRef?.current?.offsetTop - 72,
    behavior: "smooth",
  });
  return;
};
export default scrollToSection;
