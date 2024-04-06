<script setup lang="ts"></script>

<template>
	<RouterView v-slot="{ Component }">
		<Transition name="move-up">
			<component :is="Component" :key="$route.path" />
		</Transition>
	</RouterView>
</template>
