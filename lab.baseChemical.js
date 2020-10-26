var labBaseChemical = {

    run: function() {
        //RESOURCE_OXIDANT
        var factory = Game.getObjectById('5f94b732e769f9dceaa8d089');
        factory.produce(RESOURCE_OXIDANT);
        
        const lab1 = Game.getObjectById('5f94c6a8a761fd1464651346');
        const lab2 = Game.getObjectById('5f94d3a2f0a15a4e9b732307');
        const lab3 = Game.getObjectById('5f94ed7d597c15a694aca046');
        const lab4 = Game.getObjectById('5f94f505a786827c5e3fa4f7');
        const lab5 = Game.getObjectById('5f94e58a4d72c0874f1fdf63');
        const lab6 = Game.getObjectById('5f94fcd9a975f29cb9470a70');
        lab1.runReaction(lab5,lab6);
        lab2.runReaction(lab5,lab6);
        lab3.runReaction(lab5,lab6);
        lab4.runReaction(lab5,lab6);
        
	}
};

module.exports = labBaseChemical;