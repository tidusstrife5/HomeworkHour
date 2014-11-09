$(function(){

$("#search_bar_menu a").on("click",function(){
	$("#topic").html($(this).html());
});

$('#topic_tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

});