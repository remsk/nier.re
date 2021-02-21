<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/schedule">Schedule</router-link>
    <router-link to="/notices">Notices</router-link>
  </div>
  <router-view class="page" />
</template>

<style lang="scss">
@import "./styles/normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@500&family=Play:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
}

a,
a:link,
a:visited {
  color: #d29797;
}

img {
  vertical-align: middle;
}

li {
  list-style: none;
}

.cf:after {
  content: "";
  display: block;
  clear: both;
}

.flexbox {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: stretch;
  align-items: stretch;
  text-align: center;
}

.text-red {
  color: #d29797;
}

.text-green {
  color: #97d297;
}

.text_center {
  text-align: center;
}

html {
  height: 100%;
}

body {
  background: #100607;
  background-image: url("~@/assets/bg_pattern.png");
  background-repeat: repeat-x;
  background-position: bottom center;
  height: 100%;
}

#app {
  font-family: "Exo 2", Helvetica, Arial, sans-serif;
  background-image: url("~@/assets/bg_pattern2.png");
  background-repeat: repeat-x;
  background-position: top center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e6e2cf;
  height: 100%;
  padding-top: 49px;
  box-sizing: border-box;

  .page {
    height: 100%;
    overflow: auto;
  }
}

#nav {
  width: 100%;
  height: 48px;
  position: fixed;
    -webkit-box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.48);
    box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.48);
  top: 0;
  z-index: 1;

  a {
    width: 33.3%;
    display: inline-block;
    background-image: url("./assets/nav_m.png");
    background-repeat: repeat-x;
    background-size: contain;
    height: 48px;
    line-height: 48px;
    font-weight: 700;
    text-decoration: unset;
    color: #e6e2cf;
    position: relative;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      background-image: url("./assets/nav_r.png");
      background-repeat: no-repeat;
      background-size: contain;
      top: 0;
      width: 8px;
      height: 48px;
    }

    &:before {
      transform: rotate(180deg);
      left: 0;
    }

    &:after {
      right: 0;
    }

    &.router-link-exact-active {
      color: #736b68;
      background-image: url("./assets/nav_m-a.png");

      &:before,
      &:after {
        background-image: url("./assets/nav_r-a.png");
      }
    }
  }
}

@media (orientation: portrait) {
  #app {
    padding-top: unset;
    padding-bottom: 49px;
    .page {
      height: 100%;
    }
  }

  #nav {
    bottom: 0;
    top: unset;
    -webkit-box-shadow: 0px -1px 10px 2px rgba(0, 0, 0, 0.48);
    box-shadow: 0px -1px 10px 2px rgba(0, 0, 0, 0.48);
  }
}
</style>
