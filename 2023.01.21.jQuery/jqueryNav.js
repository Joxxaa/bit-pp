// $(function() {
// $( "p" ).text( "Hello world!!" );
// });

    $("li:first").css("border-bottom-style", "dotted")
    $("li").css("text-transform", "uppercase")

let active = document.activeElement;
$(active).css("color", "blue");

const middleLiItem =
  document.querySelectorAll("li")[
    Math.floor(document.querySelectorAll("li").length / 2)
  ];
$(middleLiItem).css("background-color", "grey");