<template>
  <div>
    <select v-model="$colorMode.preference" class="color-mode">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <!-- <option value="sepia">Sepia</option> -->
    </select>
  </div>
</template>
