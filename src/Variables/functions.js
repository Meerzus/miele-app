export const navigateTo = (id) => {
    const el = document.getElementById(id)
    el && el.scrollIntoView({ behavior: "smooth" });
}

export const navigateToHorizontal = (id) => {
    const el = document.getElementById(id)
    el && el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}