angular.module('fadiProject').controller('projectController',projectController);

// var projects=[{
// 	img:'http://themes.wplook.com/thearchitect/wp-content/uploads/sites/14/2014/10/charles_philip.jpg',
// 	name:'Philip Charles2222222',
// 	para:'Civic + Public, Shanghai, China'},
// 	{img:'http://themes.wplook.com/thearchitect/wp-content/uploads/sites/14/2015/02/baylis_rd_livingroom.jpg',
// 	name:'Central Spa Hobby',
// 	para:'Commercial, Montreal, Canada'},
// 	{img:'http://themes.wplook.com/thearchitect/wp-content/uploads/sites/14/2014/10/central_spa_hobby.jpg',
// 	name:'Baylits RD Living',
// 	para:'Commercial, London, England'},
// 	{img:'http://themes.wplook.com/thearchitect/wp-content/uploads/sites/14/2014/10/river_view_hotel_ext.jpg',
// 	name:'River View Hotel',
// 	para:'Civic + Public, California, USA'},
// 	{img:'http://themes.wplook.com/thearchitect/wp-content/uploads/sites/14/2014/10/jesu_island_ext.jpg',
// 	name:'Wood Experience Center',
// 	para:'Commercial, Jeju, South Korea'},
// 	{
// 	img:'http://themes.wplook.com/thearchitect/wp-content/uploads/sites/14/2014/09/wallnut_tree_condominiums.jpg',
// 	name:'Wallnut Tree Condominiums',
// 	para:'Gouvernment'
// 	}];

function projectController(Project){
	var self=this;
	var projects=Project.get({});
	projects.$promise.then(function(data){
		self.projects=data.content;
	});
	// this.projects=projects;
	this.pageNum=0;
	this.selectPage=function(page){
		this.pageNum=page;
	};
}