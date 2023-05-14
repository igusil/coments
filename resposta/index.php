<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="José Igor | @j.igr ">
  <meta http-equiv="refresh" content="200">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="0">
  <title>Envie sua mensagem</title>

  <link rel="icon" href="./css/favicon.png" type="image/png" />
  <link href="./vendor/emoji-picker/lib/css/emoji.css" rel="stylesheet">
  <script src="./vendor/jquery/jquery-3.2.1.min.js"></script>
  <script src="./vendor/emoji-picker/lib/js/config.js"></script>
  <script src="./vendor/emoji-picker/lib/js/util.js"></script>
  <script src="./vendor/emoji-picker/lib/js/jquery.emojiarea.js"></script>
  <script src="./vendor/emoji-picker/lib/js/emoji-picker.js"></script>


  <!-- Bootstrap core CSS -->
  <link href="./dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- estilo customizado para esse template -->
  <link href="./assets/sticky-footer-navbar.css" rel="stylesheet">
  <link href="./style.css" rel="stylesheet">
</head>

<body>
  <div id="logar">
    <button type="button" id="login"><a href="../index.php">Log-out</a></button>
  </div>
  <hr>
  <!-- conteudo com style do h1 e body-->
  <h1 style="padding-bottom: 0; 
				margin: 0 auto;
				background-image: url(./imagens/logo2.png); height: 163px;
				background-repeat: no-repeat;
				display: block;
				background-position:center;
				width: 50%;
				">
  </h1>
  <hr>
  <div class="container">
    <h3 class="mt-5" style="padding-top: 0;">
      <center>Sua opnião é importante</center>
    </h3>
    <hr>
    <div class="row">
      <div class="col-12 col-md-12">
        <!-- Conteudo -->

        <div class="output-container">
          <div class="comment-form-container">
            <form id="frm-comment">
              <div class="input-row">
                <input type="hidden" name="comment_id" id="commentId" placeholder="Name" />
                <input class="form-control" type="text" name="name" id="name" placeholder="nome" style="outline:none;" />
              </div>

              <!-- Area de Texto para input dos comentarios-->
              <div class="input-row">
                <p class="emoji-picker-container">
                  <textarea class="input-field" data-emojiable="true" data-emoji-input="unicode" type="text" name="comment" id="comment" placeholder="sua mensagem" style="outline: none;">
										</textarea>
                </p>
              </div>
              <!-- 
									BUTTON DO COMENTAR
									commentID CHAMA O INPUT NO SCRIPT E ENVIA PARA AS REPLYS
								-->
              <!--
								<div>
									<button
										type="submit" class="btn btn-primary"
										id="submitButton"
										style="margin-left: 350px;
										border-radius:30px;
										height:50px;">
										Comentar
									</button>
								</div>
								-->
              <div>
                <!--input button (botão comentar =>
									lembrar de passar metodo type submit button)
									-->

                <input style="height: 60px; border-radius:30px;
										margin-left:350px; text-shadow: 0.4px 0.4px #ffff;
										font-weight:bold;" type="button" class="btn btn-primary" id="submitButton" value="Comentar" />
                <div id="comment-message">Comentario Criado</div>

              </div>
            </form>
            <!-- Saida do script post do comentario-->
          </div>
          <div id="output"></div>
        </div>

        <script src="./js/scripteste.js"></script>

        <!-- Fim do Conteudo -->
      </div>
    </div>
    <!-- Fim row -->
  </div>
  <!-- Fim do container -->
  <footer class="footer" style="border-radius: 100px; background-color: rgba(215, 243, 250, 0.466);">
    <div class="container">
      <span class="text-muted">
        <p><strong>Visite </strong><a href="./login.html" target="_blank">Intranet</a></p>
      </span>
    </div>
  </footer>
  <!-- Bootstrap core JavaScript-->
  <script src="./dist/js/bootstrap.min.js"></script>
</body>

</html>