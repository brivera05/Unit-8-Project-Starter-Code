let count = 0;
$(".submit").click(function() {
    let questionOne = $(".questionOne").val();
    let questionTwo = $(".questionTwo").val();
    count = count + 1;
    $(".counter").text("This quiz has been taken " + count + " times");
    
    if (questionOne <1 && questionTwo === "Windy") {
        console.log("Plains");
    }
                          
    else if (questionOne >1 && questionTwo === "Stormy") {
           console.log("Snowy Tundra");
          } 
    
    else if (questionOne <1 && questionTwo === "Stormy") {
           console.log("Jungle");
          }   
    
    else if (questionOne >1 && questionTwo === "Windy") {
           console.log("Desert");
          }   
});