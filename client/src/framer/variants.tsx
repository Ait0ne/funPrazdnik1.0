
export const GalleryVariants = {
    visible: { opacity: 1, x:0, transition: { duration: 1.5, staggerChildren: 0.1} },
    hidden: { opacity: 0, x: 100, transition: { duration: 1.5, staggerChildren: 0.1, staggerDirection: -1} },
    initial: {opacity: 0, x: 100}

}

export const AboutUsVariants = {
    visible: { opacity: 1, x:0, transition: { duration: 1.5, staggerChildren: 0.1} },
    hidden: { opacity: 0, x: -100, transition: { duration: 1.5, staggerChildren: 0.1, staggerDirection: -1} },
    initial: {opacity: 0, x: -100}
}

export const InfoTextVariants = {
    hidden: {
        opacity: 0,
        height:0,
        transition: {
            duration: 1
        }
    },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: {
            duration: 1
        }
    }
}

export const SectionVariants = {
    hidden: {  opacity: 0 },
    visible: {  opacity: 1,     transition: {
        duration: 1.2,
        staggerChildren: 0.2,
        ease: "easeIn"
    } },
}

export const PageTransitionVariants = {
    initial:{ opacity: 0},
    animate:{ opacity: 1, transition: {duration: 1.5}},
    exit:{ opacity: 0,  transition: {duration: 1}}
}

export const EventViewVariants = { 
    hidden: {x: '100%',transition: {staggerChildren: 0.05, staggerDirection:-1, duration: 1}},
    visible: {x: 0, transition: {staggerChildren: 0.5, duration: 1}},

}

export const EventItemVariants = {
    hidden: {x: 100, opacity: 0, transition: {duration: 0.8}},
    visible: {x: 0, opacity: 1, transition: {duration: 0.8, delay: 0.2}}
}

