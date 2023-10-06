<script setup>
$(window).load(function() {
	$(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
})</script>

<template>
<div id="overlayer">
<div class="cen">
    <img src="../assets/logo-.png"/></div>
</div>
<div class="cen1">
<span class="loader">
  <span class="loader-inner"></span>
</span>
</div>

</template>

<style scoped>
section {
    height: 100%;
    width:100%;
    text-align: center;
    background:#dcdcdc;
  margin:0;
  padding:0;
  position:relative;
}
h1 {
  color:#822222;
  text-align:center;
}
img {
  margin: 0 auto;
  display:block;
}
/*PRELOADING------------ */
#overlayer {
align-items: center;
  width:100%;
  height:100%;  
  position:absolute;
  z-index:1;
  background:#F8D800
;
}
.cen {
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: absolute;
  z-index:3;
  border: 4px solid F8D800;
  top: 50%;
  animation: loader 2s infinite ease;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: F8D800;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
}
img {
            animation: fadeInAnimation ease 3s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }
        @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
</style>