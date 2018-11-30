<template>
  <header id="nav">
    <div class="center">
      <h1 class="logo">
        <a href="/">医佰康</a>
      </h1>
      <nav class="link">
        <ul>
          <li>
            <router-link to="/homepage" active-class="active">首页<br><span>HOME</span></router-link>
          </li>
          <li>
            <router-link to="/noopsyche" active-class="active">智能康复<br><span>INTELLIGENT</span></router-link>
          </li>
          <li>
            <router-link to="/course" active-class="active">课程中心<br><span>COURSE</span></router-link>
          </li>
          <li>
            <router-link to="/news" active-class="active">新闻&科普<br><span>NEWS</span></router-link>
          </li>
          <li>
            <router-link to="/about" active-class="active">关于我们<br><span>ABOUT US</span></router-link>
          </li>
          <li>
            <router-link to="/publicBenefit" active-class="active">社会公益<br><span>WELFARE</span></router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {

  }

</script>

<style scoped>
  #nav {
    width: 100%;
    min-width: 1296px;
    height: 140px;
    /* position: fixed;top: 0;left: 0; */
    background-color: #fff;
    /* z-index: 99; */
    /* background-color: red; */
    box-shadow: 0px 5px 5px 0px rgba(27, 16, 10, 0.3);
    /* margin-bottom: 5px; */
  }

  #nav .center {
    width: 1296px;
    height: 140px;
    /* background-color: orange; */
    margin: 0 auto;
  }

  #nav .center .logo {
    width: 260px;
    height: 90px;
    background: url("../../../static/img/logo.png") no-repeat center;
    background-size: 100% 100%;
    text-indent: -9999px;
    float: left;
    margin-top: 25px;
  }

  #nav .center .logo a {
    display: block;
    width: 260px;
    height: 90px;
  }

  #nav .center .link {
    width: 780px;
    height: 21px;
    line-height: 21px;
    padding: 35px 0 0 0;
    float: right;
  }

  #nav .center .link li {
    float: left;
    text-align: center;
    width: 110px;
    margin-right: 20px;

  }
  #nav .center .link li:last-child{
    margin-left: 0;
  }

  #nav .center .link li span {
    color: #c9caca;
    font-size: 12px;
  }

  #nav .center .link li a {
    text-decoration: none;
    color: #000;
    padding: 5px 0;
    display: block;
    line-height: 25px;
    font-size: 17px;
    border-radius: 5px;
    transition: 0.2s;
  }

  #nav .center .link li a:hover,
  .active {
    background-color: #24b58b;
    color: #fff !important;
    transform: scale(1.1)
  }

</style>
