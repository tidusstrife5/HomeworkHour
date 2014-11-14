$(function(){

	$("#search_bar_menu a").on("click",function(){
		$("#topic").html($(this).html());
	});

	$('#topic_tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	$("#topic_list #topic_tabs li").click(function(){
		$(".topic_list").hide();
		$("#"+$(this).attr("data-list")).show();
		$("#topic_list .topic_list .list-group a.list-group-item.active").removeClass("active");
		$("#"+$(this).attr("data-list")).find(".list-group a.list-group-item:first").addClass("active");
	});

	$("#topic_list .topic_list .list-group a.list-group-item").click(function(){
		$("#topic_list .topic_list .list-group a.list-group-item.active").removeClass("active");
		$(this).addClass("active");
	});
});