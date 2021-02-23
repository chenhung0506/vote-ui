<template>
  <div>
    <div class="col-md-6 offset-md-3 mt-5">
      <a target="_blank" href="https://getform.io?ref=codeSandboxVue">
        <img src="https://imgur.com/Z2Nyxsm.png" width="125" />
      </a>
      <br />
      <a
        target="_blank"
        href="https://getform.io?ref=codeSandboxVue"
        class="mt-3 d-flex"
        >Get your free endpoint now</a
      >
      <h1>Getform.io Vue Form Example</h1>

      <form
        accept-charset="UTF-8"
        v-on:submit.prevent="onSubmit()"
        method="POST"
        enctype="multipart/form-data"
        id="ajaxForm"
      >
        <div class="form-group">
          <label for="exampleInputEmail1" required="required"
            >Email address</label
          >
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input
            type="text"
            v-model="name"
            class="form-control"
            id="exampleInputName"
            placeholder="Enter your name"
            required="required"
          />
        </div>
        <div class="success" v-if="isSuccess">
          We received your submission, thank you!
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { VueReCaptcha } from "vue-recaptcha-v3";
Vue.use(VueReCaptcha, { siteKey: "6LellmQaAAAAAKTSaILulgzZi37CL6wjjRBoF30h" });

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "",
      loading: true,
      name: "",
      email: "",
      files: [],
      platform: "",
      isSuccess: false,
    };
  },
  methods: {
    onSubmit() {
      this.message = "";
      let data = {
        name: this.name,
        email: this.email,
        platform: this.platform,
        file: this.files,
      };

      this.$recaptcha("login").then((token) => {
        data["g-recaptcha-response"] = token;
        console.log('secret key===>')
        console.log(data)
        axios
          .post(
            "https://getform.io/f/b22f10be-75a6-40c0-9ec6-3519dc38fe29",
            data,
            {
              headers: {
                Accept: "application/json",
              },
            }
          )
          .then(
            (response) => {
              this.isSuccess = response.data.success ? true : false;
            },
            (response) => {
              // Error
            }
          );
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
