<!DOCTYPE html>
<html>
<head>
    <title>Gestión</title>
</head>
<body>
    Los campos del formulario son los siguientes:<br>
    Nombre: 
    <?php echo $_POST["nom"];?><br>
    Apellidos: 
    <?php echo $_POST["apel"];?><br>
    Teléfono:
    <?php echo $_POST["tel"];?><br>
    Observaciones:
    <?php echo $_POST["correo"];?><br>
    Razon:
    <?php echo $_POST["reason"];?><br>
    
    <?php print_r($_POST);?>
        
</body>
</html>