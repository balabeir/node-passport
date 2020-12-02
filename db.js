const mongoose = require("mongoose");
const url = `mongodb+srv://testDB:<J1cXgZgcOxdc91Kc>@test.eeiy5.mongodb.net/<node-passport>?retryWrites=true&w=majority`;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
