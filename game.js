var game = new Vue({
	el:'#game1',
	data: {
		firstClick: false,
		firstCardId:'',
		condition: false,
		pics: [
			{id:0, source: './picgame/basket.jpg', save: false},
			{id:1, source: './picgame/basket.jpg', save: false},
			{id:2, source: './picgame/basket.jpg', save: false},
			{id:3, source: './picgame/basket.jpg', save: false},
			{id:4, source: './picgame/basket.jpg', save: false},
			{id:5, source: './picgame/basket.jpg', save: false},
			{id:6, source: './picgame/basket.jpg', save: false},
			{id:7, source: './picgame/basket.jpg', save: false},
			{id:8, source: './picgame/basket.jpg', save: false},
			{id:9, source: './picgame/basket.jpg', save: false},
			{id:10, source: './picgame/basket.jpg', save: false},
			{id:11, source: './picgame/basket.jpg', save: false},
		]
	},
	methods:{
		showImage: function(cardId) {
			if(this.pics[cardId].save === true){ return; }
			document.getElementById(`card-${cardId}`).style.transform = 'rotateY(180deg)';
			this.pics[cardId].source = `./picgame/furit${cardId > 5 ? cardId-6 : cardId}.jpg`;
			this.firstClick = !this.firstClick;
			if (this.firstClick === false) {
				var firstCard = this.pics[this.firstCardId].source;
				var secondCard =  this.pics[cardId].source;
				if(firstCard === secondCard){
					this.pics[cardId].save =true,
					this.pics[this.firstCardId].save = true
				} else if( secondCard != firstCard) {
					setTimeout(() => {
						document.getElementById(`card-${cardId}`).style.transform = 'rotateY(90deg)';
						document.getElementById(`card-${this.firstCardId}`).style.transform = 'rotateY(90deg)';
						setTimeout(() => {
							this.pics[cardId].source = './picgame/basket.jpg';
							this.pics[this.firstCardId].source = './picgame/basket.jpg';
							document.getElementById(`card-${cardId}`).style.transform = 'rotateY(0deg)';
							document.getElementById(`card-${this.firstCardId}`).style.transform = 'rotateY(0deg)';
						}, 100);
					}, 500);
				}
			} else {
				this.firstCardId = cardId;
			}
		}
	}
})