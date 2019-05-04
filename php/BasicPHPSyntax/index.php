<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>

	<?php
		echo "<h2>PHP is Fun!</h2>";
		echo "Hello world!<br>";
		echo "I'm about to learn PHP!<br>";
		echo "This ", "string ", "was ", "made ", "with multiple parameters.";
	?>

	<?php
		class Car {
			function Car() {
				$this->model = "VW";
			}
		}

		// create an object
		$herbie = new Car();

		// show object properties
		echo $herbie->model;
	?>
	<?php
		$x = "Hello world!";
		$x = null;
		var_dump($x);
	?>
</body>
</html>
