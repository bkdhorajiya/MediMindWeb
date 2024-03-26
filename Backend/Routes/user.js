const express = require("express");
const router = express.Router();


const {patientSignup, patientLogin, updatePatientData, validateTokenPatient} = require("../Controllers/patientAuth");
const {consultantSignup, consultantLogin, updateAvailabilityTime, validateTokenConsultant } = require("../Controllers/consultantAuth");
const { searchConsultantBySpecialty, getAllConsultants, getConsultantsData } = require("../Controllers/searchConsultant");
const {createAppointment, getallAppointmentsForPatient, getScheduledAppointmentsForConsultant, getRequestedAppointmentList, acceptAppointmentRequest, rejectAppointmentRequest } = require("../Controllers/appointment");

//const upload = require("../middlewares/multer");

router.post("/patient/login",patientLogin);  
router.post("/patient/signup", patientSignup);
router.post("/patient/validateTokenPatient", validateTokenPatient);
router.post("/patient/SearchConsultant", searchConsultantBySpecialty);
router.post("/patient/getAllConsultants", getAllConsultants);
router.post("/patient/getConsultantsData", getConsultantsData);
router.post("/patient/updatePatientData", updatePatientData);
router.post("/patient/RequestAppointment", createAppointment);
router.get("/patient/getallAppointmentsForPatient", getallAppointmentsForPatient);
//router.post("/patient/uploadReports", upload.single("image"), patientSignup);


// router.get("/patient/getReports", patientSignup);

// router.post("/patient/ConsultantFeedback", patientSignup);



router.post("/consultant/login",consultantLogin);  
router.post("/consultant/signup", consultantSignup);
router.post("/consultant/validateTokenConsultant", validateTokenConsultant);
router.get("/consultant/getRequestedAppointmentList",getRequestedAppointmentList);

router.post("/consultant/acceptAppointmentRequest",acceptAppointmentRequest);
router.post("/consultant/rejectAppointmentRequest",rejectAppointmentRequest);
router.get("/consultant/getScheduledAppointmentsForConsultant",getScheduledAppointmentsForConsultant);
router.post("/consultant/updateAvailabilityTime",updateAvailabilityTime); 






// router.post("/consultant/getPatientReport", consultantSignup);
// router.post("/consultant/updloadPrescription", consultantSignup);
// router.post("/consultant/updateProfile",consultantLogin);  


// router.post("/shop", userGetShopCProducts);
// router.get("/validateTokenUser", validateTokenUser);

// router.post("/vendor/signup",upload.single("image"), vendorSignup);
// router.post("/vendor/addcategoryproduct",vendorCategory);
// router.post("/vendor/add-product", upload.single("image"), vendorAddProduct);  //given the category name


module.exports = router;
