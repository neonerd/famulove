<template lang="jade">
	.row
		.section
			form(action="",method="post", v-on:submit="submit").col.s12.m6.push-m3
				.row
					.input-field.col.s12
						input(type="email", name="email", v-model="email")
						label(for="email") E-mail
				.row
					.input-field.col.s12
						input(type="password", name="password", v-model="password")
						label(for="password") Heslo
				.row
					.col.s12.center-align
						button(type="submit").btn-large Prihlásiť sa

</template>

<script>
	export default {
		data () {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			submit: function (e) {
				e.preventDefault()
				alert('submitted')
			}
		}
	}
</script>