<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="watermark" content="Fatkhurrhn, GitHub: https://github.com/fatkhurrhn">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas 1 PHP</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="dashboard">
        <div class="panel form-panel">
            <h2>Form Input Data</h2>
            <form id="assessmentForm" method="post" action="">
                <div class="form-group">
                    <label for="nama">Nama Lengkap</label>
                    <input type="text" id="nama" name="nama" placeholder="Masukkan nama siswa" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Alamat Email</label>
                    <input type="email" id="email" name="email" placeholder="email@siswa.com" required>
                </div>
                
                <div class="form-group">
                    <label for="nilai">Nilai Ujian</label>
                    <input type="number" id="nilai" name="nilai" min="0" max="100" placeholder="0 - 100" required>
                </div>
                
                <button type="submit" class="btn">Proses Nilai</button>
            </form>
        </div>
        
        <div class="panel result-panel <?php echo ($_SERVER["REQUEST_METHOD"] == "POST") ? 'active' : ''; ?>">
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $nama = htmlspecialchars(trim($_POST['nama']));
                $email = htmlspecialchars(trim($_POST['email']));
                $nilai = intval($_POST['nilai']);
                
                if ($nilai > 70) {
                    $status = "LULUS";
                    $status_class = "status-lulus";
                    $emoji = "🎓";
                    $message = "Selamat! Anda telah berhasil melewati ujian dengan baik. Pertahankan prestasi Anda!";
                    $message_class = "lulus-message";
                } else {
                    $status = "REMEDIAL";
                    $status_class = "status-remedial";
                    $emoji = "📝";
                    $message = "Anda perlu mengikuti remedial. Gunakan kesempatan ini untuk memperbaiki nilai dan pemahaman materi.";
                    $message_class = "remedial-message";
                }
                
                echo '<div class="result-content">';
                echo '<h2>Hasil Penilaian</h2>';
                
                echo '<div class="result-item">';
                echo '<span class="result-label">Nama Siswa</span>';
                echo '<span class="result-value">' . $nama . '</span>';
                echo '</div>';
                
                echo '<div class="result-item">';
                echo '<span class="result-label">Email</span>';
                echo '<span class="result-value">' . $email . '</span>';
                echo '</div>';
                
                echo '<div class="result-item">';
                echo '<span class="result-label">Nilai Ujian</span>';
                echo '<span class="result-value">' . $nilai . '</span>';
                echo '</div>';
                
                echo '<div class="result-item">';
                echo '<span class="result-label">Status</span>';
                echo '<span class="result-value"><span class="status-badge ' . $status_class . '"><span class="emoji">' . $emoji . '</span>' . $status . '</span></span>';
                echo '</div>';
                
                echo '<div class="result-message ' . $message_class . '">';
                echo '<p>' . $message . '</p>';
                echo '</div>';
                echo '</div>';
            } else {
                echo '<div class="result-content">';
                echo '<h2>Hasil Penilaian</h2>';
                echo '<p style="text-align: center; margin-top: 50px; color: var(--gray);">Silakan isi form penilaian untuk melihat hasil</p>';
                echo '</div>';
            }
            ?>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>