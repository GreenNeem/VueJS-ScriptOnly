<template>
	<button @click="one($event), two($event)">
		Submit
	</button>
</template>
<script>
	export default{
		methods:{
			one:function() {
				// body...
				alert("welcome from one!!");
			},
			two:function(){
				alert("two!!");
			},
		}
	}
</script>