<template>
  <div>战斗场景</div>

  <RoleStatus :role="{ attack: 1, name: 'c', id: '2', mp: 12, hp: 200, defense: 100, occupation: 21 }" />
  <ActionsPanel/>
</template>

<script lang="ts" setup>
import RoleStatus from './components/RoleStatus.vue';
import ActionsPanel from './components/ActionsPanel.vue';
</script>

<style scoped>

</style>