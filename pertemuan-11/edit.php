<?php
include 'connect.php';
$id = $_GET['id'];
$result = mysqli_query($conn, "SELECT * FROM mahasiswa WHERE id = $id");
$user = mysqli_fetch_assoc($result);

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $Nim = $_POST['Nim'];
    $email = $_POST['email'];

    $updateQuery = "UPDATE mahasiswa SET nim='$Nim', name='$name', email='$email' WHERE id=$id";
    if (mysqli_query($conn, $updateQuery)) {
        echo "Record updated successfully";
        header("Location: index.php");
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>edit user</title>
</head>
<body>
    <h1>Edit User</h1>
    <form action="" method="post">
        <label for="name">Nama:</label>
        <input type="text" id="name" name="name" value="<?php echo $user['name']; ?>">
        <label for="Nim">NIM:</label>
        <input type="text" id="Nim" name="Nim" value="<?php echo $user['nim']; ?>">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="<?php echo $user['email']; ?>">
        <button type="submit" name="submit">Update</button>
    </form>
</body>
</html>