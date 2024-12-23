
const box = document.querySelectorAll(".box")
const item = document.querySelectorAll(".item")

box.forEach(item => {
    item.addEventListener("dragover", e => {
        e.preventDefault()
        const draggabled = document.querySelector(".draggabled")

        if(Array.from(item.childNodes).includes(e.target)){
            const measures = e.target.getBoundingClientRect()
            const pointInTheCenter = measures.y + (measures.height / 2)
            
            e.clientY < pointInTheCenter 
                ? e.target.insertAdjacentElement("beforebegin", draggabled)
                : e.target.insertAdjacentElement("afterend", draggabled)
        } else {
            item.appendChild(draggabled)
        }
    })
})

item.forEach(item => {
    item.addEventListener("dragstart", () => item.classList.add("draggabled"))
    item.addEventListener("dragend", () => item.classList.remove("draggabled"))
})
