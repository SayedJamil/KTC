$(document).ready(function () {
  
    // On button click, get value
    // of input control Show alert
    // message box
    // $("#cityname").blur(function() {
    //     var inputString = $("#cityname").val();
    //     if(inputString!=0){
    //         alert(inputString);
    //     }

    // });

    $("#cityname").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            var inputString = $("#cityname").val();
                if(inputString!=0){
                    document.location.hash = "https://www.google.co.in/search?"+inputString;
                }  
        }
    });
});

// $('.clickme').click(function () {
//     window.location.hash = 'xyz';
// });
