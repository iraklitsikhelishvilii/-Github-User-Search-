// let header_box_change = document.getElementById("header_box_change");
// let header_h = document.getElementById("header_h");
// let body = document.getElementById("body");
// let serch_box = document.getElementById("serch_box");
// let serch = document.getElementById("serch");
// let section_contaiener = document.getElementById("section_contaiener");
// let profile_box_h = document.getElementById("profile_box_h");
// let profile_box_contant_p = document.getElementById("profile_box_contant_p");
// let section_contaiener_p = document.getElementById("section_contaiener_p");
// let followers_container = document.getElementById("followers_container");
// let followers_container_box_header2 = document.getElementById(
//   "followers_container_box_header2"
// );
// let followers_container_box_header = document.getElementById(
//   "followers_container_box_header"
// );
// let followers_container_box_header3 = document.getElementById(
//   "followers_container_box_header3"
// );
// let followers_container_box_number = document.getElementById(
//   "followers_container_box_number"
// );
// let followers_container_box_number2 = document.getElementById(
//   "followers_container_box_number2"
// );
// let followers_container_box_number3 = document.getElementById(
//   "followers_container_box_number3"
// );
// let contact_container_box_p = document.getElementById(
//   "contact_container_box_p"
// );
// let contact_container_box_p2 = document.getElementById(
//   "contact_container_box_p2"
// );
// let contact_container_box_p3 = document.getElementById(
//   "contact_container_box_p3"
// );
// let contact_container_box_p4 = document.getElementById(
//   "contact_container_box_p4"
// );
// let header_p = document.getElementById("header_p");
// let header_img = document.getElementById("header_img");
// let contact_img1 = document.getElementById("contact_img1");
// let contact_img2 = document.getElementById("contact_img2");
// let contact_img4 = document.getElementById("contact_img4");

// header_box_change.addEventListener("click", () => {
//   body.classList.toggle("darker_background");
//   header_h.classList.toggle("color_white");
//   serch_box.classList.toggle("dark_background");
//   serch.classList.toggle("dark_background");
//   serch.classList.toggle("color_white");
//   section_contaiener.classList.toggle("dark_background");
//   profile_box_h.classList.toggle("color_white");
//   section_contaiener_p.classList.toggle("color_white");
//   profile_box_contant_p.classList.toggle("color_white");
//   followers_container.classList.toggle("darker_background");
//   followers_container_box_header.classList.toggle("color_white");
//   followers_container_box_header2.classList.toggle("color_white");
//   followers_container_box_header3.classList.toggle("color_white");
//   followers_container_box_number.classList.toggle("color_white");
//   followers_container_box_number2.classList.toggle("color_white");
//   followers_container_box_number3.classList.toggle("color_white");
//   contact_container_box_p.classList.toggle("color_white");
//   contact_container_box_p2.classList.toggle("color_white");
//   contact_container_box_p3.classList.toggle("color_white");
//   contact_container_box_p4.classList.toggle("color_white");
//   header_p.classList.toggle("color_white");
//   header_h.classList.contains("color_white")
//     ? (header_img.src = "./photos/002-sun.svg")
//     : (header_img.src = "./photos/moon.svg");
//   header_h.classList.contains("color_white")
//     ? (header_p.textContent = "LIGHT")
//     : (header_p.textContent = "DARK");
//   header_h.classList.contains("color_white")
//     ? (contact_img1.src = "./photos/003-pinwhite1.svg")
//     : (contact_img1.src = "./photos/003-pin.svg");
//   header_h.classList.contains("color_white")
//     ? (contact_img2.src = "./photos/002-urlwhite.svg")
//     : (contact_img2.src = "./photos/002-url.svg");
//   header_h.classList.contains("color_white")
//     ? (contact_img4.src = "./photos/001-office-buildingwhite.svg")
//     : (contact_img4.src = "./photos/001-office-building.svg");
// });
///--------------------------------------------------------------------
let header_box_change = document.getElementById("header_box_change");
let header_h = document.getElementById("header_h");
let body = document.getElementById("body");
let serch_box = document.getElementById("serch_box");
let serch = document.getElementById("serch");
let section_contaiener = document.getElementById("section_contaiener");
let profile_box_h = document.getElementById("profile_box_h");
let profile_box_contant_p = document.getElementById("profile_box_contant_p");
let section_contaiener_p = document.getElementById("section_contaiener_p");
let followers_container = document.getElementById("followers_container");
let followers_container_box_header2 = document.getElementById(
  "followers_container_box_header2"
);
let followers_container_box_header = document.getElementById(
  "followers_container_box_header"
);
let followers_container_box_header3 = document.getElementById(
  "followers_container_box_header3"
);
let followers_container_box_number = document.getElementById(
  "followers_container_box_number"
);
let followers_container_box_number2 = document.getElementById(
  "followers_container_box_number2"
);
let followers_container_box_number3 = document.getElementById(
  "followers_container_box_number3"
);
let contact_container_box_p = document.getElementById(
  "contact_container_box_p"
);
let contact_container_box_p2 = document.getElementById(
  "contact_container_box_p2"
);
let contact_container_box_p3 = document.getElementById(
  "contact_container_box_p3"
);
let contact_container_box_p4 = document.getElementById(
  "contact_container_box_p4"
);
let header_p = document.getElementById("header_p");
let header_img = document.getElementById("header_img");
let contact_img1 = document.getElementById("contact_img1");
let contact_img2 = document.getElementById("contact_img2");
let contact_img4 = document.getElementById("contact_img4");
let index = 0;

header_box_change.addEventListener("click", () => {
  localStorage.setItem("darkmode", index++);
});
if (localStorage.getItem("darkmode") % 2 == 0) {
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
  header_h.classList.contains("color_white")
    ? (header_img.src = "./photos/002-sun.svg")
    : (header_img.src = "./photos/moon.svg");
  header_h.classList.contains("color_white")
    ? (header_p.textContent = "LIGHT")
    : (header_p.textContent = "DARK");
  header_h.classList.contains("color_white")
    ? (contact_img1.src = "./photos/003-pinwhite1.svg")
    : (contact_img1.src = "./photos/003-pin.svg");
  header_h.classList.contains("color_white")
    ? (contact_img2.src = "./photos/002-urlwhite.svg")
    : (contact_img2.src = "./photos/002-url.svg");
  header_h.classList.contains("color_white")
    ? (contact_img4.src = "./photos/001-office-buildingwhite.svg")
    : (contact_img4.src = "./photos/001-office-building.svg");
} else {
  body.classList.add("body");
  header_h.classList.add("header_h");
  serch_box.classList.add("serch_box");
  serch.classList.add("serch");
  serch.classList.add("serch");
  section_contaiener.classList.add("section_contaiener");
  profile_box_h.classList.add("profile_box_h");
  section_contaiener_p.classList.add("section_contaiener_p");
  profile_box_contant_p.classList.add("profile_box_contant_p");
  followers_container.classList.add("followers_container");
  followers_container_box_header.classList.add(
    "followers_container_box_header"
  );
  followers_container_box_header2.classList.add(
    "followers_container_box_header"
  );
  followers_container_box_header3.classList.add(
    "followers_container_box_header"
  );
  followers_container_box_number.classList.add(
    "followers_container_box_number"
  );
  followers_container_box_number2.classList.add(
    "followers_container_box_number"
  );
  followers_container_box_number3.classList.add(
    "followers_container_box_number"
  );
  contact_container_box_p.classList.add("contact_container_box_p");
  contact_container_box_p2.classList.add("contact_container_box_p");
  contact_container_box_p3.classList.add("contact_container_box_p");
  contact_container_box_p4.classList.add("contact_container_box_p");
  header_p.classList.add("header_p");
  header_h.classList.contains("header_h")
    ? (header_img.src = "./photos/moon.svg")
    : (header_img.src = "./photos/002-sun.svg");
  header_h.classList.contains("header_h")
    ? (header_p.textContent = "DARK")
    : (header_p.textContent = "LIGHT");
  header_h.classList.contains("header_h")
    ? (contact_img1.src = "./photos/003-pin.svg")
    : (contact_img1.src = "./photos/003-pinwhite1.svg");
  header_h.classList.contains("header_h")
    ? (contact_img2.src = "./photos/002-url.svg")
    : (contact_img2.src = "./photos/002-urlwhite.svg");
  header_h.classList.contains("header_h")
    ? (contact_img4.src = "./photos/001-office-building.svg")
    : (contact_img4.src = "./photos/001-office-buildingwhite.svg");
}

