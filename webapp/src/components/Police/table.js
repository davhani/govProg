import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPolice } from "redux/actions/police";

const PoliceTable = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.police.list) || [];

  useEffect(() => {
    dispatch(getPolice.request());
  }, [dispatch]);

  return (
    <div>
      <Link to="/police/add">
        <Button className="mb-2" color="primary">
          إضافة
        </Button>
      </Link>

      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i> Simple Table
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>الاسم</th>
                <th>رتبة</th>
                <th>العمل المسند</th>
              </tr>
            </thead>
            <tbody>
              {list.map(item => (
                <tr>
                  <th>{item.name}</th>
                  <th>{item.rank}</th>
                  <th>{item.type}</th>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default PoliceTable;
