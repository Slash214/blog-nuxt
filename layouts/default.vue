<template>
    <div :class="{ dark: isDarkMode }">
        <!-- 头部组件 -->
        <HeaderComponent />

        <!-- 页面内容 -->
        <NuxtPage />

        <!-- 底部组件 -->
        <FooterComponent />
    </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useDark } from '@vueuse/core'

const isDarkMode = useDark()
</script>

<style>
/* 全局样式 */
</style>
