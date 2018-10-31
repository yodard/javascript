// // alert ("I AM WORKING");

// console.log ("I LIVE");

// //  this is how we set a variable

// var x = 12;
// var fName = "huda";

// console.log(1+x);
// console.log(fName);

// console.log("hello my name is," + fName);




$( document ).ready(function() {
  // Handler for .ready() called.
  $("#btn-rollOut").on( "click", function() {
    // console.log( $( this ).text() );
 $("#main-box").addClass("animated infinite rollOut");
 });;
});

    $("#enough").on( "click", function() {
      // console.log( $( this ).text() );
    $("#main-box").removeClass("animated infinite rollOut");
});;
