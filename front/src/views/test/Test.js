import { CButton, CForm, CInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useState } from 'react'
import Modalexpense from '../expense/Modalexpense'


const Test = () => {


  const [visible, setVisible] = useState(false);

  return (



    <div>
    <CButton  onClick={() => setVisible(!visible)}>Launch static backdrop modal</CButton>
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Modal title</CModalTitle>
      </CModalHeader>
      <CForm>
      <CInput/>
      </CForm>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </CModal>

    </div>

  )
}

export default Test
