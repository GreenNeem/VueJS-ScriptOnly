<template>
	<div>
		<childtemplate @enlarge-text="onEnlargeText($event)">
		{{postFontSize}}
		</childtemplate>
		<testtemplate></testtemplate>
	</div>
	
</template>
<script>
	import childtemplate from './vue-edit-child.vue'
	import testtemplate from '@/components/withoutWebpack.js'
	export default{
		components:{
			childtemplate,
			testtemplate
		},
		data:function(){
			return {
				postFontSize:0,
			}
		},
		methods:{
			onEnlargeText:function(enlargeAmount) {
				// this.postFontSize += enlargeAmount
				// body...
				console.log("here!")
				console.log(enlargeAmount);
			}
		}
	}
</script>