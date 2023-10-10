const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function followthemousefun(){
    window.addEventListener("mousemove", function(dets) {
        console.log(dets.clientX, dets.clientY);
        document.querySelector("#followthemouse").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px )`;

    })
}
followthemousefun();