<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(arm, idx) in parts.arms" :key="idx">
      <h4>{{arm.title}}</h4>
      <div>{{arm.description}}</div>
    </div>
  </div>
</template>

<script>
// import parts from '../data/parts';//replace with store reference
import getPartsMixin from "./getParts.mixin";

export default {
  name: 'RobotArms'
  ,mixins: [getPartsMixin]
  // ,data() {
  //   // return { arms: parts.arms };
  // }
  // ,computed(){
  //   return {arms: parts.arms};
  // }
};
</script>