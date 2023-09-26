const body = document.getElementById(`container`)

body.style.backgroundColor = `#10162c`
body.style.margin = `0`
body.style.fontFamily = `arial`



const navegacion = (document.querySelector(`nav ul`))

navegacion.style.display = `flex`
navegacion.style.justifyContent = `center`
navegacion.style.justifyContent = `space-evenly`
navegacion.style.border = `4px solid #172745`
navegacion.style.width = `70%`
navegacion.style.margin = `0 auto`
navegacion.style.marginTop = `3rem`
navegacion.style.padding = `1rem`
navegacion.style.borderRadius = `10px`
navegacion.style.backgroundColor = `#e2e2e2`


const punto = Array.from(document.querySelectorAll(`nav ul li`))

punto.forEach((element) =>{
    element.style.display = `flex`
    element.style.listEstyle = `none`
    element.style.borderRadius = `10px`
    element.style.backgroundColor = `#10162c`
    element.style.boxShadow = `10px 10px 20px -9px rgba(0,0,0,0.75)`
})


const linea = Array.from(document.querySelectorAll(`nav ul li a`))

linea.forEach((element) =>{
    element.style.textDecoration = `none`
    element.style.color = `white`
    element.style.padding = `10px 2rem`
    element.style.fontWeight = `bold`
})


const segundoElemento = document.getElementById(`cuadro`)

segundoElemento.style.backgroundColor = `#e2e2e2`
segundoElemento.style.width = `70%`
segundoElemento.style.height = `600px`
segundoElemento.style.margin = `0 auto`
segundoElemento.style.marginTop = `3rem`
segundoElemento.style.borderRadius = `10px`
segundoElemento.style.padding = `1rem`
segundoElemento.style.color = `#10162c`
segundoElemento.style.display = `flex`
segundoElemento.style.justifyContent = `center`
segundoElemento.style.alignItems = `center`








