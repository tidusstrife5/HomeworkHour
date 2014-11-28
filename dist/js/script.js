$(function(){
	if(getCookie("login")){
		username = getCookie("login");
		$("#navigation li").eq( 0 ).remove();
		$("#navigation li").eq( 0 ).remove();
		$("#navigation").prepend("<li class='loggedin'>Bienvenue: <a href='#'>"+username+"</a></li><li><a href='#' id='logout'>Logout</a></li>");
		$("#user-menu").show();
		$("#answer-question").show();
		$("#logout").click(function(){
			setCookie("login", "", "-1");
			window.location.reload();
		});
	}

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

	$("#login").click(function(){
		setCookie("login",$("#username").val(),1);
		$("#navigation li").eq( 0 ).remove();
		$("#navigation li").eq( 0 ).remove();
		$("#navigation").prepend("<li class='loggedin'>Bienvenue: <a href='#'>"+$("#username").val()+"</a></li><li><a href='#' id='logout'>Logout</a></li>");
		$('#myModal').modal('hide'); 
		$("#user-menu").show();
		$("#answer-question").show();
		$("#logout").click(function(){
			setCookie("login", "", "-1");
			window.location.reload();
		});
	});

	$("#logout").click(function(){
		setCookie("login", "", "-1");
		window.location.reload();
	});

	$("#btn-answer").click(function(){
		$("#allAnswers tbody").prepend("<tr><td><i>-</i>0<i>+</i></td><td>"+$("#txt-answer").val()+"</td></tr><tr><td colspan=2 ><hr></td></tr>");
		
	});
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}