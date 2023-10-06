<script setup>
import Card from "@/components/Card.vue"

$(document).ready(function() {
  var front = document.getElementsByClassName("front");
  var back = document.getElementsByClassName("back");

  var highest = 0;
  var absoluteSide = "";

  for (var i = 0; i < front.length; i++) {
    if (front[i].offsetHeight > back[i].offsetHeight) {
      if (front[i].offsetHeight > highest) {
        highest = front[i].offsetHeight;
        absoluteSide = ".front";
      }
    } else if (back[i].offsetHeight > highest) {
      highest = back[i].offsetHeight;
      absoluteSide = ".back";
    }
  }
  $(".front").css("height", highest);
  $(".back").css("height", highest);
  $(absoluteSide).css("position", "absolute");
});

</script>
<template>
<header class="py-3 mb-3 border-bottom">
    <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none " aria-expanded="false">
            <img
          src="../assets/logo-.png"
          height="20"
          alt="Floto"
          loading="lazy"
        />
        </a>
        
      </div>

      <div class="d-flex align-items-center">
        <form class="w-100 me-3">
        </form>
        <div class="flex-shrink-0 dropdown">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="flex-shrink-0 dropdown">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <section id="cai">
<div class="container">
  <div class="row text-center">
    <Card/>
    <Card/>
    <Card/>

    <Card/>
    <Card/>
    <Card/>
    <div class="col-md-4 card-container">
      <div class="card card-flip">
        <div class="front card-block">
          <span class="card-img-top fa" style="font-size: 4em">&#xf118;</span>
          <h4 class="card-title">Front Title</h4>
          <h6 class="card-subtitle text-muted">Front Sub-title</h6>
          <p class="card-text">Front Text</p>
        </div>
        <div class="back card-block">
          <p>
            Some example text<br> to
            <br> increase
            <br> card
            <br> height
            <br> to
            <br> something
            <br> long
          </p>
          <a href="#" class="btn btn-outline-primary">Read More</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 card-container">
      <div class="card card-flip">
        <div class="front card-block">
          <span class="card-img-top fa" style="font-size: 4em">&#xf118;</span>
          <h4 class="card-title">Front Title</h4>
          <h6 class="card-subtitle text-muted">Front Sub-title</h6>
          <p class="card-text">Front Text</p>
        </div>
        <div class="back card-block">
          <p>Some example short text</p>
          <a href="#" class="btn btn-outline-primary">Read More</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 card-container">
      <div class="card card-flip">
        <div class="front card-block">
          <span class="card-img-top fa" style="font-size: 4em">&#xf118;</span>
          <h4 class="card-title">Front Title</h4>
          <h6 class="card-subtitle text-muted">Front Sub-title</h6>
          <p class="card-text">Front Text</p>
        </div>
        <div class="back card-block">
          <p>Some example text</p>
          <a href="#" class="btn btn-outline-primary">Read More</a>
        </div>
      </div>
    </div>
  </div>
</div>  </section>

</template>
<style scoped>
#cai {
  font-family: 'Vidaloka', serif;
  background: #fadc0b;
}

.card-block .btn-outline-primary {
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}

.card {
  margin: 20px 0;
}

/* Flip Cards CSS */
.card-container {
  perspective: 700px;
}
.card-flip {
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  height: auto;
  transition: all 0.5s ease-out;
  background: white;
  border: none;
}

.card-flip div {
  backface-visibility: hidden;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
  border: none;
}

.card-flip .front {
  position: relative;
  z-index: 1;
}

.card-flip .back {
  position: relative;
  z-index: 0;
  transform: rotateY(-180deg);
}

.card-container:hover .card-flip {
  transform: rotateY(180deg);
}

</style>