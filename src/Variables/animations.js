export const transition = {duration: 1.4, ease: [.6, .01, .05, .9]}

export const verticalAppearance = {
    initialY: {
        opacity: 0,
        y: -100,
    },

    animateY: {
        opacity: 1,
        y: 0,
    },

    initialReverseY: {
        opacity: 0,
        y: 100,
    },

    animateReverseY: {
        opacity: 1,
        y: 0,
    },
}

export const horizontalAppearance = {
    initialX: {
        opacity: 0,
        x: -100,
    },

    animateX: {
        opacity: 1,
        x: 0,
    },

    initialReverseX: {
        opacity: 0,
        x: 300,
    },

    animateReverseX: {
        opacity: 1,
        x: 0,
    },
}