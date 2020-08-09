import React, {  useRef } from 'react';
import {motion} from 'framer-motion';

import FirstSection from '../components/FirstSection/firstSection.components';
import SecondSection from '../components/SecondSection/secondSection.conmponent';
import ThirdSection from '../components/ThirdSection/thirdSection.component';
import FourthSection from '../components/FourthSection/fourthSection.component';
import {PageTransitionVariants} from '../framer/variants';

const LandingPage: React.FC = () => {

    const thirdSectionRef = useRef<HTMLDivElement>(null)

    const scrollToInfo = () => {
        thirdSectionRef.current?.scrollIntoView()
    }

    return (
        <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={PageTransitionVariants}
        >
            <FirstSection scroll={scrollToInfo}/>
            <SecondSection />
            <ThirdSection ref={thirdSectionRef}/>
            <FourthSection/>
        </motion.div>
    )
}

export default LandingPage;