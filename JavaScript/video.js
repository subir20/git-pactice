console.log("Hello World!");

const video = document.querySelector("video");
const media = document.querySelector(".media");
const reload = document.querySelector(".reload");
const backward = document.querySelector(".backward");
const forward = document.querySelector(".forward");
const currentTime = document.querySelector(".current-time");
const videoDuration = document.querySelector(".video-duration");
const currentLength = document.querySelector(".current-length");
const volume = document.querySelector(".volume");
const expand = document.querySelector(".expand");
const icon = document.querySelector("#icon");
const like = document.querySelector(".like");
const view = document.querySelector("#view");
const course = document.querySelector(".course");
const show = document.querySelector(".show");


media.onclick = function () {
    if (media.classList.contains("pause") == true) {
        media.classList.remove("pause");
        video.pause();
    } else {
        media.classList.add("pause");
        video.play();
    }

}

video.onclick = function () {
    if (video.paused == true) {
        media.classList.add("pause");
        video.play();
    } else {
        media.classList.remove("pause");
        video.pause();
    }
}

reload.onclick = function () {
    media.classList.add("pause");
    video.load();
    video.play();
}

backward.onclick = function () {
    video.currentTime -= 5;
}

forward.onclick = function () {
    video.currentTime += 5;
}

video.ontimeupdate = function () {
    let currentSec = video.currentTime;
    let currentDate = new Date(null);
    currentDate.setSeconds(currentSec);
    let curTime = currentDate.toISOString().substr(11, 8);
    currentTime.innerHTML = curTime;

    currentLength.style.width = (video.currentTime * 100) / video.duration + "%";

    if (video.currentTime == video.duration) {
        video.load();
        currentLength.style.width = 1 + "%";
        media.classList.remove("pause");
    }
}

window.onload = function () {
    let videoSec = video.duration;
    let date = new Date(null);
    date.setSeconds(videoSec);
    let vidTime = date.toISOString().substr(11, 8);
    videoDuration.innerHTML = vidTime;

}

view.children[1].innerHTML = Number(view.children[1].innerHTML) + 1;

volume.children[1].onclick = function () {

    if (video.muted == false) {
        video.muted = true;
        volume.children[0].value = 0;
        volume.children[1].style.color = "red";
        volume.children[1].attributes[1].value = "Mute"
    } else {
        video.muted = false;
        volume.children[0].value = 0.8;
        volume.children[1].style.color = "";
        volume.children[1].attributes[1].value = "Unmute"
    }
}

volume.children[0].oninput = function () {
    video.volume = this.value;

    if (this.value == 0) {
        volume.children[1].style.color = "red";
    } else {
        volume.children[1].style.color = "";
    }
}

expand.onclick = function () {
    video.requestFullscreen();
}

icon.children[0].onclick = function () {

    if (this.style.color == "white") {
        this.style.color = "";
        this.style.backgroundColor = "";

        like.children[1].innerHTML = Number(like.children[1].innerHTML) - 1;
    } else {
        this.style.color = "white";
        this.style.backgroundColor = "black";

        like.children[1].innerHTML = Number(like.children[1].innerHTML) + 1;
    }


}

icon.children[2].onclick = function () {

    if (this.style.color == "white") {
        this.style.color = "";
        this.style.backgroundColor = "";
    } else {
        this.style.color = "white";
        this.style.backgroundColor = "black";
    }
}

icon.children[3].onclick = function () {

    alert("URL Copied!");
}


show.onclick = function () {
    course.classList.toggle("course-after-click");

    if (course.classList.contains("course-after-click") == true) {
        document.querySelector(".content").style.display = "flex";
        show.innerHTML = "Show Less"
        show.style.marginRight = "5px"
    } else {
        document.querySelector(".content").style.display = "none";
        show.innerHTML = "Show More";
        show.style.marginRight = "0px"
    }
}