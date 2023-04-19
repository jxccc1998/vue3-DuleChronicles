<template>
  <div class="role-status fixed bottom-0 left-0 p-10 bg-slate-700 text-slate-400 font-semibold">
    <p>血量:{{ role.hp }}</p>
    <p>行动点:{{ role.mp }}</p>
    <p>职业:{{ role.occupation }}</p>
  </div>
</template>

<script lang="ts" setup>
interface Role {
  id: number;
  name: string;
  occupation: string;
  hp: number;
  mp: number;
  attack: number;
  defense: number;
}

defineProps({
  role: Object as () => Role
})
</script>

<style scoped>
</style>