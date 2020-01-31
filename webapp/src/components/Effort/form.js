import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { createCase, updateCase, addEffort } from "redux/actions/effort";
import { getPolice } from "redux/actions/police";

const PoliceForm = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [birthplace, setBirthplace] = useState("");
  const [policemanN, setPolicemanN] = useState(0);
  const [policemanM, setPolicemanM] = useState(0);
  const [date, setDate] = useState("");
  const [placeK, setPlaceK] = useState("");
  const cases = useSelector(state => state.effort.cases);
  const police = useSelector(state => state.police.list) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPolice.request());
  }, [dispatch]);

  const onEffortAdd = () => {
    const body = {
      criminal: {
        name,
        birthday,
        birthplace
      },
      effort: {
        policemanN,
        policemanM,
        date,
        placeK
      }
    };

    dispatch(addEffort.request(body));
  };

  const addCase = () => {
    dispatch(createCase());
  };

  return (
    <div style={{ textAlign: "right" }}>
      <Card>
        <CardHeader>
          <strong>معلومات المجهود</strong>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label htmlFor="date">موافق</Label>
            <Input
              type="date"
              id="policemanN"
              placeholder="إسم المتهم"
              required
              style={{ textAlign: "right" }}
              onChange={e => setDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="placeK">القول</Label>
            <Input
              type="select"
              id="placeK"
              placeholder="القول"
              required
              style={{ textAlign: "right" }}
              onChange={e => setPlaceK(e.target.value)}
            >
              <option value="غرب اربيلا">غرب اربيلا</option>
              <option value="الدبلوماسيين">الدبلوماسيين</option>
              <option value="الشويفات">الشويفات</option>
              <option value="الحي الرابع">الحي الرابع</option>
              <option value="الحي الثان">الحي الثاني </option>
              <option value="النرجس 1">النرجس 1</option>
              <option value="النرجس 2">النرجس 2</option>
              <option value="المستثمرين الجنوبية 1">
                المستثمرين الجنوبية 1
              </option>
              <option value="المستثمرين الجنوبية 2">
                المستثمرين الجنوبية 2
              </option>
              <option value="جنوب الأكاديمية ">جنوب الأكاديمية </option>
              <option value="البنوك">البنوك</option>
              <option value="الياسمين">الياسمين</option>
              <option value="المجاورات">المجاورات</option>
              <option value="البنفسج">البنفسج</option>
              <option value="الرحاب 1">الرحاب 1</option>
              <option value="الرحاب 2">الرحاب 2</option>
              <option value="مدينتي">مدينتي</option>
              <option value="المستثمرين الشمالية">المستثمرين الشمالية</option>
              <option value="الأيقونة">الأيقونة</option>
              <option value="اللوتس">اللوتس</option>
            </Input>
          </FormGroup>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <strong>معلومات المتهم </strong>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label htmlFor="name">الاسم المتهم</Label>
            <Input
              type="text"
              id="name"
              placeholder="إسم المتهم"
              required
              style={{ textAlign: "right" }}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">تاريخ ميلاد المتهم</Label>
            <Input
              type="date"
              id="birthday"
              placeholder="تاريخ ميلاد المتهم"
              required
              style={{ textAlign: "right" }}
              onChange={e => setBirthday(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">محل الولادة</Label>
            <Input
              type="text"
              id="birthplace"
              placeholder="محل الولادة"
              required
              style={{ textAlign: "right" }}
              onChange={e => setBirthplace(e.target.value)}
            />
          </FormGroup>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <strong>معلومات ظباط الشرطة</strong>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label htmlFor="policemanN">ظابط النظام</Label>
            <Input
              type="select"
              id="policemanN"
              placeholder="ظابط النظام"
              required
              style={{ textAlign: "right" }}
              onChange={e => setPolicemanN(e.target.value)}
            >
              {police.map(_police => (
                <option value={_police.id}>
                  {_police.rank} - {_police.name}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="policemanM">ظابط البحث</Label>
            <Input
              type="select"
              id="policemanM"
              placeholder="ظابط البحث"
              required
              style={{ textAlign: "right" }}
              onChange={e => setPolicemanM(e.target.value)}
            >
              {police.map(_police => (
                <option value={_police.id}>
                  {_police.rank} - {_police.name}
                </option>
              ))}
            </Input>
          </FormGroup>
        </CardBody>
      </Card>

      <div className="mb-2">
        <span className="h5">الاحكام المنسبة للمتهم</span>
      </div>
      {cases.map((item, index) => (
        <Case {...item} index={index} />
      ))}
      <Button onClick={addCase} className="mt-2" color="success">
        إضافة حكم
      </Button>
      <Button block onClick={onEffortAdd} className="mt-2" color="primary">
        إضافة
      </Button>
    </div>
  );
};

const Case = ({ index }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const onChange = e => {
    console.log(state);
    setState({ ...state, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    dispatch(updateCase({ index, state }));
  }, [dispatch, index, state]);

  return (
    <Card>
      <CardHeader>
        <strong>حكم</strong>
      </CardHeader>
      <CardBody>
        <FormGroup>
          <Label htmlFor="caseNum">رقم القضية</Label>
          <Input
            type="text"
            id="caseNum"
            placeholder="رقم القضية"
            required
            style={{ textAlign: "right" }}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="hasrNum">رقم الحصر</Label>
          <Input
            type="text"
            id="hasrNum"
            placeholder="رقم الحصر"
            required
            style={{ textAlign: "right" }}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="appellant">كلي مستأنف</Label>
          <Input
            type="text"
            id="appellant"
            placeholder="كلي مستأنف"
            style={{ textAlign: "right" }}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="caseSum">ملخص الواقعة</Label>
          <Input
            type="text"
            id="caseSum"
            placeholder="ملخص الواقعة"
            required
            style={{ textAlign: "right" }}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="busted">تم تسليمه / إعلانه</Label>
          <Input
            type="select"
            id="busted"
            placeholder="تم تسليمه / إعلانه"
            required
            style={{ textAlign: "right" }}
            onChange={onChange}
          >
            <option value="1">تم تسليمه</option>
            <option value="0">تم إعلانه</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="caseType">نوع الحكم</Label>
          <Input
            type="select"
            id="caseType"
            placeholder="نوع الحكم"
            required
            style={{ textAlign: "right" }}
            onChange={onChange}
          >
            <option value="أحكام جزئية">أحكام جزئية </option>
            <option value="مخدرات">مخدرات</option>
            <option value="تلبس">تلبس</option>
            <option value="جنايات">جنايات</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="absent">غيابي / حضوري</Label>
          <Input
            type="select"
            id="absent"
            placeholder="غيابي/حضوري"
            required
            style={{ textAlign: "right" }}
            onChange={onChange}
          >
            <option value="0">غيابي</option>
            <option value="1">حضوري</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="felony">جناية / جنحة</Label>
          <Input
            type="select"
            id="felony"
            placeholder="جناية / جنحة"
            required
            style={{ textAlign: "right" }}
            onChange={onChange}
          >
            <option value="0">جناية</option>
            <option value="1">جنحة</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="punishment">الحكم</Label>
          <Input
            type="text"
            id="punishment"
            placeholder="الحكم"
            required
            style={{ textAlign: "right" }}
            onChange={onChange}
          />
        </FormGroup>
      </CardBody>
    </Card>
  );
};

export default PoliceForm;
