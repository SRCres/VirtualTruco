/**
 * GameBoardModel Class
 */
var GameBoardModel = function (gameDataSet) {
	this.states = {
		PLAYING: "playing",
		PAUSED: "paused"
	};

	this._gameDataSet = gameDataSet;
	this._curMove = 0;
	this._state = this.states.PAUSED;
	this._speedMultiplier = 1;
	
	// Crea los eventos necesarios
	//this.speedChanged = new Event(this);
	//this.stateChanged = new Event(this);
	//this.moveChanged = new Event(this);
	//this.handChanged = new Event(this);
	this.update = new Event(this);
};

GameBoardModel.prototype = {
	getCurrentMove: function() {
		return this._curMove;
	},
		
	getState: function() {
		return this._state;
	},
	
	getSpeedMultiplier: function() {
		return this._speedMultiplier;
	},
	
	setState: function(state) {
		if (this._state != state) {
			this._state = state;
			this.update.notify();
		}
	},
	
	setMove: function(num) {
		// TO-DO: Chequear con la cantidad total de jugadas
		if (this._curMove != num && (num >= 0 && num <= 100)) {
			this._curMove = num;
			this.update.notify();
		}		
	},
	
	setSpeedMultiplier: function(multiplier) {
		this._speedMultiplier = multiplier;
		this.update.notify();
	},
	
	/*
	 * Retorna una jugada por numero
	 */
	getMove: function(num) {

	},
};