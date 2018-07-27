$(document).ready(function () {
$.ajax({
    url: 'https://swapi.co/api/people/4/',
    
}).done(function(sentDate){
    console.log(sentDate)
}).fail(function(xhr, status, errorThrown){
    console.log(xhr,status,errorThrown);
})

});