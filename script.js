let form = document.getElementById("form");
let serch = document.getElementById("serch");
let profile_box_h = document.getElementById("profile_box_h");
let followers_container_box_number = document.getElementById(
  "followers_container_box_number"
);
let followers_container_box_number2 = document.getElementById(
  "followers_container_box_number2"
);
let followers_container_box_number3 = document.getElementById(
  "followers_container_box_number3"
);
let profile_img1 = document.getElementById("profile_img1");
let profile_img2 = document.getElementById("profile_img2");
let profile_img3 = document.getElementById("profile_img3");
let section_contaiener_p = document.getElementById("section_contaiener_p");
let profile_box_contant_p = document.getElementById("profile_box_contant_p");
let contact_container_box_p = document.getElementById(
  "contact_container_box_p"
);
let contact_container_box_p2 = document.getElementById(
  "contact_container_box_p2"
);
let contact_container_box_p3 = document.getElementById(
  "contact_container_box_p3"
);
let profile_box_contant_name_p = document.getElementById(
  "profile_box_contant_name_p"
);
let not_found = document.getElementById("not_found");
let serch_btn = document.getElementById("serch_btn");
form.addEventListener("submit", (value) => {
  value.preventDefault();
  let username2 = serch.value.trim();
  if (username2 === "") {
    alert("შეიყვანეთ სწორი სახელი!");
    return;
  }
  let username = serch.value;
  console.log(username);
  async function GetUsers() {
    try {
      let Data = await fetch(`https://api.github.com/users/${username}`);
      let user = await Data.json();
      console.log(user);
      if (!user.login) {
        not_found.textContent = "No results";
      } else {
        not_found.textContent = "";
      }
      profile_img1.src = user.avatar_url;
      profile_img2.src = user.avatar_url;
      profile_img3.src = user.avatar_url;
      profile_box_h.textContent = user.login;
      followers_container_box_number.textContent = user.public_repos;
      followers_container_box_number2.textContent = user.followers;
      followers_container_box_number3.textContent = user.following;

      if (user.bio === null) {
        section_contaiener_p.textContent = "This user has no bio";
      } else {
        section_contaiener_p.textContent = user.bio;
      }
      profile_box_contant_p.textContent = user.created_at;

      if (user.location === null) {
        contact_container_box_p.textContent = " Not Available";
      } else {
        contact_container_box_p.textContent = user.location;
        contact_container_box_p.href = `https://www.google.com/search?q=${user.location}`;
      }
      contact_container_box_p2.href = user.html_url;
      if (user.twitter_username === null) {
        contact_container_box_p3.textContent = "Not Available";
      } else {
        contact_container_box_p3.textContent = user.twitter_username;
      }
      profile_box_contant_name_p.textContent = `id:${user.id}`;
    } catch (error) {
      console.error("სამწუხაროდ ლინკი არის დაზიანებული");
    }
  }
  GetUsers();
  serch.value = "";
});

let darkMode = localStorage.getItem("darkmode", "1");

function toggleDarkMode(isDarkMode) {
  if (isDarkMode) {
    body.classList.add("darker_background");
    header_h.classList.add("color_white");
    serch_box.classList.add("dark_background");
    serch.classList.add("dark_background");
    serch.classList.add("color_white");
    section_contaiener.classList.add("dark_background");
    profile_box_h.classList.add("color_white");
    section_contaiener_p.classList.add("color_white");
    profile_box_contant_p.classList.add("color_white");
    followers_container.classList.add("darker_background");
    followers_container_box_header.classList.add("color_white");
    followers_container_box_header2.classList.add("color_white");
    followers_container_box_header3.classList.add("color_white");
    followers_container_box_number.classList.add("color_white");
    followers_container_box_number2.classList.add("color_white");
    followers_container_box_number3.classList.add("color_white");
    contact_container_box_p.classList.add("color_white");
    contact_container_box_p2.classList.add("color_white");
    contact_container_box_p3.classList.add("color_white");
    contact_container_box_p4.classList.add("color_white");
    header_p.classList.add("color_white");
    header_img.src = "./photos/002-sun.svg";
    header_p.textContent = "LIGHT";
    contact_img1.src = "./photos/003-pinwhite1.svg";
    contact_img2.src = "./photos/002-urlwhite.svg";
    contact_img4.src = "./photos/001-office-buildingwhite.svg";
  } else {
    body.classList.remove("darker_background");
    header_h.classList.remove("color_white");
    serch_box.classList.remove("dark_background");
    serch.classList.remove("dark_background");
    serch.classList.remove("color_white");
    section_contaiener.classList.remove("dark_background");
    profile_box_h.classList.remove("color_white");
    section_contaiener_p.classList.remove("color_white");
    profile_box_contant_p.classList.remove("color_white");
    followers_container.classList.remove("darker_background");
    followers_container_box_header.classList.remove("color_white");
    followers_container_box_header2.classList.remove("color_white");
    followers_container_box_header3.classList.remove("color_white");
    followers_container_box_number.classList.remove("color_white");
    followers_container_box_number2.classList.remove("color_white");
    followers_container_box_number3.classList.remove("color_white");
    contact_container_box_p.classList.remove("color_white");
    contact_container_box_p2.classList.remove("color_white");
    contact_container_box_p3.classList.remove("color_white");
    contact_container_box_p4.classList.remove("color_white");
    header_p.classList.remove("color_white");
    header_img.src = "./photos/moon.svg";
    header_p.textContent = "DARK";
    contact_img1.src = "./photos/003-pin.svg";
    contact_img2.src = "./photos/002-url.svg";
    contact_img4.src = "./photos/001-office-building.svg";
  }
}

header_box_change.addEventListener("click", () => {
  darkMode = !darkMode;
  localStorage.setItem("darkmode", darkMode ? "1" : "0");
  toggleDarkMode(darkMode);
});

if (localStorage.getItem("darkmode") === "1") {
  darkMode = true;
  toggleDarkMode(true);
} else {
  darkMode = false;
  toggleDarkMode(false);
}
