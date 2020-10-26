var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep,target) {
	    if(creep.store[RESOURCE_ENERGY] == 0) {
            const containersWithEnergy = creep.room.find(FIND_STRUCTURES, {
                filter: (i) => i.structureType == STRUCTURE_CONTAINER 
            });
            if(creep.withdraw(containersWithEnergy[target], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(containersWithEnergy[target]);
            }
        }
        else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller,{visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
	}
};

module.exports = roleUpgrader;