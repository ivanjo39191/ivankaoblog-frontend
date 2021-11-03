<template>
  <div class="app-footer">
    <div class="main">
      <div class="left">
        <div class="left-top">
          <div class="left-top-logo" />
          <div class="left-top-content">
            <p>Designed by ivankao </p>
            <p>版權所有，未經許可，不許轉載</p>
            <p>© 2021 IvanKao CO.,LTD. All Rights Reserved.</p>
          </div>
        </div>
        <div class="left-bottom" />
      </div>
      <div class="right">
        <div class="right-obj">
          <div class="right-obj-title">
            <p>關於我</p>
          </div>
          <div class="right-obj-line" />
          <div class="right-obj-content">
            <p>媒體報導</p>
            <p>加入我們</p>
            <p>合作供應商</p>
            <p>聯盟行銷</p>
          </div>
        </div>
        <div class="right-obj">
          <div class="right-obj-title">
            <p>使用說明</p>
          </div>
          <div class="right-obj-line" />
          <div class="right-obj-content">
            <p>常見問題與幫助</p>
            <p>服務條款</p>
            <p>隱私權保護政策</p>
          </div>
        </div>
        <div class="right-obj">
          <div class="right-obj-title">
            <p>聯絡我們</p>
          </div>
          <div class="right-obj-line" />
          <div class="right-obj-content">
            <div class="right-obj-content-link" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-footer {
  display: grid;
  grid-template-columns: 16.66vw 66.6vw 16.66vw;
  background-color: #fff;
  height: 27.7vh;
  width: 100vw;
}

.main {
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 26vw 40.6vw;
  height: 27.7vh;
}

.left {
  grid-column: 1 / 2;
  width: 26vw;
}

.left-top {
  display: grid;
  grid-template-rows: 15% 4.0785rem 15% auto;
  height: 27.7vh;
}

.left-top-logo {
  grid-row: 2 / 3;
  height: 4.0785rem;
  width: 15.5573rem;
}

.left-top-content {
  grid-row: 4 / 5;
  color: #000;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.left-top-content > p {
  margin: 0.5rem 0 0 0;
}

.right {
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 15% auto;
  grid-column-gap: 6.77vw;
  height: 27.7vh;
  width: 40.6vw;
}

.right-obj {
  grid-row: 2 / 3;
}

.right-obj-title > p {
  color: #000;
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-align: left;
}

.right-obj-line {
  background-color: #000;
  height: 1px;
  margin: 1rem 0 1rem 0;
}

.right-obj-content > p {
  color: #000;
  font-size: 0.9375rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  text-align: left;
  margin: 0.5rem 0 0 0;
}

.right-obj-content-link {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 1rem;
}

.right-obj-content-link-img {
  height: 2rem;
  width: 2rem;
}

</style>
