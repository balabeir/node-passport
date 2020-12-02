const mongoose = require("mongoose");
const url = `mongodb+srv://testDB:<test_1234>@test.eeiy5.mongodb.net/<Test>?retryWrites=true&w=majority`;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
