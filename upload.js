
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));  // عشان نتأكد ما يصير في اوفررايت على صورة اولرديدي مرفوعة او تضارب بين صورتين بنعمل جينيريت لأسم جديد
  }
});

const upload = multer({ storage });

export default upload;
