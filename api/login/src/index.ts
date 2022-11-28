import api from "./api";

const PORT = process.env.LOGIN_PORT || 3002;

api.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});