<template>
  <div>
    <o-table :data="tableData">
      <o-table-column label="名前">
        <template v-slot="slotProps">
          <o-input v-model="slotProps.row.name" />
        </template>
      </o-table-column>
      <o-table-column label="所属">
        <template v-slot="slotProps">
          <o-select v-model="slotProps.row.clinic" placeholder="院を選択してください">
            <o-option
              v-for="clinic in clinics"
              :key="clinic.value"
              :label="clinic.label"
              :value="clinic.value"
            />
          </o-select>
        </template>
      </o-table-column>
      <o-table-column label="メール">
        <template v-slot="slotProps">
          <o-input v-model="slotProps.row.email" />
        </template>
      </o-table-column>
    </o-table>
    <div>
      <o-button @click="addRow"><i class="mdi-circle-close" />追加</o-button>
    </div>
  </div>
</template>

<script>
  const initialTableData = {
    name: '',
    clinic: null,
    email: ''
  }
  export default {
    data() {
      return {
        tableData: [
          {
            ...initialTableData
          }
        ],
        clinics: [
          { value: 0, label: '表参道院' },
          { value: 1, label: '大阪院' },
          { value: 2, label: '新宿院' },
          { value: 3, label: '沖縄院' }
        ]
      }
    },
    methods: {
      addRow() {
        this.tableData.push({...initialTableData})
      }
    }
  }
</script>
