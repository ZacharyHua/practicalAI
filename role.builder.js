var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
		// 如果 爬虫处于建筑状态且负载能量为0 的时候
	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
        // 将爬虫设为 非建筑状态。并说出  harvest
            creep.memory.building = false;
            // creep.say('🔄 harvest');
	    }
      // 如果爬虫不处于建筑状态 且 爬虫满能量负载的时候 
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
        // 将爬虫设为建筑状态。并说出 build
	        creep.memory.building = true;
	       // creep.say('🚧 build');
	    }
		// 如果爬虫处于建筑状态 
	    if(creep.memory.building) {
        // 获取当前房间内的等待建设的建筑数组
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        // 如果有等待建造的建筑物
            if(targets.length) {
              // 获取建筑列表中的第一个
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                  // 向该建筑物移动 并用颜色 #ffffff 标记路线
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }else{
                 creep.moveTo(32, 13);
            }
	    }
      // 否则去采集资源
	    else {
	       // const containersWithEnergy = creep.room.find(FIND_STRUCTURES, {
        //         filter: (i) => i.structureType == STRUCTURE_STORAGE &&
        //                       i.store[RESOURCE_ENERGY] > 0
        //     });
        //     if(creep.withdraw(containersWithEnergy[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(containersWithEnergy[0]);
        //     }
            var target = Game.getObjectById('5f93799eac623e0304560de4');
            if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
	    }
	}
};

module.exports = roleBuilder;