var pics1 = [
    "./pics/1440_201903062023.jpg",
    "./pics/basketball-championship-sport-club-league-varsity-team-players-sign-ball-halftone_8071-3408.avif",
    "./pics/images.jfif"
  
]

var pics2 = [
    "./pics/istockphoto-1128899308-612x612.jpg",
    "./pics/istockphoto-1178074437-612x612.jpg",
    "./pics/vector-illustration-basketball-on-fire-260nw-1932908948.webp"
]

var div1 = $("<div></div>").attr("id", "div1");
$("body").append(div1);
var div2 = $("<div></div>").attr("id", "div2");
$("body").append(div2);

$(pics1).each(function (i, pic) {
    var im = $("<img/>");
    $(im).attr("src", pic);
    $(im).css("width", "33%");
    $("#div1").append(im);
});
$(pics2).each(function (i, pic) {
    var im = $("<img/>");
    $(im).attr("src", pic);
    $(im).css("width", "33%");
    $("#div2").append(im);
});
var markedPic = $("div:first").children()[0];

$(markedPic).addClass("selected");
$(".selected").css("border", "5px solid red");

var secondPic = $(markedPic).parent().next().children()[1];

let bordersSwiched = false;

const switchBorders = function () { //NE RADI NA PRVI KLIK!!!!
  let secondPic = $(markedPic).parent().next().children()[1];
  $(".selected").css("border", "unset");
  if (bordersSwiched ) {
    $(markedPic).removeClass("selected");
    $(secondPic).addClass("selected");
    $(".selected").css("border", "5px solid red");
    
  }
  if (!bordersSwiched ) {
    $(secondPic).removeClass("selected");
    $(markedPic).addClass("selected");
    $(".selected").css("border", "5px solid red");
  }

//   $(bordersSwiched ? secondPic : markedPic).removeClass("selected");
//   $(bordersSwiched ? markedPic : secondPic).addClass("selected");
//   $(".selected").css("border", "5px solid red");
  bordersSwiched = !bordersSwiched;
};

$("body").on("click", switchBorders);


