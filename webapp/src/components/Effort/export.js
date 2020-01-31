import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";

const Export = () => {
  return (
    <div>
      <Link to="/effort/add">
        <Button className="mb-2" color="primary">
          إضافة
        </Button>
      </Link>

      <Card>
        <CardHeader>
          <strong>إستخراج مجهود</strong>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label htmlFor="name">نوع</Label>
            <Input
              type="select"
              id="name"
              placeholder="نوع"
              required
              style={{ textAlign: "right" }}
            >
              <option value="month">شهر</option>
              <option value="day">يوم</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="type">تاريخ المجهود</Label>
            <Input
              type="date"
              name="date"
              id="date"
              style={{ textAlign: "right" }}
            />
          </FormGroup>
          <Link to="/effort/print">
            <Button style={{ width: "100%" }} color="success">
              إستخراج
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Export;
