document.addEventListener("DOMContentLoaded", function() {
    const exploreBtn = document.getElementById("exploreBtn");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", function(e) {
            e.preventDefault();
            
            this.innerHTML = '<span class="box27"></span> Loading...';
        });
    }
});

function handleClick(btn) {
    btn.innerText = "Loading...";
}
