<?php
include 'connect.php';
$result = mysqli_query($conn, "SELECT * FROM mahasiswa");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD PHP</title>
</head>
<body>
    <h1>Tambah User</h1>
    <form action="" method="post">
        <label for="name">Nama:</label>
        <input type="text" id="name" name="name">
        <label for="Nim">NIM:</label>
        <input type="text" id="Nim" name="Nim">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <button type="submit" name="submit">Tambah</button>
    </form>
    <h1>daftar mahasiswa</h1>
    <a href="create.php">Tambah User</a>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>ID</th>
            <th>Nim</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Aksi</th>
        </tr>
        <?php while ($row = mysqli_fetch_assoc($result)) : ?>
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row['nim']; ?></td>
                <td><?php echo $row['name']; ?></td>
                <td><?php echo $row['email']; ?></td>
                <td>
                    <a href="edit.php?id=<?php echo $row['id']; ?>">Edit</a>
                    <a href="delete.php?id=<?php echo $row['id']; ?>" onclick="return confirm('Are you sure?')">Delete</a>
                </td>
                <?php endwhile; ?>
            </tr>
    </table>
    <?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $Nim = $_POST['Nim'];
        $email = $_POST['email'];

        $insertQuery = "INSERT INTO mahasiswa (nim, name, email) VALUES ('$Nim', '$name', '$email')";
        if (mysqli_query($conn, $insertQuery)) {
            echo "New record created successfully";
            header("Location: index.php");
        }
    }
    ?>
</body>
</html>
