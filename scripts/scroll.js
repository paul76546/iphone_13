const links = document.querySelectorAll('.header-menu__item a')

seamless.polyfill();

links.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault()

        const id = element.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: "smooth",
                block: "start",
                top: 150,
                left: 0
            })
        }else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });

        }
    })
})