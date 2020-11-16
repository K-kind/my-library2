<template>
  <div>
    <o-tabs type="card" @tab-click="handleClick">
      <o-tab-pane label="User">User</o-tab-pane>
      <o-tab-pane label="Config">Config</o-tab-pane>
      <o-tab-pane label="Role">Role</o-tab-pane>
      <o-tab-pane label="Task">Task</o-tab-pane>
    </o-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
