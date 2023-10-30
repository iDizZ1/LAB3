document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
})

document.querySelectorAll(".accord").forEach((el) => {
    el.addEventListener("click", () => {
        let cont = el.nextElementSibling;

        if(cont.style.maxHeight) {
            document.querySelectorAll(".cont").forEach((el) => el.style.maxHeight = null) 
        } else {
            document.querySelectorAll(".cont").forEach((el) => el.style.maxHeight = null) 
            cont.style.maxHeight = cont.scrollHeight + "px" 
        }
    })
})