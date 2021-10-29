import React, { useEffect, useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getexpenses } from "../../action/expenseaction";
import { useHistory, useLocation } from "react-router";
import Modalexpense from "./Modalexpense";

const Expenses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getexpenses());
  }, []);

  const expense = useSelector((state) => state.exp.expenses);

  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/expenses?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <div>
    <div>
      <Modalexpense/>
    </div>
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
                { key: "date", _classes: "font-weight-bold" },
                "stadiumRent",
                "coachSalaryByHour",
                "coachSalaryByMonth",
                "maintenance",
                "_id",
                "payedOrNot",
              ]}
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              clickableRows
              onRowClick={(item) => history.push(`/expenses/${item._id}`)}
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
    </div>

  );
};

export default Expenses;
