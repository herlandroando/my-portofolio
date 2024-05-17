<template>
    <section id="contact"
        class=" !text-center relative mt-48 mb-32 flex flex-col md:justify-between items-center justify-center md:gap-7 gap-20">
        <TextTitle tag="h2" class="mb-6 text-center">Let's Have a Chat! </TextTitle>
        <p class="md:w-[80%] w-full">I'm interested in collaborating on creative and innovative projects or if you have
            any questions about me or
            technology. You can talk to me on the social media below:</p>
        <!-- <h2 class="font-black md:text-4xl text-3xl mb-6 w-fit">
            Education</h2> -->
        <div class="md:px-12 px-7 flex flex-row gap-4">
            <NuxtLink :aria-label="media.label" v-for="media in myMedia" :to="media.link" :external="true" target="_blank">
                <UButton class="rounded-full p-3">
                    <Icon size="24" :name="media.icon"></Icon>
                </UButton>
            </NuxtLink>
        </div>
    </section>

</template>

<script setup lang="ts">
const myMedia = [
    {
        label: 'Linkedin',
        link: 'https://www.linkedin.com/in/herlandro-tribiakto/',
        icon: 'mdi:linkedin',
    },
    {
        label: 'Instagram',
        link: 'https://www.instagram.com/herlandrotri/',
        icon: 'mdi:instagram',
    },
    {
        label: 'Discord',
        link: 'https://discordapp.com/users/532794209053442058',
        icon: 'mdi:discord',
    },
    {
        label: 'Email',
        link: 'mailto:herlandrotri@gmail.com',
        icon: 'mdi:email',
    },
]
</script>

<style></style>