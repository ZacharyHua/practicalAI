var roleUpgraderLink = {

    /** @param {Creep} creep **/
    run: function(creep,target) {
	    if(creep.store[RESOURCE_ENERGY] == 0) {
	        var target1 = Game.getObjectById('5f94c6a8a761fd1464651346');
	        if(creep.memory.boostCreep != 0 && Math.floor(target1.store.getUsedCapacity(RESOURCE_GHODIUM_HYDRIDE) / 900) > 0){
	            creep.moveTo(target1);
	            creep.memory.boostCreep = target1.boostCreep(creep);
	        }else{
	            creep.memory.boostCreep = 0;
	           // console.log(JSON.stringify(test)); 
	            var target = Game.getObjectById('5f93799eac623e0304560de4');
                if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
	        }
        }
        else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller,{visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
	}
};

module.exports = roleUpgraderLink;