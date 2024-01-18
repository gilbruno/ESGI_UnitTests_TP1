import { UserManager } from "../app/users/UserManager";

(async function main() {
  console.log("*** Instantiate UserManager");
  const userManager = new UserManager();

  const allUsers = userManager.getAllUsers();
  console.log("***** get all users", allUsers);

  console.log("*** Add a new user");
  userManager.addUser({ id: 1, name: "John Doe", email: "jdoe@yahoo.fr" });

  console.log("***** get all users", userManager.getAllUsers());
})();
