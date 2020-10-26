var homeCreepMethod = {
    getTargetById: function(targetId){
        return Game.getObjectById(targetId);
    },
    /** 采集的  */
    harvest: function(creep, target , source) {
        if(creep.harvest(target,source) == ERR_NOT_IN_RANGE){
            creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    },
    withdraw: function(creep,targetId,source){
        var target = this.getTargetById(targetId);
        if(creep.withdraw(target, source) == ERR_NOT_IN_RANGE ) {
            creep.moveTo(target);
        }
    },
    tarnfer: function(creep,targetId){
        if(source){
            var target = Game.getObjectById(targetId);
            creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
            for(const resourceType in creep.carry) {
                creep.transfer(storage, resourceType);
            }
        }
    },
    tarnfer: function(creep,targetId,source){
        if(source){
            var target = Game.getObjectById(targetId);
            if(creep.tarnfer(creep,source) == ERR_NOT_IN_RANGE){
                 creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    },
    getTargetSourceNumber: function(targetId,source){
        return this.getTargetById(targetId).store.getUsedCapacity(source);
    }
};

module.exports = homeCreepMethod;