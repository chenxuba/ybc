<template>
  <div>
    <div class="dot">
      <div class="dot1"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dot {
  width: 15px;
  height: 15px;
  border: solid 1px #38a4bd;
  box-sizing: border-box;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
}
.dot .dot1 {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #38a4bd;
  margin: 2px;
}

.dot:before {
  content: "";
  position: absolute;
  top: 4px;
  right: -120px;
  width: 100px;
  border-top: 1px solid #38a4bd;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.dot:after {
  content: "";
  position: absolute;
  top: 6px;
  left: -120px;
  width: 100px;
  border-top: 1px solid #38a4bd;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
</style>
