$(function(){
	if(getCookie("login")){
		username = getCookie("login");
		$("#navigation li").eq( 0 ).remove();
		$("#navigation li").eq( 0 ).remove();
		$("#navigation").prepend("<li class='loggedin'>Bienvenue: <a href='profile.html'>"+username+"</a></li><li><a href='#' id='logout'>Logout</a></li>");
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

	$("#submit-question").click(function(){
		timeout = window.setTimeout(function(){
			window.location.href = "index.html";
		},3000);
	});

	$("#login").click(function(){
		if($("#username").val()==""){
			$("#username").addClass("error");
		}
		else{
			setCookie("login",$("#username").val(),1);
			$("#navigation li").eq( 0 ).remove();
			$("#navigation li").eq( 0 ).remove();
			$("#navigation").prepend("<li class='loggedin'>Bienvenue: <a href='profile.html'>"+$("#username").val()+"</a></li><li><a href='#' id='logout'>Logout</a></li>");
			$('#myModal').modal('hide'); 
			$("#user-menu").show();
			$("#answer-question").show();
			$("#logout").click(function(){
				setCookie("login", "", "-1");
				window.location.reload();
			});
		}
	});


	$("#register").click(function(){
		if($("#regUname").val()==""){
			$("#regUname").addClass("error");			
		}
		else{
			setCookie("login",$("#regUname").val(),1);
			$("#navigation li").eq( 0 ).remove();
			$("#navigation li").eq( 0 ).remove();
			$("#navigation").prepend("<li class='loggedin'>Bienvenue: <a href='profile.html'>"+$("#regUname").val()+"</a></li><li><a href='#' id='logout'>Logout</a></li>");
			$('#myRegisterModal').modal('hide'); 
			$("#user-menu").show();
			$("#answer-question").show();
			$("#logout").click(function(){
				setCookie("login", "", "-1");
				window.location.reload();
			});
		}
	});

	$("#logout").click(function(){
		setCookie("login", "", "-1");
		window.location.reload();
	});

	$("#btn-answer").click(function(){
		$("#allAnswers tbody").prepend("<tr><td class='vote'><i class='glyphicon glyphicon-plus'></i><br><span class='voteNum'>0</span><br><i class='glyphicon glyphicon-minus'></i></td><td>"+$("#txt-answer").val()+"</td></tr><tr><td colspan=2 ><hr></td></tr>");
	});

	$(".vote .glyphicon-plus").click(function(){
		$(this).next().next().eq(0).html((parseInt($(this).next().next().eq(0).html())+1));
	});

	$(".vote .glyphicon-minus").click(function(){
		$(this).prev().prev().eq(0).html((parseInt($(this).prev().prev().eq(0).html())-1));
	});

	$(".fr .glyphicon-remove").click(function(){
		a=confirm("Do you really want to delete this question?");
		if(a){
			$(this).parent().parent().addClass("error");
			$(this).parent().parent().css("margin-bottom","10px");
			$(this).parent().parent().fadeOut(1000);
			setTimeout(function() {$(this).parent().parent().remove();}, 1000);	
		}
	});
	$(".fr .glyphicon-pencil").click(function(){
		$(this).parent().parent().remove();
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