var roleHarCarry= {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.ticksToLive < 100 && ceep.store.getCapacity > 0){
            creep.suicide();
        }
        
	    if(creep.store.getFreeCapacity() > 0) {
            const containersWithEnergy = creep.room.find(FIND_STRUCTURES, {
                filter: (i) => i.structureType == STRUCTURE_STORAGE &&
                              i.store[RESOURCE_ENERGY] > 5000
            });
            if(creep.withdraw(containersWithEnergy[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(containersWithEnergy[0]);
            }
        }
        else {
          // 这里把建筑类型添加一个塔楼
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER) && 
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 600;
                    }
            });
            if(targets.length > 1) {
                if(creep.transfer(targets[1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[1], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }else if(targets.length == 1){
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }else {
                creep.moveTo(28, 27);
            }
        }
	}
};

module.exports = roleHarCarry;