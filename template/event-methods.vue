<template>
	<div>
		<!-- the click event's propagation will be stopped -->
		<!-- <a @click.stop="doThis"></a> -->
		<p>Click DIV 1:</p>
		<div @click="func2()">DIV 2
			<div @click.stop="func1()">DIV 1</div>
		</div>

		<!-- ベージのロードを防ぐ、だだし指定処理までは実行される。-->
		<form @submit.prevent="onSubmit">
			<p>This is form block.</p>
			<button type="submit">Test submit prevent</button>
		</form>

		<!-- use capture mode when adding the event listener -->
		<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
		<!-- 元々VueはBubbling仕組みで動いている。 -->
		<div @click.capture="doThis">...</div>

		<!-- only trigger handler if event.target is the element itself -->
		<!-- i.e. not from a child element -->
		<!-- JSのselfメソット -->
		<div @click.self="doThat">...</div>

		<!-- scroll performance -->
		<!-- 最新版のCHROMEにより登場した新規の機能であること。scrollのデフォルトをPreventして任意の操作を行う。-->
		<div @scroll.passive="onScroll">...</div>

		<!-- .meta -->
		<!-- Alt+Shift+ -->

		<!-- 動作確認 -->
		<input type="radio" v-model="pick" v-bind:value="a" @change="test(a)"/>
		<input type="radio" v-model="pick" v-bind:value="b" @change="test(b)"/>


		<!-- synced after "change" instead of "input" -->
		<!-- 既存の仕組みによれば、データがすぐに表示される -->
		<!-- 下記のように指定すると、次のイベント「例：Enter」を開始したタイミングで結果を出している。 -->
		<input v-model.lazy="msg" @change="show()"/>
		{{msg}}
		
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				a:'a-desu',
				b:'b-desu',
				pick:'',
				msg:''
			}
		},
		methods:{
			func1:function(){
				alert('func1');
			},
			func2:function(){
				alert('func2');
			},
			onSubmit:function(){
				console.log('called submit!')
			},
			test:function($val){
				console.log(this.pick === this.a);
				console.log($val);
			},
			show:function(){
				console.log(this.msg);
			}
		}
	}
</script>