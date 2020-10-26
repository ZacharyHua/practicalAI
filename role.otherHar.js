var roleOtherHar = {

   /** @param {Creep} creep **/
    run: function(creep) {
       
	     //  console.log('Spawning upgraderss  number : 1' );
        // 要占领的房间
        // 如果该房间不存在就先往房间走
         if(creep.store.getFreeCapacity() > 600) {
            const room = creep.room.visual.roomName;
            if (room != 'E58N30') {
                creep.moveTo(new RoomPosition(31,34, 'E58N30'))
            }
            else {
                const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
                if(target) {
                    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
                // var target = Game.getObjectById('5f92a77f40c6a15ebd859ac1');
                // if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                //     creep.moveTo(target);
                // }
            }
             
         }else{
            const room = creep.room.visual.roomName;
            if (room != 'E59N29') {
                creep.moveTo(new RoomPosition(15,37, 'E59N29'))
            }
            else {
                var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_STORAGE
                            );
                        }
                });
                if(targets.length > 0){
                    if(creep.transfer(targets[0], RESOURCE_POWER) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }else {
                     creep.moveTo(15, 38);
                }
            }
         }
	}
};

module.exports = roleOtherHar;