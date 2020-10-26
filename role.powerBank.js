var rolePowerBank = {

    /** @param {Creep} creep **/
    run: function(creep) {

        const room = creep.room.visual.roomName;
        if (room != 'E58N30') {
            creep.moveTo(new RoomPosition( 31, 12, 'E58N30'))
        }
        else {
            // creep.moveTo(31, 11)
            // creep.moveTo(new RoomPosition( 19, 36, 'E60N28'))
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

module.exports = rolePowerBank;