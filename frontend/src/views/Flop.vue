<template>
<section class="flop">
  <img :src="imgSrc" class="tableImg">
  <div class="cards">
    <div class="card card-table cardPos1"></div>
    <div class="card card-table cardPos2"></div>
    <div class="card card-table cardPos3"></div>
    <div class="card card-table cardPos4"></div>
    <div class="card card-table cardPos5"></div>
  </div>
</section>
</template>

<script>
export default {

    // action: ['open flop','open turn','open river'],
    data() {
    return {
      imgSrc: require('@/assets/imgs/table.png'),
    };
  },


    

}
</script>