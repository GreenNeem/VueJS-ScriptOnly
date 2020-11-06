	export default{
		data: function (){
			return {
				firstName:'',
				lastName:'',
				lstOflinks:[],
			}
		},
		mounted:function(){
			this.lstOflinks= [
				{value:'https://www.google.com/', text: 'Google' },
				{value:'https://v3.vuejs.org/', text: 'Vue.js' },
				{value:'https://spring.io/projects/spring-boot', text: 'SpringBoot' }
				];
		},	
		computed:{
			ComputProperTest:function(){
				return this.firstName+' '+this.lastName;
			}
		}
		
	}