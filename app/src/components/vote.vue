<template>
  <div class="image-list">
    <h1>{{ msg }}</h1>
    <div id="status">hello</div>
    <div id="fb-root"></div>
    <!-- <script async defer crossorigin="anonymous" src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&autoLogAppEvents=1&version=v9.0&appId=2728835197369002" nonce="V0jfwh00"></script> -->
    <div class="fb-login-button" data-width="100" data-size="large" data-button-type="continue_with" data-layout="rounded" data-auto-logout-link="true" data-use-continue-as="true"></div>
    <button
      @click="checkLoginState()"
      scope="public_profile,email"
      onlogin="checkLoginState();">
    </button>
    <ul>
      <li id="stand-135030">
        <a
          href="https://contest.plus1today.tw/taichunglibraryCIS/index/stands?id=135030"
          title="16-臺中市立圖書館 形象識別系統CIS徵件 民眾票選活動"
        >
          <p class="vote-img" style="background-color: ">
            <img src="../assets/images/test1.jpg" />
          </p>
          <h3 class="name">16</h3>
        </a>
        <div class="vote">
          <div class="vote-left">
            <p><label>No.</label><span>16</span></p>
          </div>
          <div class="vote-true">
            <a href="javascript:vote(135030);"
              ><img src="../assets/images/icon-1.png" alt=""
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
            <img src="../assets/images/test2.jpg" />
          </p>
          <h3 class="name">18</h3>
        </a>
        <div class="vote">
          <div class="vote-left">
            <p><label>No.</label><span>18</span></p>
          </div>
          <div class="vote-true">
            <a href="javascript:vote(135032);"
              ><img src="../assets/images/icon-1.png" alt=""
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
            <img src="../assets/images/test3.jpg" />
          </p>
          <h3 class="name">07</h3>
        </a>
        <div class="vote">
          <div class="vote-left">
            <p><label>No.</label><span>07</span></p>
          </div>
          <div class="vote-true">
            <a href="javascript:vote(135021);"
              ><img src="../assets/images/icon-1.png" alt=""
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
            <img src="../assets/images/test4.jpg" />
          </p>
          <h3 class="name">10</h3>
        </a>
        <div class="vote">
          <div class="vote-left">
            <p><label>No.</label><span>10</span></p>
          </div>
          <div class="vote-true">
            <a href="javascript:vote(135024);"
              ><img src="../assets/images/icon-1.png" alt=""
            /></a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import api from '@/api/api'

export default {
  name: 'vote',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      options: ''
    }
  },
created() {
    // 防止重複載入
    if (!window.FB) {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '2728835197369002',
          cookie     : true,
          xfbml      : true,
          version    : 'v9.0'
        });
      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&autoLogAppEvents=1&version=v9.0&appId=2728835197369002')
    document.head.appendChild(externalScript)
  },
  methods: {
    statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      if (response.status === 'connected') {
          // Logged into your app and Facebook.
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function (response) {
              console.log('Successful login for: ' + response.name);
              document.getElementById('status').innerHTML =
                'Thanks for logging in, ' + response.name + '!';
          });
      } else {
          document.getElementById('status').innerHTML = 'Please log into this app.';
      }
    },
    checkLoginState() {
      FB.getLoginStatus(function(response) {
        console.log(response);
        // statusChangeCallback(response);
        if (response.status === 'connected') {
              // Logged into your app and Facebook.
              console.log('Welcome!  Fetching your information.... ');
              FB.api('/me', function (response) {
                  console.log('Successful login for: ' + response.name);
                  document.getElementById('status').innerHTML =
                    'Thanks for logging in, ' + response.name + '!';
              });
          } else {
              document.getElementById('status').innerHTML = 'Please log into this app.';
          }
      });
    },
    getOptions () {
      api.getOptions().then((response) => {
        console.log(response)
        this.options = response
      })
    },
   login() {
      const vm = this;
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
        // 登入狀態 - 已登入
        if (response.status === "connected") {
          // 獲取用戶個人資料
          vm.getProfile();
        } else {
          // 登入狀態 - 未登入
          // 用戶登入(確認授權)
          FB.login(
            function(res) {
              // 獲取用戶個人資料
              vm.getProfile();
            },
            // 授權 - 個人資料&Email
            { scope: "public_profile,email" }
          );
        }
      });
    },
    logout() {
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
        // 檢查登入狀態
        if (response.status === "connected") {
          // 移除授權
          FB.api("/me/permissions", "DELETE", function(res) {
            // 用戶登出
            FB.logout();
          });
        } else {
          // do something
        }
      });
    },
    getProfile() {
      FB.api("/me?fields=name,id,email", function(res) {
        // do something
      });
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
