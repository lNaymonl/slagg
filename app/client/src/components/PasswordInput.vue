<script setup lang="ts">
import {  } from "vue"

const emits = defineEmits<{
    test: [{ a: number, b: string }]
}>();

setTimeout(() => {
    emits("test", { a: 5, b: "asdasd" });
}, 1000);
</script>

<template>
    <div></div>
</template>
