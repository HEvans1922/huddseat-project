const chaiwala = document.getElementById("chaiwala")
const topTaste = document.getElementById("top-taste")
const centros = document.getElementById("centros")

function filter(pref) {
    if (pref === "vegan") {
        chaiwala.classList.add("visible")
        topTaste.classList.add("visible")
        centros.classList.remove("visible")
    }

    if (pref === "halal") {
        chaiwala.classList.add("visible")
        topTaste.classList.remove("visible")
        centros.classList.remove("visible")
    }

    if (pref === "takeaway") {
        chaiwala.classList.remove("visible")
        topTaste.classList.add("visible")
        centros.classList.add("visible")
    }

    if (pref === "eatIn") {
        chaiwala.classList.add("visible")
        topTaste.classList.remove("visible")
        centros.classList.remove("visible")
    }

    if (pref === "clear") {
        chaiwala.classList.add("visible")
        topTaste.classList.add("visible")
        centros.classList.add("visible")
    }

}

