import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCriminals } from "redux/actions/criminals";

const CriminalTable = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.criminals.list) || [];

  useEffect(() => {
    dispatch(getCriminals.request());
  }, [dispatch]);

  return (
    <div>
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i> متهمين
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>الاسم</th>
                <th>تاريخ الميلاد</th>
                <th>محل الولادة</th>
              </tr>
            </thead>
            <tbody>
              {list.map(item => (
                <tr>
                  <th>{item.name}</th>
                  <th>{item.birthday}</th>
                  <th>{item.birthplace}</th>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CriminalTable;
