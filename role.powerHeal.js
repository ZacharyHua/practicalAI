var rolePowerHeal = {

    /** @param {Creep} creep **/
    run: function(creep) {
        const room = creep.room.visual.roomName;
       
        // console.log('Spawning upgraderss  number : ' +room);
        // 如果该房间不存在就先往房间走
        if (room != 'E58N30') {
            creep.moveTo(new RoomPosition(31, 12, 'E58N30'))
        }
        else {
            // creep.moveTo(new RoomPosition(45, 36, 'E59N30'))
            // creep.moveTo(31, 12)
            const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
            filter: function(object) {
                return object.hitsMax > object.hits  ;
            }
            });
            // console.log(JSON.stringify(target));         
            if(target) {
                if(creep.heal(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }
        
	}
};

module.exports = rolePowerHeal;