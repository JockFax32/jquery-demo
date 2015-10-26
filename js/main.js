/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

var selector = null;
var content = null;

var getInput = function(){
     selector = $('#selector').val();
     content = $('#newContent').val();
};

$('button').click(getInput);

$('#change-content').on('click',function(){
   $(selector).text(content);
})

$('#add-at-end').on('click',function(){
    $(selector).append(content);

})

$('#add-at-start').on('click',function(){


})

$('#insert-before').on('click',function(){
    $(selector).before(content)

})

$('#move-after').on('click',function(){
    $(selector).after(content);

})

$('#surrond-class').on('click',function(){

})
$('#hide-text').on('click',function(){

})
$('#remove-world').on('click',function(){

})

