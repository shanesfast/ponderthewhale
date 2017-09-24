/* DIV CONTENT LOADERS */

// loads the welcome content
$(document).ready(function() {
  $(".to_welcome").click(function() {
    $(".content").load("welcome.html");
    } );
});

// loads the taxonomy facts section
$(document).ready(function() {
  $(".to_taxonomy").click(function() {
    $(".content").load("taxonomy.html");
    });
});

// loads the cetacea order content
$(document).ready(function() {
  $(".to_cetacea").click(function() {
    $(".content").load("cetacea.html");
    });
});

// loads the mysticeti content
$(document).ready(function() {
  $(".to_mysticeti").click(function() {
    $(".content").load("mysticeti.html");
    });
});

// loads the odontoceti content
$(document).ready(function() {
  $(".to_odontoceti").click(function() {
    $(".content").load("odontoceti.html");
    });
});

/* HTML REPLACEMENT ON CLOCK/HOVER */

/* replaces the up arrow next to FACTS with a down */
$(document).ready(function() {
  $(".facts")
    .click(function() {
      $(".material-icons.arrow").html("keyboard_arrow_down")
      $(".factsdropdown").slideDown()
    })
    .mouseleave(function() {
      $(".material-icons.arrow").html("keyboard_arrow_up")
      $(".factsdropdown").slideUp()
    });
});

/* MODAL IMAGE VIEWER */

$(document).ready(function() {
  $(".capt").click(function() {
    var nodes = document.getElementsByClassName("capt");
    var spot = $(this).attr("value");
    var setImg = document.getElementById("setImg");
    var subTitle = document.getElementById("subtitle");

    document.getElementById("myModal").style.display = "block";
    setImg.src = nodes[spot].src;
    subTitle.innerHTML = nodes[spot].alt;
  })

  $(".close").click(function() {
    document.getElementById("myModal").style.display = "none";
  })
});
