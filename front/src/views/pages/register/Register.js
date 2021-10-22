import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,

  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { registerUser } from 'src/action/authaction';

const Register = ({history}) => {
  const [info, setInfo] = useState({
    Fname:"",
    Lname:"",
    phone :"",
    email:"",
    password:"",
    permissionLevel:1,
 });
const dispatch = useDispatch()
const auth = useSelector((state) => state.auth);
useEffect(() => {
if(auth.isAuth){
history.push("/test")
}

}, [auth.isAuth,history])

 const handlechange=e=>{
     setInfo({...info,[e.target.name]:e.target.value})
 }
 const registerNow=e=>{
   e.preventDefault();
   dispatch(registerUser(info))
 };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={registerNow} >
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Firstname" name="Fname" onChange={handlechange} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-user" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput type="text" placeholder="Lastname" name="Lname"  onChange={handlechange} />
                </CInputGroup>

                <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-user" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput type="number" placeholder="Phone" name="phone" onChange={handlechange} />
              </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" name="email"  onChange={handlechange}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" name="password"  onChange={handlechange}/>
                  </CInputGroup>

                  <CButton type='submit' color="success" block>Create Account</CButton>
                </CForm>
              </CCardBody>

            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
