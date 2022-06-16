<template>
  <div class="field__focus --global-center-content">
    <span class="field__focus-elem"></span>
    <span class="field__focus-elem"></span>
    <span class="field__focus-elem"></span>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .field__focus {
    right: -40px;
  }
  .field__focus .field__focus-elem:nth-child(2){
    animation-delay: -0.1s;
  }
  .field__focus .field__focus-elem:nth-child(3){
    animation-delay: -0.2s;
  }
  .field__focus-elem {
    display: block;
    width: 10px;
    height: 10px;
    border-bottom: 3px solid #3161ff;
    border-left: 3px solid #3153ff;

    margin: -2px;
    animation: focus 0.7s infinite;
    float: left;
  }

  @keyframes focus {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-0px, -0px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(0px, 0px);
    }
  }
</style>