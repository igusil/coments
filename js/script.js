
/**/
/* //Função para focar no input name e inserir resposta
function postReply(commentId) {
	$('commentId').val(commentId);
	$("name").focus();
}
*/

$("#submitButton").click(function () {
	$("#comment-message").css('display', 'none');
	var str = $("#frm-comment").serialize();
	
	$.ajax({
		url: "AgregarComentario.php",
		data: str,
		type: 'post',
		success: function (response)
		{
			//limpando dados ao enviar para o reply
			$("#comment-message").css('display', 'inline-block');
			$("#name").val("");
			$("#comment").val("");
			$("#commentId").val("");
			listComment();
		}
	});
});

/* 	********	SUBMIT DO BUTTON RESPOSTA	********  */

$("#submitBtn").click(function () {
	$("#comment-message").css('display', 'none');
	var str = $("#frm-btn").serialize();

	$.ajax({
		url: "AgregarComentario.php",
		data: str,
		type: 'post',
		success: function (response)
		{
			//limpando dados ao enviar para o reply
			$("#comment-message").css('display', 'inline-block');
			$("#name").val("");
			$("#comment").val("");
			$("#commentId").val("");
			listComment();
		}
	});
});

/*  ****************************************************  */

$(document).ready(function () {
	listComment();
});

$(function () {
	// Inicialização e criação emoji set from sprite sheet
	window.emojiPicker = new EmojiPicker({
		emojiable_selector: '[data-emojiable=true]',
		assetsPath: './vendor/emoji-picker/lib/img/',
		popupButtonClasses: 'icon-smile'
	});

	window.emojiPicker.discover();
});

function listComment() {
$.post("ListaComentario.php",
function (data) {
	var data = JSON.parse(data);

	var comments = "";
	var replies = "";
	var item = "";
	var parent = -1;
	var results = new Array();

	var list = $("<ul class='outer-comment'>");
	var item = $("<li>").html(comments);

	for (var i = 0; (i < data.length); i++)
	{
		var commentId = data[i]['co_id'];
		parent = data[i]['parent_id'];

		if (parent == "0")
		{
			comments =  "<div class='comment-row'>"+
			"<div class='comment-info'><img src='user-30.png'><span class='posted-by'>" + data[i]['comentario_nombre'].toUpperCase() + "</span></div>" + 
			"<div class='comment-text'>" + data[i]['comentarios'] + "</div>"+
			"<div><a class='btn-reply' onClick='postReply(" + commentId + ")'></a></div>"+
			"</div>";
			var item = $("<li>").html(comments);
			list.append(item);
			var reply_list = $('<ul>');
			item.append(reply_list);
			listReplies(commentId, data, reply_list);
		}
	}
	$("#output").html(list);
});
}

function listReplies(commentId, data, list) {

	for (var i = 0; (i < data.length); i++)
	{
		if (commentId == data[i].parent_id)
		{
      var comments = "<div class='comment-row'>"+
			" <div class='comment-info'><img src='reply.png'><span class='posted-by'>" + data[i]['comentario_nombre'].toUpperCase() + " </span></div>" + 
			"<div class='comment-text'>" + data[i]['comentarios'] + "</div>"+
			"<div><a class='btn-reply' onClick='postReply(" + data[i]['co_id'] + ")'></a></div>"+
			"</div>";
			var item = $("<li>").html(comments);
			var reply_list = $('<ul>');
			list.append(item);
			item.append(reply_list);
			listReplies(data[i].co_id, data, reply_list);

		}
	}
}
