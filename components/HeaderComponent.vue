<template>
    <header
        :class="[
            'fixed w-full z-20 transition duration-500',
            { 'bg-white shadow': showHeader, 'bg-transparent': !showHeader },
        ]"
        :style="{ top: showHeader ? '0' : '-100px' }"
    >
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <NuxtLink
                to="/"
                class="text-3xl font-bold"
                :class="isDarkMode ? 'text-gray-900' : 'text-gray-900'"
            >
                我的博客
            </NuxtLink>
            <div class="flex items-center">
                <button @click="toggleDarkMode" class="mr-4 focus:outline-none">
                    <span v-if="isDarkMode" class="text-gray-900 text-2xl">🌞</span>
                    <span v-else class="text-2xl">🌙</span>
                </button>
                <ul class="hidden md:flex space-x-6">
                    <li>
                        <NuxtLink to="/" :class="navLinkClass">首页</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/archive" :class="navLinkClass">归档</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" :class="navLinkClass">关于我</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" :class="navLinkClass">联系</NuxtLink>
                    </li>
                </ul>
                <!-- 移动端菜单按钮 -->
                <button class="md:hidden focus:outline-none" @click="toggleMobileMenu">
                    <i
                        :class="[
                            'fas',
                            mobileMenuOpen ? 'fa-times' : 'fa-bars',
                            'fa-2x',
                            'text-gray-900',
                        ]"
                    ></i>
                </button>
            </div>
        </nav>
        <!-- 移动端菜单 -->
        <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow" @click.self="toggleMobileMenu">
            <ul class="flex flex-col items-center py-4">
                <li class="my-2">
                    <NuxtLink to="/" class="text-gray-900 text-xl" @click="closeMobileMenu"
                        >首页</NuxtLink
                    >
                </li>
                <li class="my-2">
                    <NuxtLink to="/archive" class="text-gray-900 text-xl" @click="closeMobileMenu"
                        >归档</NuxtLink
                    >
                </li>
                <li class="my-2">
                    <NuxtLink to="/about" class="text-gray-900 text-xl" @click="closeMobileMenu"
                        >关于我</NuxtLink
                    >
                </li>
                <li class="my-2">
                    <NuxtLink to="/contact" class="text-gray-900 text-xl" @click="closeMobileMenu"
                        >联系</NuxtLink
                    >
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useDark } from '@vueuse/core'

const isDarkMode = useDark()

const navLinkClass = computed(() => 'text-gray-900 hover:text-yellow-500 transition duration-300')

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
}

// 控制头部的显示与隐藏
const showHeader = ref(false)

const handleScroll = () => {
    showHeader.value = window.scrollY > 100
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
}
</script>

<style scoped>
/* 头部样式 */
</style>
