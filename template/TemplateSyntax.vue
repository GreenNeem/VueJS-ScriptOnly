<template>
	<div>
		<h2>this is template syntax</h2>
		<li v-for="(lnk,id) in lstOflinks" v-bind:key="id">
			<a v-bind:href="lnk.value">{{lnk.text}}</a>
		</li>	
		<input v-model="firstName" placeholder="First Name">
		<input v-model="lastName" placeholder="Last Name">
		<p>Message is: {{ firstName+' '+lastName }}</p>
		<p>Testing computed property: {{ComputProperTest}}</p>
	</div>
</template>