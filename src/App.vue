<template>
  <div class="wrapper page">
    <form class="calc-form-container" @submit.prevent :class="{show: show === false}">
      <div>
        <input type="textarea" class="textarea" placeholder="Поле для текста">
        <input
          :value="course"
          @input="course = $event.target.value"
          type="number"
          class="input-course"
          placeholder="Курс $ к тг"
          >
        <div class="inputs">
          <input
          :value="width"
          @input="width = $event.target.value"
          type="number"
          class="input-width "
          placeholder="Ширина в см"
          >

          <input
          :value="height"
          @input="height = $event.target.value"
          type="number"
          class="input-height"
          placeholder="Высота в см"
          >
      
        </div>
        
        <div class="inputs">
          <input 
          :value="count"
          @input="count = $event.target.value"
          type="number"
          class="input-count "
          placeholder="Кол-во"
          >

          <input 
          :value="price"
          @input="price = $event.target.value"
          type="number"
          class="input-price"
          placeholder="Стоимость"
          >
        </div>
        <button 
        class="btn"
        @click="createPost()"
        >Добавить</button>

      </div>
    </form>
    <div>Заказ №{{numDoc}} </div> 

    <div >
      <div style="display:flex">  Заказчик: <input type="text" style="; padding: 0;"></div>
      <div style="display:flex; padding: 0;">Дата: {{date.toLocaleString()}} </div>
    </div>

    <hello-world :array="array" :show="show" :sum="sum" :sum2="sum2" :sum3="sum3" @deleteRow = "deleteRow"/>
    <div v-if="this.sum[0]">
      <div style="margin: 10px 0 10px 0;">
        Итого
      </div>
      <span style="border-bottom: 1px solid black; padding: 5px;">
        {{(this.sum.reduce((a, b) => a + b.An, 0) * this.course).toFixed(2)}}
      </span>
    </div>


    <div v-if="this.sum2[0]">
      <div style="margin: 30px 0 10px 0;">
        Общая площ. m2
      </div>
      <span style="border-bottom: 1px solid black; padding: 5px;">
        {{(this.sum2.reduce((a, b) => a + b.An2, 0)).toFixed(2)}}
      </span>
    </div>

    <div v-if="this.sum3[0]">
      <div style="margin: 30px 0 10px 0;">
        Общее кол-во окон
      </div>
      <span style="border-bottom: 1px solid black; padding: 5px;">
        {{this.sum3.reduce((accumulator, currentValue) => accumulator + currentValue.An3, 0)}}
      </span>
    </div>


    <footer>
    <div>
      <button @click="change()" class="btn" style="margin-top: 100px">
      Скрыть поля заполения
      </button>
    </div>
    </footer>
    <div>
      <button @click="saveTable()" class="btn">
      Новый заказ
      </button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"
export default {
  components: {
    HelloWorld
  },
  name: 'App',
  data() {
    return {
      height: '',
      width: '',
      price: '',
      count: '',
      course: '',
      array: [],
      show: true,
      numDoc: '1',
      sum: [],
      sum2: [],
      sum3: [],
      date: new Date(),
      
    }
  },
  methods: {
    createPost() {
      let width = 0
      let height = 0
      if(this.width < 100){
        width = 100
      }
      else width = this.width
      if (this.height < 160){
        height = 160
      }
      else height = this.height
      
      const newTable = {
        id: Date.now(),
        height: this.height,
        width: this.width,
        count: this.count,
        An: (((width * height) / 10000) * this.price) * this.count,
        An2: (width * height) / 10000,
        An3: this.count,
        price: this.price,
        course: this.course,
        Square: (width * height) / 10000,
      }
      
      this.sum.push({id: newTable.id, An: newTable.An})
      this.sum2.push({id: newTable.id, An2: newTable.An2})
      this.sum3.push({id: newTable.id, An3: Number(newTable.An3)})
      this.array.push(newTable)
      this.height = ""
      this.width = ""
      this.count = ""
      this.price = ""
    },
    change() {
      this.show = !this.show
    },
    saveTable() {
      this.numDoc++
      localStorage.numDoc = this.numDoc
      location.reload()
    },
    deleteRow(item) {
      this.sum = this.sum.filter(i => i.id !== item);
      this.sum2 = this.sum2.filter(i => i.id !== item);
      this.sum3 = this.sum3.filter(i => i.id !== item);
    }
  },
  mounted() {
    if(localStorage.numDoc) {
      this.numDoc = localStorage.numDoc
    }
  },
  computed() {
    
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@300&display=swap');
#app {
  font-family: 'Overpass', sans-serif;
}
body {
  height: 100%;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.textarea{
  border: black solid 1px;
}
.inputs {
  display: flex;
  justify-content: space-around;
}
.calc-form-container{
  flex: 1 1 auto;
}
.input-height, .input-width, .input-count, .input-price, .input-course{
  margin: 10px 5px;
  border-bottom: 1px solid black;
  max-width: 100px;
}
.show {
  display: none;
}
.btn {
  margin: 10px 0 20px 0;
  border-radius: 10px;
}
$main-color: #F44336;
$secondary-color: rgb(0, 0, 0);
$main-color: rgb(0, 0, 0);
$secondary-color: #2196f3;
$width: 200px; // Change Me
* {
  box-sizing: border-box;
}
// body {background: $main-color;}
.centered {
  width: $width;
  height: $width/5;
  margin: auto;
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0; 
}
.group {
  width: 100%;
  height: $width/5;
  overflow: hidden;
  position: relative;
}
input {
  display: block;
  width: 100%;
  padding-top: $width/15;
  border: none;
  border-radius: 0; // For iOS
  // border-bottom: solid $width/150 rgba(white, .5);
  color: rgb(0, 0, 0);
  font-size: $width/15;
  transition: .3s ease;
  &:focus {
    outline: none;
    ~ .bar:before {
    transform: translateX(0);
    }
  }
  // Stop Chrome's hideous pale yellow background on auto-fill
  
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px inset;
    -webkit-text-fill-color: white !important;
    // border-bottom-color: rgba(white, .5);
  }
}
.bar {
  // background: $secondary-color;
  background: rgba(white, .5);
  content: '';
  width: $width;
  // height: $width/100;
  height: $width/150;
  // transform: translateX(-100%);
  transition: .3s ease;
  // margin-top: -2px;
  //
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 150%;
    background: $secondary-color;
    transform: translateX(-100%);
    
  }
}
::selection {background: rgba($secondary-color, .3);}
</style>