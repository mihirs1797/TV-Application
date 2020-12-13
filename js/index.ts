import { Tv } from "./tv";

let video_playing = false;
let curr_volume = 0,
  prev_volume: number,
  curr_video = 0,
  curr_class: string;

const lg = new Tv("LG", "Z1", "4K", "16:9", "55 inch");
const sg = new Tv("Samsung", "F1", "4K", "4:3", "43 inch");
const mi = new Tv("Xiaomi", "A10", "FHD", "16:9", "49 inch");

const videos = [
  "./videos/1.mp4",
  "./videos/2.mp4",
  "./videos/3.mp4",
  "./videos/4.mp4",
  "./videos/5.mp4",
];

const unmute =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjkzLjAzOHB4IiBoZWlnaHQ9IjkzLjAzOHB4IiB2aWV3Qm94PSIwIDAgOTMuMDM4IDkzLjAzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTMuMDM4IDkzLjAzODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ2LjU0Nyw3NS41MjFjMCwxLjYzOS0wLjk0NywzLjEyOC0yLjQyOSwzLjgyM2MtMC41NzMsMC4yNzEtMS4xODcsMC40MDItMS43OTcsMC40MDJjLTAuOTY2LDAtMS45MjMtMC4zMzItMi42OTYtMC45NzMNCgkJbC0yMy4wOTgtMTkuMTRINC4yMjVDMS44OTIsNTkuNjM1LDAsNTcuNzQyLDAsNTUuNDA5VjM4LjU3NmMwLTIuMzM0LDEuODkyLTQuMjI2LDQuMjI1LTQuMjI2aDEyLjMwM2wyMy4wOTgtMTkuMTQNCgkJYzEuMjYyLTEuMDQ2LDMuMDEyLTEuMjY5LDQuNDkzLTAuNTY5YzEuNDgxLDAuNjk1LDIuNDI5LDIuMTg1LDIuNDI5LDMuODIzTDQ2LjU0Nyw3NS41MjFMNDYuNTQ3LDc1LjUyMXogTTYyLjc4NCw2OC45MTkNCgkJYy0wLjEwMywwLjAwNy0wLjIwMiwwLjAxMS0wLjMwNCwwLjAxMWMtMS4xMTYsMC0yLjE5Mi0wLjQ0MS0yLjk4Ny0xLjIzN2wtMC41NjUtMC41NjdjLTEuNDgyLTEuNDc5LTEuNjU2LTMuODIyLTAuNDA4LTUuNTA0DQoJCWMzLjE2NC00LjI2Niw0LjgzNC05LjMyMyw0LjgzNC0xNC42MjhjMC01LjcwNi0xLjg5Ni0xMS4wNTgtNS40ODQtMTUuNDc4Yy0xLjM2Ni0xLjY4LTEuMjQtNC4xMiwwLjI5MS01LjY1bDAuNTY0LTAuNTY1DQoJCWMwLjg0NC0wLjg0NCwxLjk3NS0xLjMwNCwzLjE5OS0xLjIzMWMxLjE5MiwwLjA2LDIuMzA1LDAuNjIxLDMuMDYxLDEuNTQ1YzQuOTc3LDYuMDksNy42MDYsMTMuNDg0LDcuNjA2LDIxLjM4DQoJCWMwLDcuMzU0LTIuMzI1LDE0LjM1NC02LjcyNSwyMC4yNEM2NS4xMzEsNjguMjE2LDY0LjAwNyw2OC44MzIsNjIuNzg0LDY4LjkxOXogTTgwLjI1Miw4MS45NzYNCgkJYy0wLjc2NCwwLjkwMy0xLjg2OSwxLjQ0NS0zLjA1MiwxLjQ5NWMtMC4wNTgsMC4wMDItMC4xMTcsMC4wMDQtMC4xNzcsMC4wMDRjLTEuMTE5LDAtMi4xOTMtMC40NDItMi45ODgtMS4yMzdsLTAuNTU1LTAuNTU1DQoJCWMtMS41NTEtMS41NS0xLjY1Ni00LjAyOS0wLjI0Ni01LjcwN2M2LjgxNC04LjEwNCwxMC41NjgtMTguMzk2LDEwLjU2OC0yOC45ODJjMC0xMS4wMTEtNC4wMTktMjEuNjExLTExLjMxNC0yOS44NDcNCgkJYy0xLjQ3OS0xLjY3Mi0xLjQwNC00LjIwMywwLjE3LTUuNzgzbDAuNTU0LTAuNTU1YzAuODIyLTAuODI2LDEuODktMS4yODEsMy4xMTUtMS4yNDJjMS4xNjMsMC4wMzMsMi4yNjMsMC41NDcsMy4wMzYsMS40MTcNCgkJYzguODE4LDkuOTI4LDEzLjY3NSwyMi43MTgsMTMuNjc1LDM2LjAxQzkzLjA0LDU5Ljc4Myw4OC40OTksNzIuMjA3LDgwLjI1Miw4MS45NzZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";
const mute =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0IDM4NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTI4OCwxOTJjMC0zNy42NTMtMjEuNzYtNzAuMTg3LTUzLjMzMy04NS44Njd2NDcuMTQ3bDUyLjM3Myw1Mi4zNzNDMjg3LjY4LDIwMS4xNzMsMjg4LDE5Ni41ODcsMjg4LDE5MnoiLz4NCgkJCTxwYXRoIGQ9Ik0zNDEuMzMzLDE5MmMwLDIwLjA1My00LjM3MywzOC45MzMtMTEuNTIsNTYuMzJsMzIuMzIsMzIuMzJDMzc2LDI1NC4wOCwzODQsMjI0LDM4NCwxOTINCgkJCQljMC05MS4zMDctNjMuODkzLTE2Ny42OC0xNDkuMzMzLTE4Ny4wOTNWNDguOTZDMjk2LjMyLDY3LjMwNywzNDEuMzMzLDEyNC4zNzMsMzQxLjMzMywxOTJ6Ii8+DQoJCQk8cG9seWdvbiBwb2ludHM9IjE5MiwyMS4zMzMgMTQ3LjQxMyw2NS45MiAxOTIsMTEwLjUwNyAJCQkiLz4NCgkJCTxwYXRoIGQ9Ik0yNy4yLDBMMCwyNy4yTDEwMC44LDEyOEgwdjEyOGg4NS4zMzNMMTkyLDM2Mi42NjdWMjE5LjJsOTAuNzczLDkwLjc3M2MtMTQuMjkzLDEwLjk4Ny0zMC40LDE5Ljg0LTQ4LjEwNywyNS4xNzNWMzc5LjINCgkJCQljMjkuMzMzLTYuNzIsNTYuMTA3LTIwLjE2LDc4LjYxMy0zOC42MTNMMzU2LjgsMzg0bDI3LjItMjcuMmwtMTkyLTE5MkwyNy4yLDB6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";
const pause =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwDQoJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+DQoJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzENCgkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";
const play =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjE2My44NjFweCIgaGVpZ2h0PSIxNjMuODYxcHgiIHZpZXdCb3g9IjAgMCAxNjMuODYxIDE2My44NjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2My44NjEgMTYzLjg2MTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTM0Ljg1NywzLjYxM0MyMC4wODQtNC44NjEsOC4xMDcsMi4wODEsOC4xMDcsMTkuMTA2djEyNS42MzdjMCwxNy4wNDIsMTEuOTc3LDIzLjk3NSwyNi43NSwxNS41MDlMMTQ0LjY3LDk3LjI3NQ0KCQljMTQuNzc4LTguNDc3LDE0Ljc3OC0yMi4yMTEsMC0zMC42ODZMMzQuODU3LDMuNjEzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=";

const tv_video = <HTMLVideoElement>document.querySelector("#tv-video");
tv_video.src = videos[curr_video];
curr_volume = 0.5;
tv_video.volume = curr_volume;

const volume_down = <HTMLButtonElement>document.querySelector("#volume-down");
volume_down.addEventListener("click", () => {
  curr_volume -= 0.1;
  tv_video.volume = curr_volume;
});

const volume_up = <HTMLButtonElement>document.querySelector("#volume-up");
volume_up.addEventListener("click", () => {
  curr_volume += 0.1;
  tv_video.volume = curr_volume;
});

const volume_mute = <HTMLButtonElement>document.querySelector("#volume-mute");
volume_mute.addEventListener("click", () => {
  if (curr_volume != 0) {
    prev_volume = curr_volume;
    curr_volume = 0;
    (<HTMLImageElement>document.querySelector("#image-mute")).src = unmute;
    tv_video.volume = curr_volume;
  } else {
    curr_volume = prev_volume;
    (<HTMLImageElement>document.querySelector("#image-mute")).src = mute;
    tv_video.volume = curr_volume;
  }
});

const play_pause = <HTMLButtonElement>document.querySelector("#pause-play");
play_pause.addEventListener("click", () => {
  if (!video_playing) {
    (<HTMLImageElement>document.querySelector("#image-play")).src = pause;
    tv_video.play();
    video_playing = true;
  } else {
    (<HTMLImageElement>document.querySelector("#image-play")).src = play;
    tv_video.pause();
    video_playing = false;
  }
});

const next_video = <HTMLButtonElement>document.querySelector("#next-video");
next_video.addEventListener("click", () => {
  (<HTMLImageElement>document.querySelector("#image-play")).src = play;
  (<HTMLImageElement>document.querySelector("#image-mute")).src = mute;
  if (curr_video != videos.length - 1) {
    tv_video.src = videos[++curr_video];
  } else {
    tv_video.src = videos[0];
  }
});

const prev_video = <HTMLButtonElement>document.querySelector("#prev-video");
prev_video.addEventListener("click", () => {
  (<HTMLImageElement>document.querySelector("#image-play")).src = play;
  (<HTMLImageElement>document.querySelector("#image-mute")).src = mute;
  if (curr_video != 0) {
    tv_video.src = videos[--curr_video];
  } else {
    tv_video.src = videos[videos.length - 1];
  }
});

const tv_select = <HTMLSelectElement>document.querySelector("#tv-options");
let tv_brand = <HTMLLIElement>document.querySelector("#tv-brand");
let tv_model = <HTMLLIElement>document.querySelector("#tv-model");
let tv_res = <HTMLLIElement>document.querySelector("#tv-resolution");
let tv_aspect = <HTMLLIElement>document.querySelector("#tv-aspect-ratio");
let tv_size = <HTMLLIElement>document.querySelector("#tv-size");

const tv_select_btn = <HTMLButtonElement>document.querySelector("#select-btn");
tv_select_btn.addEventListener("click", () => {
  curr_class = <string>tv_video.classList.item(0);
  switch (tv_select.selectedIndex) {
    case 0:
      listTvParams(lg);
      tv_video.classList.replace(curr_class, "lg-tv");
      tv_video.width = 550;
      break;
    case 1:
      listTvParams(sg);
      tv_video.classList.replace(curr_class, "sg-tv");
      tv_video.width = 430;
      break;
    case 2:
      listTvParams(mi);
      tv_video.classList.replace(curr_class, "mi-tv");
      tv_video.width = 490;
      break;
  }
});

const listTvParams = (obj: Tv) => {
  tv_brand.innerText = obj.getBrand();
  tv_model.innerText = obj.getModel();
  tv_res.innerText = obj.getResolution();
  tv_aspect.innerText = obj.getAspectRatio();
  tv_size.innerText = obj.getSize();
};
