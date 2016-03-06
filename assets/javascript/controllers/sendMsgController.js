angular.module('project').controller('sendMsgController',sendMsgController);
function sendMsgController(){
	this.messages=[];
	this.msgs={};
	this.addMessage=function(){
		console.log("adding message",this.msgs)
		this.messages.push(this.msgs);
		this.msgs={};
	}
}