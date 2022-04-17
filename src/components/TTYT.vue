<template>
   <div class="ttyt">
        <div class="ttyt_title">
            <i class="fas fa-exclamation-triangle"></i>
            <span>Thông tin y tế</span>
        </div>
        <div class="ttyt_content">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="pills-tc-tab" data-toggle="pill" href="#pills-tc" role="tab" aria-controls="pills-tc" aria-selected="true">Triệu chứng</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="pills-bf-tab" data-toggle="pill" href="#pills-bf" role="tab" aria-controls="pills-bf" aria-selected="false">Biện pháp phòng ngừa</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="pills-dt-tab" data-toggle="pill" href="#pills-dt" role="tab" aria-controls="pills-dt" aria-selected="false">Điều trị</a>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-tc" role="tabpanel" aria-labelledby="pills-tc-tab">
                    <h1>Triệu chứng</h1>
                    <p>COVID-19 tác động đến mỗi người theo những cách khác nhau. Hầu hết những người 
                        <br>nhiễm vi-rút sẽ có triệu chứng bệnh từ nhẹ đến trung bình và có thể hồi phục mà không cần 
                        <br>nhập viện.
                    </p>
                    <p>Các triệu chứng thường gặp nhất:</p>
                    <ul>
                        <li>sốt</li>
                        <li>ho</li>
                        <li>mệt mỏi</li>
                        <li>mất vị giác hoặc khứu giác</li>
                    </ul>
                    <p>Các triệu chứng ít gặp hơn:</p>
                    <ul>
                        <li>đau họng</li>
                        <li>đau đầu</li>
                        <li>tiêu chảy</li>
                        <li>da nổi mẩn hay ngón tay hoặc ngón chân bị tấy đỏ hoặc tím tái</li>
                    </ul>
                    <p>Các triệu chứng nghiêm trọng:</p>
                    <ul>
                        <li>khó thở</li>
                        <li>mất khả năng nói hay cử động hoặc thấy lú lẫn</li>
                        <li>đau ngực</li>
                    </ul>
                    <p>Hãy đi khám ngay lập tức nếu bạn gặp phải các triệu chứng nghiêm trọng. Luôn gọi điện trước khi gặp 
                        <br>bác sĩ hoặc đến cơ sở y tế.
                    </p>
                    <p>
                        Những người có triệu chứng nhẹ và không có biểu hiện bệnh nào khác nên điều trị triệu chứng tại nhà.
                    </p>
                    <p>
                        Thông thường, các triệu chứng sẽ xuất hiện sau 5-6 ngày kể từ khi một người nhiễm vi-rút. Tuy nhiên, 
                        <br>thời gian này có thể lên tới 14 ngày.
                    </p>
                    <div class="whoint">
                        <i class="fas fa-globe"> </i>
                        <span>Tìm hiểu thêm trên <a href="https://www.who.int/health-topics/coronavirus#tab=tab_3">who.int</a></span>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-bf" role="tabpanel" aria-labelledby="pills-bf-tab">
                    <div class="bp_title">
                        <img src="https://www.gstatic.com/healthricherkp/campaigns/wear-mask-save-lives/UZ9ZuX.svg" width="8%">
                        <h1>"5K" chung sống an toàn<br>với dịch bệnh</h1>
                        <p>Khẩu trang
                            <br>Khử khuẩn
                            <br>Khoảng cách & Không tụ tập
                            <br>Khai báo y tế
                            <br>Tiêm vắc-xin
                        </p>
                    </div>
                    <div class="tt_chung">
                        <div class="tt_chung_left">
                            <p>Thông tin chung về y tế công cộng</p>
                        </div>
                        <div class="tt_chung_right">
                            <button type="button" class="btn btn-primary"><a href="https://covid19.gov.vn/"> Xem thêm</a></button>
                        </div>
                    </div>
                    <div class="bp_content">
                        <p>Tham khảo thông tin của cơ quan y tế địa phương để biết chỉ dẫn phù hợp nhất với khu vực của bạn.
                            <br>
                            <br>
                            Cách ngăn chặn COVID-19 lây lan:
                        </p>
                        <ul>
                            <li>Giữ khoảng cách an toàn với người khác (ít nhất 1 mét), kể cả khi họ không có biểu hiện bệnh.</li>
                            <li>Đeo khẩu trang ở nơi công cộng, nhất là khi ở trong nhà hoặc khi không thể giữ khoảng cách.</li>
                            <li>Chọn những không gian mở, thông thoáng thay vì những không gian kín. Mở cửa sổ nếu ở trong nhà.</li>
                            <li>Thường xuyên rửa tay. Dùng xà phòng và nước hoặc dung dịch rửa tay chứa cồn.</li>
                            <li>Tiêm vaccine khi đến lượt. Tuân thủ chỉ dẫn của địa phương về việc tiêm vaccine.</li>
                            <li>Khi ho hoặc hắt hơi, hãy che mũi và miệng bằng khăn giấy hoặc khuỷu tay.</li>
                        </ul>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-dt" role="tabpanel" aria-labelledby="pills-dt-tab">
                    <h1>Điều trị</h1>
                    <p>Tự chăm sóc
                        <br>Sau khi tiếp xúc với người nhiễm COVID-19, vui lòng làm những việc sau:
                    </p>
                    <ul>
                        <li>Gọi điện cho nhà cung cấp dịch vụ y tế của bạn hoặc đường dây nóng về COVID-19 để biết địa điểm 
                            <br>và thời gian làm xét nghiệm.</li>
                        <li>Hợp tác thực hiện các quy trình truy vết tiếp xúc để ngăn chặn sự lây lan của vi-rút.</li>
                        <li>Nếu bạn không thể xét nghiệm, hãy ở nhà và không lại gần người khác trong 14 ngày.</li>
                        <li>Trong thời gian cách ly, bạn không được đi làm, đi học hoặc đi đến nơi công cộng. Hãy nhờ một 
                            <br>người khác mang nhu yếu phẩm đến cho bạn.</li>
                        <li>Giữ khoảng cách ít nhất 1 mét với những người khác, kể cả với người nhà.</li>
                        <li>Đeo khẩu trang y tế để bảo vệ người khác, kể cả khi/trong trường hợp bạn cần liên hệ với nhân viên y 
                            <br>tế để được trợ giúp.</li>
                    </ul>
                    <div class="whoint">
                        <i class="fas fa-globe"> </i>
                        <span>Tìm hiểu thêm trên <a href="https://www.who.int/health-topics/coronavirus#tab=tab_3">who.int</a></span>
                    </div>
                </div>
              </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.ttyt {
    width: 480px !important;
}
body{
    padding: 50px 80px;
}

.sltk_title h2{
    font-size: 20px;
    font-weight: 400;
    margin-left: 20px;
}

.nav-item{
    border: 1px solid gray;
    border-radius: 10px;
    margin-right: 10px;
    
}

.nav-link{
    color: black;
}

/* Thông tin y tế */
.ttyt{
    margin-top: 50px;
}

.ttyt_title{
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 20px;
}

.ttyt_title i{
    color: red;
}

.whoint{
    display: inline-block;
    font-size: 22px;
    margin: 27px 398px;
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px 10px;
}

#pills-tc{
    margin-bottom: 20px;
}

.tt_chung{
    display: flex;
    width: 70%;
    margin: 20px auto;
    justify-content: space-around;
}

.tt_chung_right button a{
    color: white;
}

.bp_title{
    text-align: center;
    margin-bottom: 40px;
}

.bp_title h1{
    font-size: 35px;
    margin-top: 15px;
}

.bp_title p{
    font-size: 26px;
    font-weight: 500;
    color: #000026;
}
</style>