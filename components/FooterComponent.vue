<template>
    <footer
        class="transition duration-500"
        :class="[
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900',
            { 'opacity-0': !showFooter, 'opacity-100': showFooter },
        ]"
    >
        <div class="container mx-auto px-6 py-12">
            <div class="flex flex-col md:flex-row justify-between items-center" data-aos="fade-up">
                <p class="mb-4 md:mb-0">&copy; 2023 我的博客. 保留所有权利。</p>
                <div class="flex space-x-4">
                    <a
                        href="#"
                        class="hover:text-yellow-400 transition duration-300"
                        :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                    >
                        <i class="fab fa-weixin fa-2x"></i>
                    </a>
                    <a
                        href="#"
                        class="hover:text-yellow-400 transition duration-300"
                        :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                    >
                        <i class="fab fa-weibo fa-2x"></i>
                    </a>
                    <a
                        href="#"
                        class="hover:text-yellow-400 transition duration-300"
                        :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                    >
                        <i class="fab fa-github fa-2x"></i>
                    </a>
                    <!-- 更多社交媒体图标 -->
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useDark } from '@vueuse/core'

const isDarkMode = useDark()

// 控制底部的显示与隐藏
const showFooter = ref(false)

const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    showFooter.value = scrollPosition >= documentHeight - 100
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 底部样式 */
</style>
