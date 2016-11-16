<template>
	<div class="container">
		<fl-menu></fl-menu>
		<component v-bind:is="RouteComponent"></component>
	</div>
</template>

<script>
import flMenu from './fl-menu'

export default {
	components: {
		flMenu
	},
	props: ['RouteComponent']
}
</script>