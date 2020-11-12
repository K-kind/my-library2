<template>
  <div>
    <o-button>ボタン</o-button>
    <o-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <o-table-column
        label="Date"
        prop="date">
      </o-table-column>
      <o-table-column
        label="Name"
        prop="name">
      </o-table-column>
      <o-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <o-popover placement="bottom">
            <button slot="reference">フィルター</button>
            <!-- <template #reference>
            </template> -->
            <o-input
              v-model="search"
              size="mini"
              placeholder="Type to search"/>
          </o-popover>
        </template>
        <template slot-scope="scope">
          <o-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</o-button>
          <o-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</o-button>
        </template>
      </o-table-column>
    </o-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Jessy',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        search: '',
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>
