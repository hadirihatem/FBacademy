import React, { useState } from "react";
import {  getexpenses, postexpense } from "../../action/expenseaction";
import { useDispatch, useSelector } from "react-redux";

import {
  CForm,
  CInput,
  CModal,
  CButton,
  CModalTitle,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CContainer,
  CCard,
  CLabel,
} from "@coreui/react";


const Modalexpense = () => {
  const dispatch = useDispatch();
  const [primary, setPrimary] = useState(false);

  const [Newexpense, setNewexpense] = useState({
    stadiumRent: "",
    coachSalaryByHour: "",
    coachSalaryByMonth: "",
    maintenance: "",
    payedOrNot: "",
  });
  const handleChange = (e) => {
    setNewexpense({
      ...Newexpense,
      [e.target.name]: e.target.value,
    });
  };
  const handleClose = (e) => {
    e.preventDefault();
    dispatch(postexpense({ ...Newexpense }));

    setPrimary(!primary)
    setTimeout(()=>{
      dispatch(getexpenses())
    }, 2000)
  };

  return (
    <div>
      <CButton
        color="primary"
        onClick={() => setPrimary(!primary)}
        className="mr-1"
      >
        Primary modal
      </CButton>
      <CModal
        show={primary}
        onClose={() => setPrimary(!primary)}
        color="primary"
      >
        <CModalHeader closeButton>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CLabel >stadiumRent</CLabel>
          <CInput  type="text" name='stadiumRent' onChange={handleChange}/>
          <br />
          <CLabel >coachSalaryByHour</CLabel>
          <CInput   type="text"  name="coachSalaryByHour" onChange={handleChange}/>
          <br />
          <CLabel >coachSalaryByMonth</CLabel>
          <CInput  type="text" name="coachSalaryByMonth" onChange={handleChange}/>
          <br />
          <CLabel >payedOrNot</CLabel>
          <CInput type="text" name="payedOrNot" onChange={handleChange} />
          <br />
          <CLabel >maintenance</CLabel>
          <CInput type="text" name="maintenance" onChange={handleChange} />

        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={handleClose}>
            Do Something
          </CButton>{" "}
          <CButton color="secondary" onClick={() => setPrimary(!primary)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default Modalexpense;
