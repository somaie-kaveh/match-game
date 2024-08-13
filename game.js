var game = new Vue({
	el:'#game1',
	data: {
		firstClick: false,
		firstCardId:'',
		pics: [
			{id:0, source: ''},
			{id:1, source: ''},
			{id:2, source: ''},
			{id:3, source: ''},
			{id:4, source: ''},
			{id:5, source: ''},
			{id:6, source: ''},
			{id:7, source: ''},
			{id:8, source: ''},
			{id:9, source: ''},
			{id:10, source: ''},
			{id:11, source: ''},
		]
	},
	methods:{
		showImage: function(env) {
			this.pics[env].source = `./picgame/furit${env > 5 ? env-6 : env}.jpg`;
			this.firstClick = !this.firstClick;
			if (this.firstClick === false) {
				var firstCard = this.pics[this.firstCardId].source;
				var secondCard =  this.pics[env].source;
				if( secondCard != firstCard) {
					setTimeout(() => {
						this.pics[env].source = '';
						this.pics[this.firstCardId].source = '';
					}, 500);
				}
			} else {
				this.firstCardId = env;
			}
		}
	}
})