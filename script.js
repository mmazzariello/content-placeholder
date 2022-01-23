const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name_info = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

console.log("animated_bgs", animated_bgs);
console.log("animated_bg_texts", animated_bg_texts);

setTimeout(getData, 3000);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1600521692749-77d0c17a29ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />';

  title.innerHTML = "Lorem ipsum dolor, sit amet";
  excerpt.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, assumenda.";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name_info.innerHTML = "John Doe";
  date.innerHTML = "Jan 23, 2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bgtxt) =>
    bgtxt.classList.remove("animated-bg-texts")
  );
}
