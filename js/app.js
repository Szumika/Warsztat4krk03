$(document).ready(function () {
$.ajax({
    url: 'http://date.jsontest.com',
    
}).done(function(sentDate){
    console.log(sentDate)
}).fail(function(xhr, status, errorThrown){
    console.log(xhr,status,errorThrown);
})

});