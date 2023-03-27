

const insertdeasese=" INSERT INTO desease(id, name, description, treatment_id) VALUES ?";
//doctors
const doctors_insert="INSERT INTO doctors(id, name, lastname, age, gender, birth_date, address, city, country, phone_no, description) VALUES ?"
const doctors_selectall="Select * from doctors"
const doctors_selectById="Select * from doctors where id= "
const doctors_update="UPDATE doctors SET ? where id=? "
//name=? , lastname=?, age=?, gender=?, birth_date=?, address=?, city=?, country=?, phone_no=?, description=? WHERE id=?"
const doctors_delete="DELETE FROM hospitaldb.doctors WHERE id= "
//userpass
const userpass_insert="INSERT INTO hospitaldb.userauth(id, username, password, active, email) VALUES ?"

//patient
const patient_insert="INSERT INTO hospitaldb.patient(id, name, lastname, age, gender, birth_date, address, city, country, phone_no, description) VALUES ?"
const patient_selectall="SELECT * FROM patient"
const patient_selectById="SELECT id, name, lastname, age, gender, birth_date, address, city, country, phone_no, description FROM patient where id = "
const patient_delete="DELETE FROM patient WHERE id= ?"
const patient_update="UPDATE patient SET ? where id= ? "

//desease
const desease_insert="INSERT INTO hospitaldb.desease(id, name, description) VALUES ?"
const desease_selectall="SELECT * FROM desease"
const desease_selectById="SELECT * FROM desease where id = "
const desease_delete="DELETE FROM desease WHERE id= ?"
const desease_update="UPDATE desease SET ? where id= ? "

//desease
const patient_history_insert="INSERT INTO hospitaldb.patient_history(id, patient_id, doctor_id, desease_id, treatment_id, checkin_date, checkout_date) VALUES ?"
const patient_history_selectall="SELECT * FROM patient_history"
const patient_history_selectById="SELECT * FROM patient_history where id = "

const treatment_insert="INSERT INTO hospitaldb.treatment(id, name, description) VALUES ?"
const treatment_selectall="SELECT * FROM treatment"
const treatment_selectById="SELECT * FROM treatment where id = "

// const patienthistorylost="select * FROM  doctors d , patient p ,patient_history ph where d.id=ph.doctor_id and p.id=ph.patient_id "

module.exports ={doctors_insert,doctors_selectall,doctors_selectById,doctors_update,doctors_delete,userpass_insert,patient_insert,desease_insert,
    patient_history_insert,patient_history_selectall,patient_selectall,desease_selectall,treatment_selectall,treatment_insert}