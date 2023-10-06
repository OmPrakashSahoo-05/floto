<script setup>
</script>

<template>
    <section class="h-100 gradient-form" style="background-color: #eee;">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-md-7 is">
          <div class="bw">
            <h1><img src="../assets/logo-.png"></h1>
          </div>
          <div class="icw">
            <h1 class="it">Welcome to <br/>Floto !</h1>
            <p class="itt"><justify>Getting regular update about the tree that you planted with a great enthusiasm through your smartphone or laptop is very handy. And Floto is making that possible by giving you related data that will help in saving the life and increasing the life span of your tree.</justify></p><br/>
            <ul class="itu">
            <li>&#10004;&nbsp;&nbsp;Tracking your plant through google maps.</li>
            <li>&#10004;&nbsp;&nbsp;Alert on deficiency of required element for plant.</li>
            <li>&#10004;&nbsp;&nbsp;Smart Watering</li>
            <li>&#10004;&nbsp;&nbsp;Smart Plant Recongniser Bot</li>
            </ul>
          </div>
        </div>
<!-- Login -->
        <div class="col-sm-6 col-md-5 form-section loginb">
          <div class="lw">
            <h2 class="lt">Sign Up</h2>
            <form action="#!">
                <div class="form-group">
                <label for="name" class="sr-only">Name</label>
                <input type="name" name="name" id="name" class="form-control" placeholder="Name">
              </div>

              <div class="form-group">
                <label for="email" class="sr-only">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Email">
              </div>
              <div class="form-group mb-3">
                <label for="password" class="sr-only">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Password">
              </div>
              <div class="d-flex justify-content-between align-items-center mb-5">
                <input name="login" id="login" class="btn login-btn" type="button" value="Sign Up">
<br/><br/>&nbsp;&nbsp;&nbsp;              
                <input name="login" id="login" class="btn login-btn" type="button" value="Sign Up with Google">

              </div>
              
            </form> 
            <p class="lwft">Already have an account?<br/> <a href="./Land" class="text-reset">Login here</a></p>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<style>
section {
  background-color: #fff;
  font-family: 'Karla', sans-serif; }
  
h1 > a {
    text-decoration:none;
    color:#fff !important;
}
.loginb{
    background-image: url(../assets/back1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-left: 150px;
    padding-bottom: 175px;

}
.is {
  background-image: url(../assets/back.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 75px 55px;
  min-height: 100vh;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  color:maroon ; }
  @media (max-width: 991px) {
    .is {
      padding-left: 50px;
      padding-right: 50px; } }
  @media (max-width: 767px) {
    .is {
      padding: 28px; } }
  @media (max-width: 575px) {
    .is {
      min-height: auto; } }

.bw img {
  height: 90px;
    width:130px; }

@media (max-width: 767px) {
  .bw {
    margin-bottom: 30px; } }

.icw {
  width: 460px;
  max-width: 100%;
  margin-top: 40px;
  margin-bottom: auto; }
  .icw .it {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 17px; }
  .icw .itt {
    font-size: 19px;
    line-height: 1.37; }
    .icw .itu {
    font-size: 18px;
    line-height: 1.37; }
@media (max-width: 767px) {
  .icw {
    margin-top: 35px; } }

.form-section {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center; }
  @media (max-width: 767px) {
    .form-section {
      padding: 35px; } }

.lw {
  width: 300px;
  max-width: 100%; }
  @media (max-width: 575px) {
    .lw {
      width: 100%; } }
  .lw .form-control {
    border: 0;
    border-bottom: 1px solid #e7e7e7;
    border-radius: 0;
    font-size: 14px;
    font-weight: bold;
    padding: 15px 10px;
    margin-bottom: 7px; }
    .lw .form-control::-webkit-input-placeholder {
      color: #b0adad; }
    .lw .form-control::-moz-placeholder {
      color: #b0adad; }
    .lw .form-control:-ms-input-placeholder {
      color: #b0adad; }
    .lw .form-control::-ms-input-placeholder {
      color: #b0adad; }
    .lw .form-control::placeholder {
      color: #b0adad; }

.lt {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px; }

.login-btn {
  padding: 13px 30px;
  background-color: #000;
  border-radius: 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff; }
  .login-btn:hover {
    border: 1px solid #000;
    background-color: transparent;
    color: #000; }

.forgot-password-link {
  font-size: 14px;
  color: #080808;
  text-decoration: underline; }

.social-login-title {
  font-size: 15px;
  color: #919aa3;
  display: -webkit-box;
  display: flex;
  margin-bottom: 23px; }
  .social-login-title::before, .social-login-title::after {
    content: "";
    background-image: -webkit-gradient(linear, left top, left bottom, from(#f4f4f4), to(#f4f4f4));
    background-image: linear-gradient(#f4f4f4, #f4f4f4);
    -webkit-box-flex: 1;
            flex-grow: 1;
    background-size: calc(100% - 20px) 1px;
    background-repeat: no-repeat; }
  .social-login-title::before {
    background-position: center left; }
  .social-login-title::after {
    background-position: center right; }

.social-login-links {
  text-align: center;
  margin-bottom: 32px; }

.social-login-link img {
  width: 40px;
  height: 40px;
  -o-object-fit: contain;
     object-fit: contain; }

.social-login-link + .socia-login-link {
  margin-left: 16px; }

.lwft {
  font-size: 14px;
  text-align: center; }</style>
