onload = () => {
  const timeout = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(timeout);
  }, 1000); // Adjust delay to align with flower animation
};
