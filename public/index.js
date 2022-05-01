const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".face-angry");
const colorArray = ["red", "grey", "blue", "rgb(234, 177, 44)", "green"];
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
        emojieles.style.color = colorArray[index];
    })
};
