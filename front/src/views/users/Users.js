import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'

import usersData from './UsersData'
import { useSelector } from 'react-redux'
import { getUsersList } from 'src/action/useraction'


const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const Users = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList());
  }, []);
  const user = useSelector(state => state.user.users)
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={13}>
        <CCard>
          <CCardHeader>
            Users
            <small className="text-muted"> example</small>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={user}
            fields={[
              { key: 'Fname', _classes: 'font-weight-bold' },
              'Lname', 'role', 'age','email','phone','_id','permissionLevel'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/users/${item._id}`)}
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

export default Users
