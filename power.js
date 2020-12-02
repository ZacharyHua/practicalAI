
const rooms = [
    'E59N29',
    'E48N19'
]

var rolePower = {
    run: function() {
        burnPower();
        var status = Game.time % 100 ;
        if(status == 0){
            for(var i in rooms){
                callPowerCreep(rooms[i]);
            }
        }
        excutePowerCreepTask();
	}
};

module.exports = rolePower;


/**
 * 燃烧power
 */
function burnPower(){
    for(var i in rooms){
        getPowerSpwan(rooms[i]).processPower();
    }
}


/**
 * 召唤超能creep
 * @param {房间名称} room 
 */
function callPowerCreep(room){
    var powerCreep = Game.rooms[room].find(FIND_POWER_CREEPS);
    if(powerCreep){
        return;
    }else{
        if(room == 'E59N29'){
            Game.powerCreeps['power_creep'].spawn(getPowerSpwan(room));
        }else if(room == 'E48N19'){
            Game.powerCreeps['power_second'].spawn(getPowerSpwan(room));
        }
    }
}

/**
 * 获取 powerSpwan
 * @param {房间} room 
 */
function getPowerSpwan(room){
    return Game.rooms[room].find(FIND_STRUCTURES, {
        filter: (i) => i.structureType == STRUCTURE_POWER_SPAWN 
    })[0];
}


/**
 * 执行 power 的调度任务
 */
function excutePowerCreepTask(){
    for(var i in rooms){
        var powerCreep = Game.rooms[rooms[i]].find(FIND_POWER_CREEPS)[0];
        if(powerCreep.ticksToLive < 1000){
            renewPowerCreep(powerCreep,rooms[i])
        }else{
            var observer = Game.rooms[powerCreep.room.visual.roomName].find(FIND_STRUCTURES, {
                filter: (i) => i.structureType == STRUCTURE_OBSERVER 
            })[0];
            if(powerCreep.room.name == 'E59N29' && (observer.effects.ticksRemaining < 100 || !observer.effects.ticksRemaining)){
                operateObserver(powerCreep);
            }else{
                console.log(powerCreep.room.visual.roomName)

                var extensions = Game.rooms[powerCreep.room.visual.roomName].find(FIND_STRUCTURES, {
                    filter: (i) => i.structureType == STRUCTURE_EXTENSION && i.store.getFreeCapacity() > 0
                });
                if(extensions.length > 0){
                    operateExtension(powerCreep);
                }else{
                    var storage = Game.rooms[powerCreep.room.visual.roomName].find(FIND_STRUCTURES, {
                        filter: (i) => i.structureType == STRUCTURE_POWER_SPAWN 
                    })[0];
                    powerCreep.moveTo(storage);
                }
            }
        } 
    }
}

/**
 * 执行任务的优先级最高
 * @param {刷新 powerCreep 的 ticks} powerCreep 
 */
function renewPowerCreep(powerCreep,room){
    var powerSpwan = getPowerSpwan(room);
    if(Game.powerCreeps[powerCreep.name].renew(powerSpwan) == ERR_NOT_IN_RANGE){
        powerCreep.moveTo(powerSpwan);
    }
}

/**
 * 生产 ops 优先级最低
 * @param {*} powerCreep 
 */
function generateOPs(powerCreep){
    powerCreep.usePower(PWR_GENERATE_OPS);
}

/**
 * 填充 extension 优先级 略高
 * @param {*} powerCreep 
 */
function operateExtension(powerCreep){
    var storage = Game.rooms[powerCreep.room.visual.roomName].find(FIND_STRUCTURES, {
        filter: (i) => i.structureType == STRUCTURE_STORAGE 
    })[0];
    if(powerCreep.usePower(PWR_OPERATE_EXTENSION,storage) == ERR_NOT_IN_RANGE){
        powerCreep.moveTo(storage);
    }
}
	
/**
 * 开启无限视野 -- 优先级最低 
 * @param {*} powerCreep 
 */
function operateObserver(powerCreep){
    var observer = Game.rooms[powerCreep.room.name].find(FIND_STRUCTURES, {
        filter: (i) => i.structureType == STRUCTURE_OBSERVER 
    })[0];
    if(powerCreep.usePower(PWR_OPERATE_OBSERVER,observer) == ERR_NOT_IN_RANGE){
        powerCreep.moveTo(observer);
    }
}

/**
 * REGEN_SOURCE
 * 重新生成能量
 * @param {*} powerCreep 
 */
function regenSource(powerCreep){
    var sources = Game.roomName[powerCreep.room.visual.roomName].find(FIND_SOURCES);
    // todo 如果现在处于冷却期间，则重新生成能量  
}
