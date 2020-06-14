<?php
	if(!empty($_POST['username']) && !empty($_POST['content'])){
		$username = $_POST['username'];
		$title = $_POST['title'];
		$content = $_POST['content'];
		$dataArray = array("title"=>$title,"username"=>$username,"content"=>$content);
		$jsonStr = json_encode($dataArray);
		echo $jsonStr;
	}
?>