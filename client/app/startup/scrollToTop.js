// @flow
export const scrollToTop = () => {
  console.log('iepiep');
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  });
};
