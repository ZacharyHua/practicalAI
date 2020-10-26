
var roleSpwan = require('role.spwan');
var homeCreepMethod = require('home.creepMethod');

var roleMineralCarry = {

    /** @param {Creep} creep **/
    run: function(creep,target) {
        
        // console.log(JSON.stringify(homeCreepMethod.getTargetSourceNumber('5f94d3a2f0a15a4e9b732307',RESOURCE_LEMERGIUM_OXIDE))); 
       
        if(creep.store.getFreeCapacity() > 999) {
            if(creep.ticksToLive < 50){
                creep.suicide();
            }
            var target = Game.getObjectById('5f93799eac623e0304560de4');
            var target1 = Game.getObjectById('5f94c6a8a761fd1464651346');
            var target2 = Game.getObjectById('5f9515bfe3c0516c5d6a1aa7');
            var lab1 = Game.getObjectById('5f94e58a4d72c0874f1fdf63');
            var lab2 = Game.getObjectById('5f94fcd9a975f29cb9470a70');

            if(target1.store.getUsedCapacity(RESOURCE_GHODIUM_HYDRIDE) > 0){
                if(creep.withdraw(target1, RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE ) {
                    creep.moveTo(target1);
                }
            }
            else if(lab1.store.getUsedCapacity(RESOURCE_LEMERGIUM) < 2000){
                if (creep.withdraw(target, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE ) {
                    creep.moveTo(target);
                }
            }else if(lab2.store.getUsedCapacity(RESOURCE_OXYGEN) < 2000){
                if(creep.withdraw(target, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }else if (homeCreepMethod.getTargetSourceNumber('5f94d3a2f0a15a4e9b732307',RESOURCE_LEMERGIUM_OXIDE) >= 1000) {
                console.log(JSON.stringify(homeCreepMethod.getTargetSourceNumber('5f94d3a2f0a15a4e9b732307',RESOURCE_LEMERGIUM_OXIDE)));
                homeCreepMethod.withdraw(creep,'5f94d3a2f0a15a4e9b732307',RESOURCE_LEMERGIUM_OXIDE);
            }else if (homeCreepMethod.getTargetSourceNumber('5f94c6a8a761fd1464651346',RESOURCE_LEMERGIUM_OXIDE) >= 1000) {
                homeCreepMethod.withdraw(creep,'5f94c6a8a761fd1464651346',RESOURCE_LEMERGIUM_OXIDE);
            }else if (homeCreepMethod.getTargetSourceNumber('5f94ed7d597c15a694aca046',RESOURCE_LEMERGIUM_OXIDE) >= 1000) {
                homeCreepMethod.withdraw(creep,'5f94ed7d597c15a694aca046',RESOURCE_LEMERGIUM_OXIDE);
            }else if (homeCreepMethod.getTargetSourceNumber('5f94f505a786827c5e3fa4f7',RESOURCE_LEMERGIUM_OXIDE) >= 1000) {
                homeCreepMethod.withdraw(creep,'5f94f505a786827c5e3fa4f7',RESOURCE_LEMERGIUM_OXIDE);
            }
            else if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && target2.store.getUsedCapacity(RESOURCE_ENERGY) < 500000) {
                creep.moveTo(target);
            }
        }else {
            if(creep.store[RESOURCE_ENERGY] > 0){
                var target = Game.getObjectById('5f9515bfe3c0516c5d6a1aa7');
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                }
            }
            else if (creep.store[RESOURCE_LEMERGIUM] > 0){
                var target = Game.getObjectById('5f94e58a4d72c0874f1fdf63');
                if(creep.transfer(target, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                }
            }
            else if (creep.store[RESOURCE_OXYGEN] > 0){
                var target = Game.getObjectById('5f94fcd9a975f29cb9470a70');
                if(creep.transfer(target, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                }
            }
            else if (creep.store[RESOURCE_GHODIUM_HYDRIDE] > 0){
                var target = Game.getObjectById('5f9515bfe3c0516c5d6a1aa7');
                if(creep.transfer(target, RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                }
            }
            else {
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_STORAGE
                        );
                    }
                });
                creep.moveTo(targets[0]);
                for(const resourceType in creep.carry) {
                    creep.transfer(targets[0], resourceType);
                }
            }
            
        }
	}
};

module.exports = roleMineralCarry;