// @flow
export const stickyHeader = () => {
  console.log('aramsamsam');
  //to check when element get's position sticky
  var observer = new IntersectionObserver(
    function (entries) {
      // no intersection
      if (entries[0].intersectionRatio === 0) {
        console.log('aram sticky');
        document
          .querySelector('#headerContainer')
          .classList.add('stickyHeader');
      }
      // fully intersects
      else if (entries[0].intersectionRatio === 1) {
        console.log('aram non-sticky');
        document
          .querySelector('#headerContainer')
          .classList.remove('stickyHeader');
      }
    },
    { threshold: [0, 1] }
  );
  observer.observe(document.querySelector('#headerContainerTop'));
};
