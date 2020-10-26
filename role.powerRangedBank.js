var rolePowerRangedBank = {

    /** @param {Creep} creep **/
    run: function(creep) {

        const room = creep.room.visual.roomName;
        if (room != 'E58N30') {
            creep.moveTo(new RoomPosition( 8, 36, 'E58N30'))
        }
        else {
            // creep.moveTo(41,38)
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_POWER_BANK);
                    }
            });
            
            if(creep.attack(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
        
	}
};

module.exports = rolePowerRangedBank;