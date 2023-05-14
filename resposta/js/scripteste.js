//Função para focar no input name e inserir resposta
function postReply(commentId) {
	$('#commentId1').val(commentId);
	$("#comment1").focus();
}

/*
function postReply(commentId) {
  $("#commentId1").val(commentId);
  $("#comment1").focus();
}

$(document).ready(function() {
  $("#frm-comment").on("submit", function(e) {
      e.preventDefault();
      $.ajax({
          url: "AgregarComentario.php",
          data: $("#frm-comment").serialize(),
          type: "POST",
          success: function(response) {
              $("#comment-message").css("display", "inline-block");
              $("#name").val("");
              $("#comment").val("");
              $("#commentId").val("");
              listComment();
          }
      });
  });
});
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

$(document).on('click', '#submitBtn', function(e) {
  e.preventDefault();
  
  var commentId = $(this).closest('.comment-row').find('#commentId1').val();
  var name = $(this).closest('.comment-row').find('#name').val();
  var comment = $(this).closest('.comment-row').find('#comment1').val();

  $.ajax({
      url: 'AgregarComentario.php',
      method: 'POST',
      data: {comment_id: commentId, name: name, comment: comment},
      success: function(response) {
          // atualizar a lista de comentários
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

		if (parent === "0" )
		{
			comments =  "<div class='comment-row'>"+
			"<div class='comment-info'><img src='user-30.png'><span class='posted-by'>" + data[i]['comentario_nombre'].toUpperCase() + "</span></div>" + 
			"<div class='comment-text'>" + data[i]['comentarios'] + "</div>"+			
			"<form id='frm-btn'><div class='input-row'><input type='hidden' name='comment_id' id='commentId1' placeholder='Name' /><textarea class='resposta' type='text' name='comment' id='comment1' /></div><button class='btn btn-reply' type='submit' id='submitBtn' onClick='postReply(" + commentId + ")'>Responder</button></form>"+
			"<div><a class='btn-reply' id='submit' onClick='postReply(" + commentId + ")'>Responder</a></div>"+
			/*"<div><button class='btn-reply' type='submit' id='submitBtn' onClick='postReply(" + commentId + ")'>Responder</button></div>"+*/
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
			/*"<div><input type='hidden' name='comment_id' id='commentId' placeholder='Name' /><textarea name='resposta' class='resposta' /></div>"+*/
			/*"<div><a class='btn-reply' id='submit' onClick='postReply(" + data[i]['co_id'] + ")'>Responder</a></div>"+*/
			/*"<div><button class='btn-reply' type='submit' id='submitBtn' onClick='postReply(" + data[i]['co_id'] + ")'>Responder</button></div>"*/
			"</div>";
			var item = $("<li>").html(comments);
			var reply_list = $('<ul>');
			list.append(item);
			item.append(reply_list);
			listReplies(data[i].co_id, data, reply_list);

		}
	}
}
