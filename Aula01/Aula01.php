<html>
  <meta charset="UTF-8">
<head><title>Aula programação</title></head>
<body>
<P><center><h1>Olá Mundo!</h1></center></P>
<center>
Essa é nossa segunda aula e estamos usando o <a href="https://www.apachefriends.org">Xamp!</a> ...mentira, eu estou com Wamp... hehe
<?php
  $x = 0;
  while($x<10){
    if($x%2==0){
      echo"<p><font color=\"red\">Conteúdo de $x</p></font>";
    }else{
      echo "<p>Conteúdo de $x";
    }
    $x++;
  }
?>
</center>
</body>
</html>