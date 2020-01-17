<?php
 include('connect.php');
 include('test.php');
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>

    <meta charset="utf-8"/>
    <title></title>

  </head>
  <body>
    <div  align="center" color="white" >
      <font color="white">
        <br> <br> <br><br><br><br><br><br><br>
    <h1 style="font-size: 3em"> تسجيل مجهود أحكام </h1>

  </div>
  <br> <br> <br> <br> <br>  <br> <br>



    <div  align="center" style="font-size: 2em">
      <table style="width:50%; border-spacing: 10px">
        <tr>
        <td>
      <select>
        <option value="السبت">السبت</option>
        <option value="الأحد">الأحد</option>
        <option value="الاثنين">الاثنين</option>
        <option value="الثلاثاء">الثلاثاء</option>
        <option value="الأربعا">الأربعاء </option>
        <option value="الخميس">الخميس </option>
        <option value="الجمعة">الجمعة</option>

      </select>
    </td>
      <td>
  <label>عن يوم </label>
</td>
</tr>
<tr>
<td>
  <input  type="date" />
</td>
<td>
   <label>الموافق </label>
</td>
</tr>
<tr class="blank_row">
    <td colspan="3"></td>
</tr>
<tr>
<td>
   <select>
     <option value="one">غرب اربيلا</option>
     <option value="two">الدبلوماسيين</option>
     <option value="three">الشويفات</option>
     <option value="four">الحي الرابع</option>
     <option value="five">الحي الثاني </option>
     <option value="six">النرجس 1</option>
     <option value="seven">النرجس 2</option>
     <option value="eight">المستثمرين الجنوبية 1</option>
     <option value="nine">المستثمرين الجنوبية 2</option>
     <option value="ten">جنوب الأكاديمية </option>
     <option value="eleven">البنوك</option>
     <option value="twelve">الياسمين</option>
     <option value="thirteen">المجاورات</option>
     <option value="fourteen">البنفسج</option>
     <option value="fifteen">الرحاب 1</option>
     <option value="sixteen">الرحاب 2</option>
     <option value="seventeen">مدينتي</option>
     <option value="eighteen">المستثمرين الشمالية</option>
     <option value="nineteen">الأيقونة</option>
     <option value="twenty">اللوتس</option>
   </select>
 </td>
<td>

    <label>القول</label>
</td>
</tr>
<tr class="blank_row">
    <td colspan="3"></td>
</tr>
<tr>
  <td>
    <select>
      <option value="onen">ملازم</option>
      <option value="twon">ملازم أول</option>
      <option value="threen">نقيب</option>
      <option value="fourn">رائد</option>
      <option value="fiven">مقدم</option>
      <option value="sixn">عقيد</option>
      <option value="sevenn">عميد</option>
      <option value="eightn">لواء</option>

    </select>
</td>
<td>
     <label>الرتبة</label><br>
   </td>
 </tr>
 <tr>
   <td>
     <select>
   <option value="محمد محمد عمر">محمد محمد عمر</option>
 <option value="رمضان صابر مرجان">رمضان صابر مرجان </option>
 <option value="أحمد ابراهيم جاد عبدالكريم">أحمد ابراهيم جاد عبدالكريم </option>
 <option value="وائل سعيد ابراهيم الفقي">وائل سعيد ابراهيم الفقي </option>
 <option value="عمرو محمد أحمد الصادق">عمرو محمد أحمد الصادق </option>
 <option value="باسم سامح عبدالحميد الوزير">باسم سامح عبدالحميد الوزير</option>
 <option value="فايز محمد العشماوي عابد">فايز محمد العشماوي عابد</option>
 <option value="أحمد عبده محمد أنور">أحمد عبده محمد أنور</option>
 <option value="أحمد عاطف محمد فهمي العدوي">أحمد عاطف محمد فهمي العدوي</option>
 <option value="ممدوح الشافعي علي علي">ممدوح الشافعي علي علي</option>
 <option value="محمد أحمد لطفي طنطاوي">محمد أحمد لطفي طنطاوي</option>
 <option value="رامي مصطفى عدلي سعيد">رامي مصطفى عدلي سعيد</option>
 <option value="مصطفى شوقي أحمد موسى">مصطفى شوقي أحمد موسى</option>
 <option value="أسامة حافظ صابر حافظ">أسامة حافظ صابر حافظ</option>
 <option value="جلال عبدالحفيظ عبدالقادر الشرقاوي">جلال عبدالحفيظ عبدالقادر الشرقاوي</option>
 <option value="عادل أحمد محمد كاشف">عادل أحمد محمد كاشف</option>
 <option value="محمد نبيل عبد القادر يوسف">محمد نبيل عبد القادر يوسف</option>
 <option value="محمد مصطفى محمد مصطفى">محمد مصطفى محمد مصطفى</option>
 <option value="أحمد محمود حسن حلمي طوبار">أحمد محمود حسن حلمي طوبار</option>
 <option value="عمرو خالد محمد حسين">عمرو خالد محمد حسين</option>
 <option value="مجدي شوقي محمد فراج">مجدي شوقي محمد فراج</option>
 <option value="محمد أحمد فخري مرزوق">محمد أحمد فخري مرزوق</option>
 <option value="شريف عبدالمنعم موسى عبدالمحسن">شريف عبدالمنعم موسى عبدالمحسن</option>
 <option value="أسامة ابراهيم عبدالمعبود محمد">أسامة ابراهيم عبدالمعبود محمد</option>
 <option value="مصطفى أشرف محمود عبدالمنعم">مصطفى أشرف محمود عبدالمنعم</option>
 <option value="أحمد محمد اكرام فهمي">أحمد محمد اكرام فهمي</option>
 <option value="محمد مصطفى كامل حلمي">محمد مصطفى كامل حلمي</option>
 <option value="بيشوي ناظم ناجي شاكر">بيشوي ناظم ناجي شاكر</option>
 <option value="عمرو محمد سيد عثمان شومر">عمرو محمد سيد عثمان شومر</option>
 <option value="وليد سعد الدين محمد مصطفى">وليد سعد الدين محمد مصطفى</option>
 <option value="حاتم أحمد عبدالعظيم زهران">حاتم أحمد عبدالعظيم زهران</option>
 <option value="محمد مجدي حسانين ابراهيم حسانين">محمد مجدي حسانين ابراهيم حسانين</option>
 <option value="حسن مجدي حسن توفيق">حسن مجدي حسن توفيق</option>
 <option value="مصطفى سعيد حامد محمد">مصطفى سعيد حامد محمد</option>
 <option value="نور الدين طارق علي محمد">نور الدين طارق علي محمد</option>
 <option value="محمد طارق أنور متبولي">محمد طارق أنور متبولي</option>
 <option value="عبد الرحمن ثروت عبد الرحمن">عبد الرحمن ثروت عبد الرحمن</option>
 <option value="ابراهيم حسن عبدالمتعال موسى">ابراهيم حسن عبدالمتعال موسى</option>
 <option value="محمد ابراهيم السيد أبوكيلة">محمد ابراهيم السيد أبوكيلة</option>
 <option value="محمود محمد أبوزيد طغيان">محمود محمد أبوزيد طغيان</option>
 <option value="مهند أيمن اسماعيل السيد">مهند أيمن اسماعيل السيد</option>
 <option value="بيتر لمعي حكيم عوض">بيتر لمعي حكيم عوض</option>
 <option value="محمود جمال أحمد كامل">محمود جمال أحمد كامل</option>
 <option value="محمود حسام ماجد القصبي">محمود حسام ماجد القصبي</option>
 <option value="محمد مجدي أبوالخير عبدالرحمن">محمد مجدي أبوالخير عبدالرحمن</option>
 <option value="عمرو هشام عبد السميع محمد والي">عمرو هشام عبد السميع محمد والي</option>
 <option value="فادي عبدالرحيم محمد عبدالرحيم">فادي عبدالرحيم محمد عبدالرحيم</option>
 <option value="مروان شريف صالح عبدالحليم">مروان شريف صالح عبدالحليم</option>
 <option value="أحمد جاب الله محمد عفيفي">أحمد جاب الله محمد عفيفي</option>
 <option value="عمر هشام عبدالعزيز بهجت">عمر هشام عبدالعزيز بهجت</option>
 <option value="محمد جمال صلاح الدين">محمد جمال صلاح الدين</option>
 <option value="محمد هشام علي الدسوقي">محمد هشام علي الدسوقي</option>
 <option value="عمرو محمد دياب سليمان">عمرو محمد دياب سليمان</option>
 <option value="أحمد عبدالفتاح عبدالله عبدالمجيد">أحمد عبدالفتاح عبدالله عبدالمجيد</option>
 <option value="شادي هيثم محمود عبدالحميد">شادي هيثم محمود عبدالحميد</option>
 <option value="محمد علاء الدين محمد حسن">محمد علاء الدين محمد حسن</option>
 <option value="محمد مجدي ذكي">محمد مجدي ذكي</option>
 <option value="باسم الخولي">باسم الخولي</option>
</select>
</td>
<td>
      <label>ظابط النظام </label><br>
    </td>
  </tr>
  <tr>
    <td>
      <select>
        <option value="onem">ملازم</option>
        <option value="twom">ملازم أول</option>
        <option value="threem">نقيب</option>
        <option value="fourm">رائد</option>
        <option value="fivem">مقدم</option>
        <option value="sixm">عقيد</option>
        <option value="sevenm">عميد</option>
        <option value="eightm">لواء</option>

      </select>
    </td>
    <td>
       <label>الرتبة</label><br>
       </td>
     </tr>
     <tr>
       <td>
<select>

  <option value="محمود حامد محمود حامد">محمود حامد محمود حامد</option>
  <option value="محمد أحمد عبدالمطلب طلبة">محمد أحمد عبدالمطلب طلبة</option>
  <option value="أحمد محمد صبري ابراهيم الشاهد">أحمد محمد صبري ابراهيم الشاهد</option>
  <option value="محمود أحمد محمد محمد الجرواني">محمود أحمد محمد محمد الجرواني</option>
  <option value="أحمد صبري ابراهيم أحمد">أحمد صبري ابراهيم أحمد</option>
  <option value="أحمد مصطفى الكيلاني عبدالمجيد">أحمد مصطفى الكيلاني عبدالمجيد</option>
  <option value="حسام محمد فهيم">حسام محمد فهيم</option>
  <option value="محمد سمير عبدالفتاح">محمد سمير عبدالفتاح</option>
  <option value="ابانوب عماد انطون شفيق">ابانوب عماد انطون شفيق</option>
  <option value="أحمد محمد أحمد محمد الجيزاوي">أحمد محمد أحمد محمد الجيزاوي</option>
  <option value="باسم عيد أحمد محمود فودة">باسم عيد أحمد محمود فودة</option>
  <option value="أحمد محمد ذكي الجندي">أحمد محمد ذكي الجندي</option>
  <option value="أحمد محمد سعد علي">أحمد محمد سعد علي</option>
  <option value="اسلام حازم انس محمد">اسلام حازم انس محمد</option>
  <option value="رامي منير علي">رامي منير علي</option>
  <option value="محمد عمرو مأمون الامير حسين">محمد عمرو مأمون الامير حسين</option>
  <option value="محمد حسن أحمد أبوالحسن">محمد حسن أحمد أبوالحسن</option>
  <option value="اسلام أحمد سعد">اسلام أحمد سعد</option>
  <option value="محمد حسام شاهين">محمد حسام شاهين</option>
  <option value="محمود عبدالقوي أحمد">محمود عبدالقوي أحمد</option>
  <option value="أحمد مصطفى عبدالمجيد الشناوي"> أحمد مصطفى عبدالمجيد الشناوي</option>
  <option value="محمود لطفي يوسف">محمود لطفي يوسف</option>
  <option value="الحسين محمد عبدالفتاح">الحسين محمد عبدالفتاح</option>
  <option value="عبدالعزيز محمود">عبدالعزيز محمود</option>
  <option value="محمد عز الدين محمد سليم">محمد عز الدين محمد سليم</option>
  <option value="محمد مجدي خليل">محمد مجدي خليل</option>
  <option value="أحمد جمال فاروق">أحمد جمال فاروق</option>
  <option value="محمد إيهاب سلامة محمد شطا">محمد إيهاب سلامة محمد شطا</option>
  <option value="معتصم محمد رشاد محمد الحيني">معتصم محمد رشاد محمد الحيني</option>
  <option value="علاء خالد محمد عبدالحكيم حسين الماحي">علاء خالد محمد عبدالحكيم حسين الماحي</option>
  <option value="أحمد محمد محمود الخمري">أحمد محمد محمود الخمري</option>
  <option value="معتز موسى موسى أحمد">معتز موسى موسى أحمد</option>
  <option value="محمد علي العزازي">محمد علي العزازي</option>
  <option value="محمد أحمد عبدالمنعم ربيع">محمد أحمد عبدالمنعم ربيع</option>
  <option value="محمد فتح الله حسني">محمد فتح الله حسني</option>
  <option value="ياسر محمود شرف">ياسر محمود شرف</option>
  <option value="مصطفى أشرف عبدالحميد">مصطفى أشرف عبدالحميد</option>
  <option value="أحمد حمدي عبدالرحيم">أحمد حمدي عبدالرحيم</option>
  <option value="عبدالرحمن خالد مصطفى سليمان غانم">عبدالرحمن خالد مصطفى سليمان غانم</option>
  <option value="أحمد وسام عاطف خليل">أحمد وسام عاطف خليل</option>
  <option value="ابراهيم محفوظ حسين محمد">ابراهيم محفوظ حسين محمد</option>
</select>
</td>
<td>


        <label>ظابط البحث</label>
</td>
</tr>
<tr class="blank_row">
    <td colspan="3"></td>
</tr>
<tr>
  <td>
      <input  type="text" />
    </td>
    <td>
       <label>اسم المتهم </label> <br>
     </td>
   </tr>
   <tr>
     <td>
       <input  type="text" />
     </td>
     <td>
        <label>مواليد </label><br>
      </td>
    </tr>
    <tr>
      <td>
        <input  type="text" />
      </td>
      <td>
         <label>مقيم </label><br>
       </td>
     </tr>
     <tr class="blank_row">
    <td colspan="3"></td>
</tr>
     <tr>
       <td>
       <select >
         <option value="تم تسليمه">تم تسليمه</option>
         <option value="تم اعلانه">تم اعلانه </option>

       </select>
     </td>
     <td>
      <label>تم تسليمه/اعلانه</label> <br>
    </td>
  </tr>
  <tr>
    <td>
      <select >
        <option value="غيابي">غيابي</option>
        <option value="حضوري">حضوري</option>

      </select>
    </td>
    <td>
      <label>غيابي/حضوري</label> <br>
    </td>
  </tr>
  <tr>
    <td>
      <select >
        <option value="جناية">جناية</option>
        <option value="جنحة">جنحة</option>

      </select>
    </td>
    <td>
      <label>جناية/جنحة</label><br>
    </td>
  </tr>
  <tr>
    <td>
      <input  type="text" />
    </td>
    <td>
      <label>الحكم</label><br>
    </td>
  </tr>
  <tr>
    <td>
      <input  type="text" />
    </td>
    <td>
      <label>رقم القضية</label><br>
    </td>
  </tr>
  <tr>
    <td>
      <input  type="text" />
    </td>
    <td>
      <label>رقم الحصر</label><br>
    </td>
  </tr>
  <tr>
    <td>
      <input  type="text" />
    </td>
    <td>
      <label>كلي مستأنف</label> <br>
    </td>
  </tr>
  <tr>
    <td>
      <div class="containerelta">
        <textarea></textarea>
    </td>
    <td>
      <label>ملخص الواقعة</label>
    </td>
  </tr>
</table>
      <button type="button">اضافة حكم لنفس المتهم </button>
      <button type="button">  حفظ واضافة أحكام لمتهم اخر</button>
      <button type="button"> حفظ واضافة أحكام لقول اخر</button>
      <button type="button">اضافة أحكام ليوم اخر </button>
      <input type="submit" name="backonly" class="textInput" value="رجوع">
      <input type="submit" name="registeronly" class="textInput" value="حفظ">

</div>

</div>
</font>
</body>
</html>



<style>
input[type='text'] { font-size: 24px; text-align: right }
input[type='date'] { font-size: 24px; text-align: right }
select { font-size:24px; }
td {text-align: right}
.containerelta {
  height:200px;
  width: 100%;
 }
.containerelta textarea
{
    height:200px;
    width: 100%;
    text-align:right;
    font-size: 24px;
    box-sizing: border-box;
}
.blank_row
{
    height: 30px !important;
  }
#nav_container {
background-color:#DDDDDD;
list-style-type:none;
margin-bottom: 15px;
}
</style>
</html>
