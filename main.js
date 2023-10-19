document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
})