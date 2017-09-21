/* DIV CONTENT LOADERS */

// loads the welcome content
$(document).ready(function() {
  $(".towelcome").click(function() {
    $(".content").load("pages/welcome.html");
    } );
});

// loads the taxonomy facts section
$(document).ready(function() {
  $(".totaxonomy").click(function() {
    $(".content").load("pages/taxonomy.html");
    });
});

// loads the cetacea order content
$(document).ready(function() {
  $(".tocetacea").click(function() {
    $(".content").load("pages/cetacea.html");
    });
});

// loads the mysticeti content
$(document).ready(function() {
  $(".tomysticeti").click(function() {
    $(".content").load("pages/mysticeti.html");
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
