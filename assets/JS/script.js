/* DIV CONTENT LOADERS */

// loads the welcome content
$(document).ready(function() {
  $(".to_welcome").click(function(e) {
    $(".content").load("welcome.html");
    e.preventDefault();
    })
});

// loads the taxonomy facts section
$(document).ready(function() {
  $(".to_taxonomy").click(function(e) {
    $(".content").load("taxonomy.html");
    e.preventDefault();
    })
});

// loads the cetacea order content
$(document).ready(function() {
  $(".to_cetacea").click(function(e) {
    $(".content").load("cetacea.html");
    e.preventDefault();
    })
});

// loads the mysticeti content
$(document).ready(function() {
  $(".to_mysticeti").click(function(e) {
    $(".content").load("mysticeti.html");
    e.preventDefault();
    })
});

// loads the odontoceti content
$(document).ready(function() {
  $(".to_odontoceti").click(function(e) {
    $(".content").load("odontoceti.html");
    e.preventDefault();
    })
});

/* MODAL IMAGE VIEWER */

$(document).ready(function() {
  $(".capt").click(function(e) {
    const nodes = document.getElementsByClassName("capt");
    const spot = $(this).attr("value");
    const setImg = document.getElementById("setImg");
    const subTitle = document.getElementById("subtitle");

    $(".modal, .closeModal").fadeIn(300);
    $(".modal").focus();
    setImg.src = nodes[spot].src;
    subTitle.innerHTML = nodes[spot].alt;
    e.preventDefault();
  })

  $(".close").click(function(e) {
    $(".modal, .closeModal").fadeOut(300);
    e.preventDefault();
  })

  $(".closeModal").click(function(e) {
    $(".modal, .closeModal").fadeOut(300);
    e.preventDefault();
  })

});

/* IMAGE FLIPPER */

// flips the welcome image
$(document).ready(function() {
  $(".flipImg, .imgVis").click(function(e) {

    const emptyMultiBrowser = {
      "transform": "",
      "-webkit-transform": "",
      "-moz-transform": "",
      "-ms-transform": "",
      "-o-transform": ""
    };

    const multiBrowser = {
      "transform": "rotatey(-180deg)",
      "-webkit-transform": "rotatey(-180deg)",
      "-moz-transform": "rotatey(-180deg)",
      "-ms-transform": "rotatey(-180deg)",
      "-o-transform": "rotatey(-180deg)"
    };

    if ($(this).css("transform") === 'none') {
      $(this).css(multiBrowser);
    } else {
        $(this).css(emptyMultiBrowser);
    };

    e.preventDefault();
  });
});

/* MENU HIDE/SHOW FUNCTIONs */

// hides/shows drop-down menu in linkbar, toggles up/down arrow next to INFO
$(document).ready(function() {
  $('.js-accordion-trigger').bind('click', function(e){
    if ($(".material-icons.arrow").html() === "keyboard_arrow_down") {
      $(".material-icons.arrow").html("keyboard_arrow_up");
    } else {
      $(".material-icons.arrow").html("keyboard_arrow_down");
    }

    $('.close-drop-menu').focus();
    jQuery('.submenu').slideToggle('fast');
    e.stopImmediatePropagation();
  })

  $(document).click(function(e) {
    $('.js-accordion-trigger')
      .not($('.js-accordion-trigger').has($(e.target)))
      .children('.submenu')
      .toggle();
      e.stopImmediatePropagation();
  })
});

// hides/shows the side menu for screens < 700px wide
$(document).ready(function() {
  $('.menu-out-arrow, .close-side-menu, .submenu').bind('click', function(e) {
    $('.menu-out-arrow').toggleClass('menu-out-arrow-flip');
    $('.leftBlackBar, .bluebar, .linkbar, .close-side-menu').toggleClass('is-open');
    e.preventDefault();
    e.stopImmediatePropagation();
  });
});
