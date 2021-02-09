<template>
  <div class="image-list">
    <h1>{{ msg }}</h1>
    <ul>
      <li id="stand-135030">
        <a
          href="https://contest.plus1today.tw/taichunglibraryCIS/index/stands?id=135030"
          title="16-臺中市立圖書館 形象識別系統CIS徵件 民眾票選活動"
        >
          <p class="vote-img" style="background-color: ">
            <img src="./index2_files/test1.jpg" />
          </p>
          <h3 class="name">16</h3>
        </a>
        <div class="vote">
          <div class="vote-left">
            <p><label>No.</label><span>16</span></p>
          </div>
          <div class="vote-true">
            <a href="javascript:vote(135030);"
              ><img src="./index2_files/icon-1.png" alt=""
            /></a>
          </div>
        </div>
      </li>
      <li id="stand-135032">
        <a
          href="https://contest.plus1today.tw/taichunglibraryCIS/index/stands?id=135032"
          title="18-臺中市立圖書館 形象識別系統CIS徵件 民眾票選活動"
        >
          <p class="vote-img" style="background-color: ">
            <img src="./index2_files/test2.jpg" />
          </p>
          <h3 class="name">18</h3>
        </a>
        <div class="vote">
          <div class="vote-left">
            <p><label>No.</label><span>18</span></p>
          </div>
          <div class="vote-true">
            <a href="javascript:vote(135032);"
              ><img src="./index2_files/icon-1.png" alt=""
            /></a>
          </div>
        </div>
      </li>
      <li id="stand-135021">
        <a
          href="https://contest.plus1today.tw/taichunglibraryCIS/index/stands?id=135021"
          title="07-臺中市立圖書館 形象識別系統CIS徵件 民眾票選活動"
        >
          <p class="vote-img" style="background-color: ">
            <img src="./index2_files/test3.jpg" />
          </p>
          <h3 class="name">07</h3>
        </a>
        <div class="vote">
          <div class="vote-left">
            <p><label>No.</label><span>07</span></p>
          </div>
          <div class="vote-true">
            <a href="javascript:vote(135021);"
              ><img src="./index2_files/icon-1.png" alt=""
            /></a>
          </div>
        </div>
      </li>
      <li id="stand-135024">
        <a
          href="https://contest.plus1today.tw/taichunglibraryCIS/index/stands?id=135024"
          title="10-臺中市立圖書館 形象識別系統CIS徵件 民眾票選活動"
        >
          <p class="vote-img" style="background-color: ">
            <img src="./index2_files/test4.jpg" />
          </p>
          <h3 class="name">10</h3>
        </a>
        <div class="vote">
          <div class="vote-left">
            <p><label>No.</label><span>10</span></p>
          </div>
          <div class="vote-true">
            <a href="javascript:vote(135024);"
              ><img src="./index2_files/icon-1.png" alt=""
            /></a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import api from '@/api/api'
export default {
  name: 'vote',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      options: ''
    }
  },
  mounted () {
    this.getOptions()
  },
  methods: {
    getOptions () {
      api.getOptions().then((response) => {
        console.log(response)
        this.options = response
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
