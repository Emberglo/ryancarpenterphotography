import { Fragment } from 'react';
import HomeHero from './components/HomeHero/HomeHero';
// import HomeHero from './components/HomeHero/HomeHero';
// import WhatWeDo from './components/WhatWeDo/WhatWeDo';
// import WhatWeDoMobile from './components/WhatWeDo/WhatWeDoMobile';
// import WhoWeServe from './components/WhoWeServe/WhoWeServe';
// import Technologies from './components/Technologies/Technologies';
// import Industries from './components/Industries/Industries';
// import MobileIndustries from './components/Industries/MobileIndustries';
// import BlogPreview from './components/BlogPreview/BlogPreview';
// import ContactForm from '../../components/ContactForm/ContactForm';

function HomePage() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const breakpoint = 900;

//   useEffect(() => {
//     const handleResizeWindow = () => setWidth(window.innerWidth);
//      window.addEventListener("resize", handleResizeWindow);
//      return () => {
//        window.removeEventListener("resize", handleResizeWindow);
//      };
//    }, []);

  return (
    <Fragment>
        <HomeHero />
    </Fragment>
  );
}

export default HomePage;