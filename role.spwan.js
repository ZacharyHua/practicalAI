var roleSpwan = {

    /** @param {Creep} creep **/
    run: function(creep) {
	       if(creep.store.getFreeCapacity() >= 1401) {  
	        var target = Game.getObjectById('5f9515bfe3c0516c5d6a1aa7');
            if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
        else {
            
          // 这里把建筑类型添加一个塔楼
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (
                            // structure.structureType == STRUCTURE_SPAWN ||
                        // structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_LAB ||
                        structure.structureType == STRUCTURE_EXTENSION ) && 
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }else {
                var targetTower = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TOWER) && 
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 50;
                    }
                });
                if(targetTower.length>0){
                    if(creep.transfer(targetTower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targetTower[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }else{
                    creep.moveTo(17, 14);
                }
            }
        }
	}
};

module.exports = roleSpwan;