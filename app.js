let button = document.querySelector("a");
button.forEach(btn => {
    btn.addEventListener("click", function(s){
        let z = s.clientX - s.target.offsetLeft;
        let y = s.clientY - s.target.offsetTop;


        let span1 = document.createElement("span");
        span1.style.left = z + "px";
        span1.style.top = y + "px";
        this.appendChild(span1);

        setTimeout(() => {
            span1.remove()
        }, 800);

    })
});