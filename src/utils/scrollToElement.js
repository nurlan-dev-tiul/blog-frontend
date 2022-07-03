export const scrollToElement = (ref) => {
    ref.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    })
}

export const scrollToUp = () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
}