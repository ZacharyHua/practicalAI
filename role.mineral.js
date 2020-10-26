var roleMineral = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = Game.getObjectById('5bbcb737d867df5e54207e08');
            // console.log('Spawning upgraderss  number : ' + JSON.stringify(sources));
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER) && 
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            if(targets.length>1) {
                if(creep.transfer(targets[1], RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[1]);
                }
            }else {
                 creep.moveTo(15, 27);
            }
        }
	}
};

module.exports = roleMineral;