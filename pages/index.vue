<script setup lang="ts">

const open = ref(false)


</script>
<template>
    <div id="home" class="flex flex-col items-center bg-primaryb h-screen">
        <div class="z-50 flex items-center justify-between w-full p-4 lg:hidden">
            <Icon class="z-50 cursor-pointer left-2 top-2" size="30" name="iconamoon:menu-burger-horizontal"
                @click="open = true"></Icon>
            <div v-if="open" class="absolute top-0 left-0 z-[999] w-full h-full h-screen bg-primaryb">
                <Icon class="absolute z-50 cursor-pointer left-4 top-4" size="30" name="mdi:close"
                    @click="open = false"></Icon>
                <Sidebar />
            </div>
        </div>
        <Sidebar class="sticky top-0 w-75 hidden lg:flex flex-row justify-center m-5 bg-primaryb" />
        <About id="about" class="max-w-screen-md" />
        <Skills id="skills" class=" max-w-screen-md" />
        <Projects id="projects" class="max-w-screen-md" />
        <Footer class="top-full" />
    </div>
</template>