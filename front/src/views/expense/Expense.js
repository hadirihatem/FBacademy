import React from 'react'

const Expense = () => {
  return (
    <CRow>
      <CCol xl={13}>
        <CCard>
          <CCardHeader>
            expense
            <small className="text-muted"> example</small>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={expense}
            fields={[
              { key: 'date', _classes: 'font-weight-bold' },
              'stadiumRent', 'coachSalaryByHour', 'coachSalaryByMonth','maintenance','_id','payedOrNot'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/expense/${item._id}`)}
            // scopedSlots = {{
            //   'status':
            //     (item)=>(
            //       <td>
            //         <CBadge color={getBadge(item.status)}>
            //           {item.status}
            //         </CBadge>
            //       </td>
            //     )
            // }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={5}
            doubleArrows={true}
            align="center"
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Expense
