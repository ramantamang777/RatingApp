const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".face-angry");
stars.forEach((eles, index) => {
    eles.addEventListener("click", () => {
        console.log("clicked", index);

        updatingRate(index);
    })
});


function updatingRate(index){
    stars.forEach((eles, idx) => {
        if(idx < index + 1)
        {
            eles.classList.add("active");
        }
        else
        {
            eles.classList.remove("active");
        }
    });

    emojis.forEach((emojieles) => {
        emojieles.style.transform = `translateX(-${index * 18}px)`;
    })
};
