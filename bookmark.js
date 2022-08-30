document.getElementById("btn1").style.borderBottom =
  "3px solid hsl(0, 94%, 66%)";
function changetab(n) {
  switch (n) {
    case 1:
      document.getElementById("show1").style.display = "flex";
      document.getElementById("btn1").style.borderBottom =
        "3px solid hsl(0, 94%, 66%)";
      document.getElementById("show2").style.display = "none";
      document.getElementById("btn2").style.borderBottom =
        "1px solid hsl(229, 8%, 80%)";
      document.getElementById("show3").style.display = "none";
      document.getElementById("btn3").style.borderBottom =
        "1px solid hsl(229, 8%, 80%)";

      break;
    case 2:
      document.getElementById("show2").style.display = "flex";
      document.getElementById("btn2").style.borderBottom =
        "3px solid hsl(0, 94%, 66%)";
      document.getElementById("show1").style.display = "none";
      document.getElementById("btn1").style.borderBottom =
        "1px solid hsl(229, 8%, 80%)";
      document.getElementById("show3").style.display = "none";
      document.getElementById("btn3").style.borderBottom =
        "1px solid hsl(229, 8%, 80%)";
      break;
    case 3:
      document.getElementById("show3").style.display = "flex";
      document.getElementById("btn3").style.borderBottom =
        "3px solid hsl(0, 94%, 66%)";
      document.getElementById("show2").style.display = "none";
      document.getElementById("btn2").style.borderBottom =
        "1px solid hsl(229, 8%, 80%)";
      document.getElementById("show1").style.display = "none";
      document.getElementById("btn1").style.borderBottom =
        "1px solid hsl(229, 8%, 80%)";
      break;
  }
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid :)");
    $result.css("background-color", "green");
    document.getElementById("email").style.border = "2px solid green";
    document.getElementById("email").style.backgroundImage = "none";
  } else {
    $result.text("Whoops, make sure it's an email");
    $result.css("background-color", "hsl(0, 94%, 66%)");
    document.getElementById("email").style.border =
      "2px solid hsl(0, 94%, 66%)";
    document.getElementById("email").style.backgroundImage =
      "url('./images/icon-error.svg')";
    document.getElementById("email").style.backgroundRepeat = "no-repeat";
    document.getElementById("email").style.backgroundPosition =
      "center right 15px";
  }
  return false;
};

document.getElementById("email").addEventListener("input", validate);

document.getElementById("open").addEventListener("click", () => {
  document.getElementById("activenav").classList.toggle("active");
  if (document.getElementById("activenav").classList.contains("active")) {
    document.getElementById("activenav").style.display = "block";
    document.getElementById("close").style.display = "block";
    document.getElementById("menu").style.display = "none";
  } else {
    document.getElementById("activenav").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none";
  }
});
