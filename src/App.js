import styles from "./style";
import { Navbar, Hero, DailyDeals, ExploreBestSelling, Footer, NewArrival, SignUp, WhatIsTrending,HolidaySale } from "./components";

const App = () => (
  <div className={`bg-inherit w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
        <Navbar/>
    </div>
    </div>
    <div className={`${styles.bgPrimary} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`${styles.bgPrimary} ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ExploreBestSelling/>
        <HolidaySale/>
        </div>
    </div>
    <div className={`${styles.bgPrimary} ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <WhatIsTrending/>
        <NewArrival/>
        <DailyDeals/>
        <SignUp/>
        </div>
    </div>
    <div className={`${styles.bgPrimary} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;