<script>
</script>
<template>
    <div class="flex flex-col -z-5 justify-center align-center text-center">

        <h1 id="text1" class="text-5xl font-bold m-1"> Daniel Bednarek </h1>
        <h2 id="text2" class="text-3xl font-bold"> Software Engineer</h2>
    </div>
</template>

<style>
#text1 {
    letter-spacing: 5px;
    border-right: 5px solid;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
        typing 2s steps(15),
        cursor .4s step-end infinite alternate;
}

#text2 {
    letter-spacing: 5px;
    border-right: 5px solid;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
        typing 2s steps(17),
        cursor .4s step-end infinite alternate;
}

@keyframes cursor {
    50% {
        border-color: transparent;
    }
}

@keyframes typing {
    from {
        width: 0;
    }
}
</style>