let getBody = document.getElementsByTagName("body")[0];

//dom change, close nav
document.addEventListener("DOMContentLoaded", () => {
  let getNavMobile = document.getElementById("container__header__mobile");
  getNavMobile.style.display = "none";
});

let getButtonMode = document.getElementsByClassName("btn-mode");
let getMenuMobile = document.getElementById("btn-menu");
let getCancel = document.getElementById("btn-cancel");

Array.from(getButtonMode).forEach((el) =>
  el.addEventListener("click", () => {
    ChangeToBeDarkMode();
  })
);

getMenuMobile.addEventListener("click", () => {
  let getNavMobile = document.getElementById("container__header__mobile");
  getNavMobile.style.display = "flex";
});

getCancel.addEventListener("click", () => {
  let getNavMobile = document.getElementById("container__header__mobile");
  getNavMobile.style.display = "none";
});

const ChangeToBeDarkMode = () => {
  // Change Body to be dark mode
  getBody.classList.toggle("dark-mode");


  // Put All Social Media Icon to be Dark Mode
  let dataIcon = [
    "telegram",
    "linkedin",
    "wa",
    "github",
    "facebook",
    "instagram",
    "card__header__icon__source__code",
    "card__header__icon__demo",
  ];
  dataIcon.forEach((item) => ChangeProcess(item));
};

//process to be dark mode or light mode
const ChangeProcess = (icon) => {
  switch (getBody.className === "dark-mode") {
    case true:
      processDataDarkMode.btnBMI();
      processDataDarkMode.navMobile();
      processDataDarkMode.btnMenu();
      processDataDarkMode.btnMode();
      processDataDarkMode.navLink();
      processDataDarkMode.iconSocialMedia(icon);
      processDataDarkMode.iconPortofolio();
      processDataDarkMode.hastagPortofolio();
      processDataDarkMode.textPortofolio();
      processDataDarkMode.linkPortofolio();
      processDataDarkMode.linkBlog();
      break;

    case false:
      processDataLightMode.btnBMI();
      processDataLightMode.navMobile();
      processDataLightMode.btnMenu();
      processDataLightMode.btnMode();
      processDataLightMode.navLink();
      processDataLightMode.iconSocialMedia(icon);
      processDataLightMode.iconPortofolio();
      processDataLightMode.hastagPortofolio();
      processDataLightMode.textPortofolio();
      processDataLightMode.linkPortofolio();
      processDataLightMode.linkBlog();
      break;
  }
};

const processDataLightMode = {
  btnBMI: () => {
    if(document.getElementById("btn__calculate") !== null){
      document.getElementById("btn__calculate").style.backgroundColor = "#0a192f";
      document.getElementById("btn__calculate").style.color ="#e6e6fa";
    }
  }, 
  localStorage: () => {
    localStorage.setItem('colorMode', "light-mode");
  }, 
  navMobile: () => {
    if (document.getElementById("container__header__mobile") !== null) {
      document.getElementById(
        "container__header__mobile"
      ).style.backgroundColor = "#ffffff";
      document.getElementById("container__header__mobile").style.color =
        "#0a192f";
    }
    if (document.getElementById("btn-cancel") !== null) {
      document.getElementById("btn-cancel").src =
        "/assets/icons/cancel-light.png";
    }
  },
  btnMenu: () => {
    if (document.getElementById("btn-menu") !== null)
      document.getElementById("btn-menu").src = "/assets/icons/menu-light.png";
  },
  btnMode: () => {
    if (document.getElementsByClassName("btn-mode") !== null)
      Array.from(document.getElementsByClassName("btn-mode")).forEach((el) => {
        el.src = "/assets/icons/moon.png";
      });
  },
  navLink: () => {
    if (document.getElementsByClassName("linkNav") !== null)
      Array.from(document.getElementsByClassName("linkNav")).forEach(
        (navData) => {
          navData.style.color = "#0A192F";
        }
      );
  },
  iconSocialMedia: (icon) => {
    let getIconDark = document.getElementById(`${icon}`);
    if (getIconDark !== null)
      getIconDark.src = `/assets/icons/socmed/${icon}-light.png`;
  },
  iconPortofolio: () => {
    let getListIconLight = document.getElementsByClassName(
      "card__header__icon__source__code"
    );
    Array.from(getListIconLight).forEach((tagIcon) => {
      tagIcon.src = `/assets/icons/socmed/github-light.png`;
    });
    let getDemoIcon = document.getElementsByClassName(
      "card__header__icon__demo"
    );
    Array.from(getDemoIcon).forEach((tagIcon) => {
      tagIcon.src = `/assets/icons/globe-light.png`;
    });
  },
  hastagPortofolio: () => {
    if (document.getElementsByClassName("card__button_hastag") !== null)
      Array.from(
        document.getElementsByClassName("card__button_hastag")
      ).forEach((hastagIconLight) => {
        hastagIconLight.style.backgroundColor = "#0A192F";
        hastagIconLight.style.border = "none";
        hastagIconLight.style.color = "#E6E6FA";
      });
  },
  textPortofolio: () => {
    if (document.getElementsByClassName("card__info__text") !== null)
      Array.from(document.getElementsByClassName("card__info__text")).forEach(
        (textCard) => {
          textCard.style.color = "#0A192F";
        }
      );
  },
  linkPortofolio: () => {
    if (document.getElementById("portofolio__detail__navlink") !== null)
      document.getElementById("portofolio__detail__navlink").style.color =
        "#0A192F";
    if (document.getElementById("portofolio__detail__img") !== null)
      document.getElementById(
        "portofolio__detail__img"
      ).src = `/assets/icons/arrow-light.png`;
  },
  linkBlog: () => {
    if (document.getElementById("blog__detail__navlink") !== null)
      document.getElementById("blog__detail__navlink").style.color = "#0A192F";
    if (document.getElementById("blog__detail__img") !== null)
      document.getElementById(
        "blog__detail__img"
      ).src = `/assets/icons/arrow-light.png`;
  },
};

const processDataDarkMode = {
  btnBMI: () => {
    if(document.getElementById("btn__calculate") !== null){
      document.getElementById("btn__calculate").style.backgroundColor = "#ffffff";
      document.getElementById("btn__calculate").style.color ="#0a192f";
    }
  }, 
  localStorage: () => {
    localStorage.setItem('colorMode', "dark-mode");
  }, 
  navMobile: () => {
    if (document.getElementById("container__header__mobile") !== null) {
      document.getElementById(
        "container__header__mobile"
      ).style.backgroundColor = "#0a192f";
      document.getElementById("container__header__mobile").style.color =
        "#e6e6fa";
    }
    if (document.getElementById("btn-cancel") !== null) {
      document.getElementById("btn-cancel").src =
        "/assets/icons/cancel-dark.png";
    }
  },
  btnMenu: () => {
    if (document.getElementById("btn-menu") !== null)
      document.getElementById("btn-menu").src = "/assets/icons/menu-dark.png";
  },
  btnMode: () => {
    if (document.getElementsByClassName("btn-mode") !== null)
      Array.from(document.getElementsByClassName("btn-mode")).forEach((el) => {
        el.src = "/assets/icons/sun.png";
      });
  },
  navLink: () => {
    if (document.getElementsByClassName("linkNav") !== null)
      Array.from(document.getElementsByClassName("linkNav")).forEach(
        (navData) => {
          navData.style.color = "#E6E6FA";
        }
      );
  },
  iconSocialMedia: (icon) => {
    let getIconDark = document.getElementById(`${icon}`);
    if (getIconDark !== null)
      getIconDark.src = `/assets/icons/socmed/${icon}-dark.png`;
  },
  iconPortofolio: () => {
    let getListIconDark = document.getElementsByClassName(
      "card__header__icon__source__code"
    );
    Array.from(getListIconDark).forEach((cardIcon) => {
      cardIcon.src = `/assets/icons/socmed/github-dark.png`;
    });

    let getDemoIcon = document.getElementsByClassName(
      "card__header__icon__demo"
    );
    Array.from(getDemoIcon).forEach((tagIcon) => {
      tagIcon.src = `/assets/icons/globe-dark.png`;
    });
  },
  hastagPortofolio: () => {
    if (document.getElementsByClassName("card__button_hastag") !== null)
      Array.from(
        document.getElementsByClassName("card__button_hastag")
      ).forEach((hastagIcon) => {
        hastagIcon.style.backgroundColor = "#E6E6FA";
        hastagIcon.style.border = "none";
        hastagIcon.style.color = "#0A192F";
      });
  },
  textPortofolio: () => {
    if (document.getElementsByClassName("card__info__text") !== null)
      Array.from(document.getElementsByClassName("card__info__text")).forEach(
        (textCard) => {
          textCard.style.color = "#E6E6FA";
        }
      );
  },
  linkPortofolio: () => {
    if (document.getElementById("portofolio__detail__navlink") !== null)
      document.getElementById("portofolio__detail__navlink").style.color =
        "#E6E6FA";
    if (document.getElementById("portofolio__detail__img") !== null)
      document.getElementById(
        "portofolio__detail__img"
      ).src = `/assets/icons/arrow-dark.png`;
  },
  linkBlog: () => {
    if (document.getElementById("blog__detail__navlink") !== null)
      document.getElementById("blog__detail__navlink").style.color = "#E6E6FA";
    if (document.getElementById("blog__detail__img") !== null)
      document.getElementById(
        "blog__detail__img"
      ).src = `/assets/icons/arrow-dark.png`;
  },
};
