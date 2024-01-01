export const navigateTo = (id) => {
    const el = document.getElementById(id)
    // el && el.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth'});
}
