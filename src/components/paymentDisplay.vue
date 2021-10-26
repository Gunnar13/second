<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.title_content]" v-for="(item,idx) in items" :key="idx">
          <div :class="[$style.id_number]">{{ item.number }}</div>
          <div :class="[$style.date]">{{ item.date }}</div>
          <div :class="[$style.category]">{{ item.category }}</div>
          <div :class="[$style.value]">{{ item.value }}</div>
        </div>
    <!-- <div v-for="(item,idx) in items" :key="idx">
      {{ item }}
    </div>
    Хотим тут отобразить данные -->
  </div>
</template>


<script>
export default {
  
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" module>
.wrapper {
  background-color: burlywood;
  border: 1px solid rgb(65, 51, 51);
}
.title_content{
  //border: 1px solid black;
  display: flex;
  box-sizing: border-box;
  text-align: center;
  font-size: 18px;
}
.date{
  border: 1px solid rgb(94, 77, 77);
  width: 150px;
  padding: 10px 0 10px 0;
}
.id_number{
  border: 1px solid rgb(94, 77, 77);
  width: 50px;
  padding: 10px 0 10px 0;
}
.category {
  border: 1px solid rgb(94, 77, 77);
  width: 400px;
  padding: 10px 0 10px 0;
}
.value{
  border: 1px solid rgb(94, 77, 77);
  width: 100px;
  padding: 10px 0 10px 0;
}
</style>