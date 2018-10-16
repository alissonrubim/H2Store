H2Store = {};

H2Store.Init = function(){
	
	var currentDeck = null;
	window.Store.forEach(function(item, itemIndex){
		if(itemIndex%3 == 0){
			currentDeck = $('<div class="card-deck"></div>');
			$("#render-store").append(currentDeck);
		}
		
		var card  = $('<div class="card" style="width: 18rem;"></div>');
		currentDeck.append(card);
		var cardImg = $('<div class="card-img-contents"></div>');
		card.append(cardImg);
		cardImg.append('<img class="card-img-left zoom" src="resources/'+item.Image+'" alt="Card image cap">');

		var cardBody = $('<div class="card-body"></div>');
		card.append(cardBody);

		cardBody.append('<h5 class="card-title">'+item.Title+'</h5>');
		cardBody.append('<p class="card-text">'+item.Description+'</p>');
		cardBody.append('<p class="card-price">R$ '+item.Price+'</p>');
		cardBody.append('<a href="#" class="btn btn-dark link-store">Olx</a>');
		cardBody.append('<a href="#" class="btn btn-dark link-store">MercadoLivre</a>');
		cardBody.append('<hule></hule>');
		if(item.Categories != null){
			item.Categories.forEach(function(category){
				cardBody.append('<div class="category">'+category+'</div>');
			})
		}
	})
}