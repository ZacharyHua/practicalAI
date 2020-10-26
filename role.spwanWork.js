var roleSpwan = require('role.spwan');


var roleSpwanWork = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.store.getFreeCapacity() > 0) {  
	        var target = Game.getObjectById('5f951a5b4d72c0d9e81fee1f');
            if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
        else {
            var target = Game.getObjectById('5f9515bfe3c0516c5d6a1aa7');
            if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
	}
};

module.exports = roleSpwanWork;