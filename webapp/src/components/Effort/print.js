import React, { useRef } from "react";
import "./print.css";
import { Button } from "reactstrap";
import ReactToPrint from "react-to-print";
const image = require("./image.jpeg");

const Print = () => {
  const toPrint = useRef(null);

  return (
    <div>
      <ReactToPrint
        trigger={() => <Button>طباعة</Button>}
        content={() => toPrint.current}
      />

      <div style={{ padding: 50 }} ref={toPrint}>
        <div>
          <div class="top-container">
            <div>
              <br />
              <img src={image} />
            </div>
            <div style={{ textAlign: "center" }}>
              <br />
              <div style={{ fontSize: 23 }}>
                مديرية أمن القاهرة
                <br /> قطاع القاهرة الجديدة
                <br /> إدارة تأمين القاهرة الجديدة
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2>
              <strong>
                مجهود يوم الجمعة الموافق 29 / 11 / 2019 م الفتره الليليه
              </strong>
            </h2>
          </div>

          <table
            style={{ marginTop: 50 }}
            border="1"
            cellspacing="0"
            cellpadding="10"
            class="center"
          >
            <tbody>
              <tr>
                <td valign="top">
                  <h3>
                    <strong>مجمع الإحكام</strong>
                  </h3>
                </td>
                <td valign="top">
                  <h3>
                    <strong>متهم </strong>
                  </h3>
                </td>
                <td valign="top">
                  <h3>
                    <strong>تلبس</strong>
                  </h3>
                </td>
                <td valign="top">
                  <h3>
                    <strong>جنايات</strong>
                  </h3>
                </td>
                <td valign="top">
                  <h3>
                    <strong>مخدرات</strong>
                  </h3>
                </td>
                <td valign="top">
                  <h3>
                    <strong>أحكام جزئية</strong>
                  </h3>
                </td>
              </tr>

              <tr>
                <td valign="top">
                  <h3>
                    <strong>11/30</strong>
                  </h3>
                </td>
                <td valign="top">
                  <h3>
                    <strong>11</strong>
                  </h3>
                </td>
                <td valign="top"> </td>
                <td valign="top"> </td>
                <td valign="top"> </td>
                <td valign="top">
                  <h3>
                    <strong>30</strong>
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ textAlign: "right" }}>
            <h3>
              <strong>(قول ( الشويفات </strong>
            </h3>
            <p>
              <strong>
                :تمكن النقيب / محمد مجدي..............................ضابط مباحث
                القول من ضبط المدعو{" "}
              </strong>
            </p>
            <p>
              <strong>
                1-بهاء الدين عيسي سلوسي محمد موليد 1996 مقيم مركز وركان العدوه
                المنيا{" "}
              </strong>
            </p>
            <p>
              <strong>
                -القضية 9418/2017 جنح مستأنف القسم حصر3619/2018 كلي 5337/2018
                تبديد حبس 1 سنه غيابي جلسة 23/9/2018{" "}
              </strong>
            </p>
            <h3>
              <strong>(قول ( الياسمين </strong>
            </h3>
            <p>
              <strong>
                :تمكن النقيب / محمود لطفي .................................ضابط
                مباحث القول من ضبط المدعو{" "}
              </strong>
            </p>
            <p>
              <strong>
                1-محمد غزال حسن احمد موليد 1983 مقيم 109 البحر الاعظم المقطم
                القاهره{" "}
              </strong>
            </p>
            <p>
              <strong>
                -القضية 22164/2019 ج المركز فشن حصر 996/2019 تبديد حبس 1 سنه
                غيابي جلسة 30/1/2019{" "}
              </strong>
            </p>
            <p>
              <strong>
                2- المتولي سليمان محمود 34سنه علي المقيم قريه 8 العنابر مركز
                الحامول كفر الشيخ{" "}
              </strong>
            </p>
            <p>
              <strong>
                -القضية 34957/2016 جنح مركز الحامول حصر36547/2016 ضرب حبس 1
                اسبوع غيابي جلسة 31/12/2016{" "}
              </strong>
            </p>
          </div>
          <div tyle={{ textAlign: "left" }}>
            <div style={{ display: "inline-block", textAlign: " center" }}>
              <p>
                <strong> /عميـــــــد </strong>
              </p>
              <p>
                <strong> محمد محمد عمر </strong>
              </p>
              <p>
                <strong> مدير إدارة تأمين القاهرة الجديدة</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Print;
