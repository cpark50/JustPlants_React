const util = require("util");
const router = express.Router();
const multer = require("multer");



const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/Users/cindycindycindycindy/JustPlants/justplants/src/main/webapp");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
// var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('File type not accepted (.png, .jpg, .jpeg)'));
      }
  }
});

module.exports = uploadFile;