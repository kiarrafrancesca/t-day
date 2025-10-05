document.getElementById("button1").addEventListener("click", function() {
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "inline-block";
});

document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "inline-block";
});

document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "inline-block";
});

document.getElementById("button4").addEventListener("click", function() {
    document.getElementById("b-container").style.display = "none";
    document.getElementById("web-content").style.display = "block";
});

function revealWebsite() {
    document.getElementById("b-container").style.display = "none";
    document.getElementById("web-content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function(){
    function showSection(home){
        document.querySelectorAll("section").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(home).style.display = "block";
    }
    showSection("home");

    document.querySelectorAll(".nav li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = this.getAttribute("href").substring(1);
            showSection(targetSection);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function showSection(home) {
        document.querySelectorAll("section").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(home).style.display = "block";
    }
    
    showSection("home"); 

    document.querySelectorAll(".nav2 li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let targetSection = this.getAttribute("href").substring(1);
            showSection(targetSection);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".list input");
    const contents = document.querySelectorAll(".content");

    function showContent(selectedId) {
        contents.forEach(content => content.style.display = "none");

        const selectedContent = document.getElementById("content-" + selectedId);
        if (selectedContent) {
            selectedContent.style.display = "block";
        }
    }

    inputs.forEach(input => {
        input.addEventListener("change", function () {
            showContent(this.value);
        });
    });

    const checkedInput = document.querySelector(".list input:checked");
    if (checkedInput) {
        showContent(checkedInput.value);
    }
});

$(document).ready(function () {
    $('input[name="slider"]').on('change', function () {
        let selectedId = $('input[name="slider"]:checked').attr('id');
        
        $('.song-info').hide();

        if (selectedId === "item-1") {
            $('#song-info-1').show();
        } else if (selectedId === "item-2") {
            $('#song-info-2').show();
        } else if (selectedId === "item-3") {
            $('#song-info-3').show();
        } else if (selectedId === "item-4") {
            $('#song-info-4').show();
        } else if (selectedId === "item-5") {
            $('#song-info-5').show();
        } else if (selectedId === "item-6") {
            $('#song-info-6').show();
        }
    });

    $('input[name="slider"]:checked').trigger('change');
});

function changeImage(imageSrc) {
    document.getElementById("main-img").src = imageSrc;
}