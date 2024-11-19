const router = require("express").Router();
const handleUserSubmit = require("../../controllers/handleUserSubmit")
const handleGetAllUsers = require("../../controllers/handleGetAllUsers");
const handleGetUser = require("../../controllers/handleGetUser");
const handleUpdateData = require("../../controllers/handleUpdateData");
const handleDeleteUser = require("../../controllers/handleDeleteUser");



// Post end point
router.post("/" , handleUserSubmit);

// End point to get all users
router.get("/",handleGetAllUsers);

// Get user data with Id
router.get("/:id", handleGetUser);

// Put End point to update data
router.put("/:id", handleUpdateData);

// End Point to DELETE user
router.delete("/:id" , handleDeleteUser);

module.exports = router;




