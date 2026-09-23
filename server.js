const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình thư mục tĩnh (css, images, js...)
app.use(express.static(path.join(__dirname, 'public')));

// Route trang chủ
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ví dụ API sản phẩm (mở rộng sau này)
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Son môi Itachi', price: 500000, oldPrice: 600000, discount: 17 },
    { id: 2, name: 'Mascara dày và cong', price: 50000, oldPrice: 100000, discount: 50 },
    { id: 3, name: 'Son môi TPA-115', price: 125000, oldPrice: 250000, discount: 50 },
    { id: 4, name: 'Son bóng hồng', price: 100000, oldPrice: 200000, discount: 50, hot: true },
    { id: 5, name: 'Nước làm trắng da SG', price: 200000, hot: true },
    { id: 6, name: 'Phấn trang điểm AUG', price: 400000, oldPrice: 450000, discount: 11 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server Node.js đang chạy tại: http://localhost:${PORT}`);
});