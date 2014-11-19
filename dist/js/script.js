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
		$("#"+$(this).attr("data-topic")).show();
		$("#topic_list .topic_list .list-group a.list-group-item.active").removeClass("active");
		$("#"+$(this).attr("data-topic")).find(".list-group a.list-group-item:first").addClass("active");
		$(".subject_list").hide();
		$("#"+$("#"+$(this).attr("data-topic")).find(".list-group a.list-group-item:first").attr("data-subject")).show();
	});

	$("#topic_list .topic_list .list-group a.list-group-item").click(function(){
		$("#topic_list .topic_list .list-group a.list-group-item.active").removeClass("active");
		$(this).addClass("active");
		$(".subject_list").hide();
		$("#"+$(this).attr("data-subject")).show();
	});
});