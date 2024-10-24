<template>
    <div :class="{ dark: isDarkMode }">

        <!-- 主体内容 -->
        <main class="pt-24">
            <!-- Banner 区域 -->
            <section class="h-screen flex items-center justify-center bg-animation relative">
                <div class="absolute inset-0 bg-black opacity-30"></div>
                <div class="text-center relative z-10" data-aos="zoom-in">
                    <h1
                        class="text-6xl font-bold mb-6"
                        :class="isDarkMode ? 'text-white' : 'text-white'"
                    >
                        欢迎来到我的世界
                    </h1>
                    <p
                        class="text-2xl mb-8"
                        :class="isDarkMode ? 'text-gray-300' : 'text-gray-200'"
                    >
                        记录生活，分享感动。
                    </p>
                    <NuxtLink
                        to="/posts"
                        class="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition duration-300"
                        data-aos="fade-up"
                    >
                        开始阅读
                    </NuxtLink>
                </div>
            </section>

            <!-- 最新博文 -->
            <section class="py-16 bg-white dark:bg-gray-900">
                <div class="container mx-auto px-6">
                    <h2
                        class="text-4xl font-bold text-center mb-12"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                        data-aos="fade-up"
                    >
                        最新博文
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- 博文卡片示例 -->
                        <div
                            class="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                            data-aos="flip-left"
                        >
                            <NuxtLink to="/posts/1">
                                <img
                                    src="https://source.unsplash.com/random/400x300"
                                    alt="博文图片"
                                    class="w-full h-48 object-cover"
                                />
                                <div
                                    class="p-6"
                                    :class="
                                        isDarkMode
                                            ? 'bg-gray-800 text-white'
                                            : 'bg-white text-gray-900'
                                    "
                                >
                                    <h3 class="text-2xl font-semibold mb-2">博文标题一</h3>
                                    <p class="mb-4">简短的博文摘要，吸引读者点击阅读全文。</p>
                                    <span
                                        class="text-yellow-400 hover:text-yellow-500 transition duration-300"
                                        >阅读全文 &rarr;</span
                                    >
                                </div>
                            </NuxtLink>
                        </div>
                        <!-- 更多博文卡片 -->
                        <!-- ... -->
                    </div>
                </div>
            </section>

            <!-- 关于我 -->
            <section class="py-16 bg-gray-100 dark:bg-gray-800">
                <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
                        <img
                            src="https://source.unsplash.com/random/400x400"
                            alt="关于我"
                            class="rounded-full mx-auto"
                        />
                    </div>
                    <div class="md:w-1/2 md:pl-12" data-aos="fade-left">
                        <h2
                            class="text-4xl font-bold mb-6"
                            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                        >
                            关于我
                        </h2>
                        <p class="mb-6" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                            这里是自我介绍的部分，可以写一些自己的背景、兴趣爱好和写博客的初衷。
                        </p>
                        <NuxtLink
                            to="/about"
                            class="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition duration-300"
                        >
                            了解更多
                        </NuxtLink>
                    </div>
                </div>
            </section>

            <!-- 联系我 -->
            <section class="py-16 bg-white dark:bg-gray-900">
                <div class="container mx-auto px-6 text-center">
                    <h2
                        class="text-4xl font-bold mb-6"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                        data-aos="zoom-in"
                    >
                        联系我
                    </h2>
                    <p
                        class="mb-8"
                        :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                        data-aos="zoom-in"
                    >
                        有任何问题或合作意向，欢迎与我联系。
                    </p>
                    <NuxtLink
                        to="/contact"
                        class="bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-900 transition duration-300"
                        data-aos="zoom-in"
                    >
                        发送消息
                    </NuxtLink>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const isDarkMode = ref(false)

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

const navLinkClass = computed(() =>
    isDarkMode.value
        ? 'text-white hover:text-yellow-300 transition duration-300'
        : 'text-gray-900 hover:text-yellow-500 transition duration-300'
)

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
}
</script>

<style scoped>
/* 背景动画 */
.bg-animation {
    background: linear-gradient(-45deg, #ff6ec4, #7873f5, #3ab5b0, #ffce00);
    background-size: 400% 400%;
    animation: gradientBG 10s ease infinite;
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
