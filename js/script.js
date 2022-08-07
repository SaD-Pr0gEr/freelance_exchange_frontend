let loginBtn = document.getElementById("login-btn")
let loginModal = document.getElementById("login-modal")
let oldId = '';
loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block"
    oldId = loginModal.id
    loginModal.id = "modal-active"
})

close_ = document.getElementById("close")
close_.addEventListener("click", () => {
        let modal = document.getElementById("modal-active")
        modal.id = oldId
        modal.style.display = null
    })
