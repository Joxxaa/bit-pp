var pics = [
    "./pics/1440_201903062023.jpg",
    "./pics/basketball-championship-sport-club-league-varsity-team-players-sign-ball-halftone_8071-3408.avif",
    "./pics/images.jfif",
    "./pics/istockphoto-1128899308-612x612.jpg",
    "./pics/istockphoto-1178074437-612x612.jpg",
    "./pics/vector-illustration-basketball-on-fire-260nw-1932908948.webp",
]
$(pics).each(function (i, pic) {
    var im = $("<img/>");
    $(im).attr("src", pic);
    let height = Math.floor(Math.random() * (450 - 200 + 1)) + 200;
  let width = Math.floor(Math.random() * (450 - 100 + 1)) + 100;
  $(im).css("width", width + "px");
  $(im).css("height", height + "px");
    $("body").append(im);
});

$("body").prepend($("<h1>BASKETBALL GALERY</h1>"));