<script setup>


const links = [{
    label: "Home",
    path: "/",
    icon: "mdi:home"
}, {
    label: "About",
    path: "#about",
    icon: "mdi:user"
}, {
    label: "Skills",
    path: "#skills",
    icon: "mdi:star"
}, {
    label: "Projects",
    path: "#projects",
    icon: "mdi:computer"
}]
</script>

<template>
    <nav class="flex flex-col lg:flex-row justify-center align-center">
        <header class="flex items-center justify-center p-4 hover:scale-[101%] transition cursor-pointer">
            <p>bedzio.me</p>
        </header>
        <div class="grid gap-2 lg:flex">
            <div v-for="(item, index) in links" :key="index"
                class="flex justify-center align-center gap-2 px-5 py-4 transition rounded cursor-pointer hover:bg-secondaryb">
                <Icon size="30" :name=item.icon @click="open = true" />
                <NuxtLink :to=item.path @click="open = false"> {{ item.label }}</NuxtLink>
            </div>
        </div>

    </nav>

</template>

<style scoped></style>