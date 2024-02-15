<template>
  <div>  
    <div class="hello mobile-table wrapper">
      <table border="1" rules="all" cellspacing="10" cellpadding="0" class="iksweb">
        <tr>
          <th>№ </th>
          <th>ШИР. cm</th>
          <th>ВЫС. cm</th>
          <th>Площ. m2</th>
          <th>ШТ.</th>
          <th>УПР.</th>
          <th style="width: 10px">НАИМЕНОВАНИЕ</th>
          <th>СТОИМОСТЬ</th>
          <th>СУММА</th>
        </tr>
        <tr v-for="item in array" :key="item.id" :id="item.id">
          
            <td style="max-width: 20px"><input type="number" class="input-td" style="width: 30px"></td>
            <td>{{item.width}}</td>
            <td>{{item.height}}</td>
            <td>{{item.Square}}</td>
            <td>{{item.count}}</td>
            <td style="max-width: 20px;"><input type="text" class="input-td">{{}}</td>
            <td><input style="width: 200px" type="text" class="input-td">{{}}</td>
            <td>{{item.price}}</td>
            <td>{{item.An.toFixed(2)}}</td>
            <td :class="{show: show === false}"><button
              class="btn"
              style="margin: 0;"
              @click = "deleteR(item.id)"
              >X</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    array: {
      type: Array
    },
    sum: {
      type: Array
    },
    sum2: {
      type: Array
    },
    sum3: {
      type: Array
    },
    show: {
      type: Boolean
    }
  },
  methods: {
    deleteR(item) {
      this.$emit('deleteRow', item )
      let del = document.getElementById(item);
      del.remove();
    },
  }
}
</script>

<style scoped>
	table.iksweb{text-decoration: none;border-collapse:collapse;text-align:left;color:#000000;}
	table.iksweb th{font-weight:normal;font-size:13px; color:#ffffff;background-color:#181824;}
	table.iksweb td{font-size:13px;color:#000000;}
	table.iksweb td,table.iksweb th{white-space:pre-wrap;padding:10px 10px;line-height:13px;vertical-align: middle;border: 1px solid #354251;}	table.iksweb tr:hover{background-color:#f9fafb}
	table.iksweb tr:hover td{color:#354251;cursor:pointer;}
	.mobile-table{width: 100%; max-width: 100%; overflow-x: auto;}
  .input-td {
    margin: 0;
    padding: 0;
    border: 0;
    width: 130px;
  }
</style>
