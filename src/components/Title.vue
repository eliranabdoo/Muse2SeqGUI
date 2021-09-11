<template>
  <div class="title">
    <transition name="bounce" :style="css">
      <h1 @mouseover="applyAnimation()" v-if="!midAnimation">{{ msg }}</h1>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
    midAnimation: false,
    animationLength: 1000
    }
  },
  computed:{
    css(){
    return {
      '--halftime-animation': this.animationLength / 2 + 'ms'

    }}
  },
  methods: {
    applyAnimation: function(){
      if(this.midAnimation)
        return
      
      this.midAnimation = true; 
      setTimeout(() => this.midAnimation=false,  this.animationLength)
    }
  }
}
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

.bounce-enter-active {
  animation: bounce-in var(--halftime-animation);
}
.bounce-leave-active {
  animation: bounce-in var(--halftime-animation) reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.animate {
  transform: translateX(-50px)
}
</style>
