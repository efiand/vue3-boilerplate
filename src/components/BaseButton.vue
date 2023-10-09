<script setup lang="ts">
	import { type ButtonHTMLAttributes } from "vue";

	const props = withDefaults(
		defineProps<{
			disabled?: ButtonHTMLAttributes["disabled"];
			primary?: boolean;
			type?: ButtonHTMLAttributes["type"];
		}>(),
		{
			type: "button",
		},
	);

	const modifiers = {
		"button--primary": props.primary,
	};
</script>

<template>
	<button class="button" :class="modifiers" :type="type" :disabled="disabled">
		<slot></slot>
	</button>
</template>

<style scoped lang="scss">
	.button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		font-family: inherit;
		color: var(--colors-primary);
		background-color: transparent;
		transition: $transitions-default;
		transition-property: color, background-color, border-color, opacity;
	}
</style>
