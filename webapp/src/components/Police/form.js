import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addPolice } from "../../redux/actions/police";

const PoliceForm = () => {
  const [name, setName] = useState("");
  const [rank, setRank] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  const onPoliceAdd = () => {
    dispatch(
      addPolice.request({
        name,
        rank,
        type
      })
    );
  };

  return (
    <div style={{ textAlign: "right" }}>
      <Card>
        <CardHeader>
          <strong>إضافة ظباط الشرطة</strong>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label htmlFor="name">الاسم</Label>
            <Input
              type="text"
              id="name"
              placeholder="إسم ظابط الشرطة"
              required
              style={{ textAlign: "right" }}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rank">رتبة</Label>
            <Input
              type="select"
              id="rank"
              placeholder="رتبة ظابط الشرطة"
              required
              style={{ textAlign: "right" }}
              onChange={e => setRank(e.target.value)}
            >
              <option value="ملازم">ملازم</option>
              <option value="ملازم أول">ملازم أول</option>
              <option value="نقيب">نقيب</option>
              <option value="رائد">رائد</option>
              <option value="مقدم">مقدم</option>
              <option value="عقيد">عقيد</option>
              <option value="عميد">عميد</option>
              <option value="لواء">لواء</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="type">العمل المسند</Label>
            <Input
              type="select"
              name="type"
              id="type"
              style={{ textAlign: "right" }}
              onChange={e => setType(e.target.value)}
            >
              <option value="نظام">نظام</option>
              <option value="بحث">بحث</option>
            </Input>
          </FormGroup>
        </CardBody>
      </Card>

      <Button onClick={onPoliceAdd} className="mt-2" color="primary">
        إضافة
      </Button>
    </div>
  );
};

export default PoliceForm;
