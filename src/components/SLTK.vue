<template>
   <div class="container">
           <!-- Số liệu thống kê -->
    <div class="sltk">
        <div class="sltk_title">
            <h1>Số liệu thống kê</h1>
            <h2>- Số ca nhiễm mới và số ca tử vong</h2>
            <p>Theo <a href="https://github.com/CSSEGISandData/COVID-19"> JHU CSSE COVID-19 Data </a>· Lần cập nhật gần nhất: 1 ngày trước</p>
        </div>

        <hr  width="100%" size="1px" align="center" color="gray" />

        <div class="sltk_map">
            <ul class="nav nav-pills">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">Ca mới</a>
                   <div class="dropdown-menu">
                      <a class="dropdown-item" href="">Ca mới</a>
                      <a class="dropdown-item" href="">Tử vong</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="" role="button">Việt Nam</a>
                  </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">Từ trước đến nay</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="">Từ trước đến nay</a>
                        <a class="dropdown-item" href="">2 tuần</a>
                        <a class="dropdown-item" href="">30 ngày</a>
                        <a class="dropdown-item" href="">3 tháng</a>
                        <a class="dropdown-item" href="">6 tháng</a>
                    </div>
                </li>
            </ul>
            <img src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/9/6/ca-moi-toi-6-16309279346442073512833.jpeg">
        </div>
        
        <hr  width="100%" size="1px" align="center" color="gray" />

        <p>Số ca nhiễm mới mỗi ngày lấy từ số liệu ghi nhận của ngày trước đó· <a href="https://support.google.com/websearch/answer/9814707?p=cvd19_statistics&hl=vi&visit_id=637857648944636968-541527580&rd=1"> Thông tin về dữ liệu này</a></p>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
    width: 480px !important;
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