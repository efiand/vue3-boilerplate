<script setup lang="ts">
	import TheFooter from "@/components/TheFooter.vue";
	import TheHeader from "@/components/TheHeader.vue";
	import { RouterView } from "vue-router";
</script>

<template>
	<div class="page">
		<TheHeader />

		<main class="container">
			<RouterView v-slot="{ Component }">
				<Transition name="move-up">
					<component :is="Component" :key="$route.path" />
				</Transition>
			</RouterView>
		</main>

		<TheFooter />
	</div>
</template>

<style scoped lang="scss">
	.page {
		display: grid;
		grid-template-rows: min-content 1fr min-content;
		gap: 30px;
		min-height: 100vh;
	}
</style>
