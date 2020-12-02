/**
 * @version 1.0.1
 * 第一版本  使用这个逻辑的时候，需要向 Memory 中 初始化一些参数 .
 * 使用前需要将以下参数序列化到memory中 建议逐条使用
 * 
 *  
 * 
 * Memory.reomteSource = {};
 * 
 *  // scoopObserverPowerBankRoom 定义你需要 observer 采集 powerbank 的房间 建议 5个 过道房
 * Memory.reomteSource.scoopPowerBank = [];
 * Memory.reomteSource.scoopObserverPowerBankRoomLength = 0;
 * Memory.reomteSource.scoopObserverPowerBankRoom = scoopObserverPowerBankRoom;
 * 
 * 
 * // scoopObserverDepositRoom 定义你需要 observer 采集 deposit 的房间 建议 5个 过道房
 * Memory.reomteSource.scoopDeposit = [];
 * Memory.reomteSource.scoopObserverDepositRoomLength = 0;
 * Memory.reomteSource.scoopObserverDepositRoom = scoopObserverDepositRoom;
 * 
 * 如果一个房间 同时挖 powerbank 和 deposit 需要将 observerPowerBankTask(room) 、 observerDepositTask(room) 两个方法进行合并 ，
 *   同时 需要指定 observer 查看的房  , 即 memory 中的  scoopObserverPowerBankRoom 或  scoopObserverDepositRoom ，也可以指定一个 窥探房间list 的名字存入 memory 中
 * 
 * 
 * 引入方式： main.js 中 添加 var remoteSource = require('remoteSource.js') 
 *  loop 方法中执行 ： remoteSource.run(); 即可
 * 
 *  下一步 优化方案 ： deposit 采集时会造成 cpu 飙升，需要把 搬运 的逻辑重新梳理
 * 
 */


/**
 * 远程对象 目前只有采集对象 没有自动攻击对象
 */
var remoteSource = {
    run: function() {
        const checkStatus = Game.time % checkLookSourceCreepticks;
        if(checkStatus == 0){
            checkScoopPbTask();
            checkScoopDepsitTask();
        }
        observerPowerBankTask('E59N29');
        observerDepositTask('E48N19');
        executeScoopTask();
    }
};

module.exports = remoteSource;


/**
 * 定义 observer powerBank 的房间
 */
const scoopObserverPowerBankRoom =[
    'E54N30','E55N30','E56N30','E57N30','E58N30','E59N30','E60N30',
    'E60N23','E60N24','E60N25','E60N26','E60N27','E60N28','E60N29',
    'E60N31','E60N32','E60N33','E60N34','E60N35'
]

/**
 * 定义 observer deposit 的房间
 */
const scoopObserverDepositRoom = [
    'E44N20','E45N20','E46N20','E47N20','E48N20','E49N20','E50N20',
    'E50N16','E50N17','E50N18','E50N19','E50N21','E50N22',
]


/**
 * 每隔多长时间检查一次 资源是否存在
 */
const checkLookSourceCreepticks = 1;

/**
 * 定义 寻找到 pb 资源的 
 */
const scoopPowerSwan = [
    
]

/**
 * 定义 寻找到 pb 资源的 
 */
const scoopDeposit = [
    
]

/**
 * 获取当前没有生成 creep 的 spwan
 * @param {房间名称} roomName 
 */
function getRoomSpwanName(roomName){
    var list = [];
    var spwan = '';
    for(const i in Game.spawns) {
        spwan = i;
        if(Game.spawns[i].spawning == null && Game.spawns[i].pos.roomName == roomName){
            list.push(i);
        }
    }
    if(list.length == 0){
        return spwan;
    }
    return list[0];
}

/**
 * 自杀
 * @param {creep} creep 
 */
function suicide(creep){
    creep.suicide();
}

/**
 * 检测挖掘pb的任务
 */
function checkScoopPbTask(){
   const scoopPowerBankList = Memory.reomteSource.scoopPowerBank;
   for(var i in scoopPowerBankList){
       if(scoopPowerBankList[i].flag){
            isTaskCreepExist(scoopPowerBankList[i]);
            Memory.reomteSource.scoopPowerBank[i].flag = false;
       }else{
            Memory.reomteSource.scoopPowerBank[i].flag = true;
       }
   }
}

/**
 * 检测挖掘deposit的任务
 */
function checkScoopDepsitTask(){
    const scoopPowerBankList = Memory.reomteSource.scoopDeposit;
    for(var i in scoopPowerBankList){
        isDepositTaskCreepExist(scoopPowerBankList[i]);
    }
}

/**
 * 判断对应的creep是否存在
 * @param {任务} task 
 */
function isTaskCreepExist(task){
    if((_.filter(Game.creeps, (creep) => creep.memory.role == 'attack' && creep.memory.target == 'pb' && creep.room == task.room)) == 0){
        generateAttackPbCreep(task);
    }
    if((_.filter(Game.creeps, (creep) => creep.memory.role == 'heal' && creep.memory.target == 'pb' && creep.room == task.room)) == 0){
        generateHealCreep(task);
    }
}
/**
 * 判断对应的creep是否存在
 * @param {*} task 
 */
function isDepositTaskCreepExist(task){
    if((_.filter(Game.creeps, (creep) => creep.memory.role == 'harvest' && creep.memory.target == 'deposit' && creep.room == task.room)) == 0){
        generateHarvestCreep(task);
    }
    if((_.filter(Game.creeps, (creep) => creep.memory.role == 'carry' && creep.memory.target == 'deposit' && creep.room == task.room)) == 0){
        generateCarryDepositCreep(task);
    }
}

/**
 * 执行挖pb的命令
 */
function executeScoopTask(){
    var attackList = _.filter(Game.creeps, (creep) => creep.memory.role == 'attack' && creep.memory.target == 'pb');
    var healkList = _.filter(Game.creeps, (creep) => creep.memory.role == 'heal' && creep.memory.target == 'pb');
    var carryPbList = _.filter(Game.creeps, (creep) => creep.memory.role == 'carry' && creep.memory.target == 'pb');
    var harvestList = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvest' && creep.memory.target == 'deposit');
    var carryDepositList = _.filter(Game.creeps, (creep) => creep.memory.role == 'carry' && creep.memory.target == 'deposit');
    moveToPbHome(attackList,'attack');
    moveToPbHome(healkList,'heal');
    moveToPbHome(carryPbList,'carryPowerBank');
    moveToPbHome(harvestList,'harvest');
    moveToPbHome(carryDepositList,'carryDeposit');
}

/**
 * 向目标房间移动
 * @param {creepList} creepList 
 */
function moveToPbHome(creepList,type){
    for(var i in creepList){
        const remoteRoome = creepList[i].name.substring(0,6);
        if(type == 'carryPowerBank'){
            pickupPowerBank(creepList[i]);
        }else{
            if(creepList[i].room.visual.roomName != remoteRoome && creepList[i].ticksToLive > 300 && ( type != 'carryDeposits')){
                creepList[i].moveTo(new RoomPosition( 25, 25, remoteRoome))
            }else{
                if(type == 'attack'){
                    attackPowerBank(creepList[i]);
                }else if(type == 'heal'){
                    healHurtCreep(creepList[i]);
                }else if(type == 'harvest'){
                    harvestDeposit(creepList[i]);
                }else if(type == 'carryDeposit'){
                    carryDeposit(creepList[i]);
                }
            }
        }  
    }
}
/**
 * 采集 deposit
 * @param {creep} creep 
 */
function harvestDeposit(creep){
    if(creep.store.getUsedCapacity() == 0 && creep.ticksToLive < 300) {
        suicide(creep)
    }
    if(creep.ticksToLive < 50){
        var creeps =  _.filter(Game.creeps, (x) => x.memory.role == 'carry' && x.memory.target == 'deposit' && x.memory.room ==  creep.room.visual.roomName);
        if(creeps.length >0){
            if(creep.transfer(creeps[0],RESOURCE_MIST) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creeps[0]);
            }
        }
    }
    // 回家
    var target = creep.room.find(FIND_DEPOSITS);
    if(creep.store.getFreeCapacity() > 0 ) {
        if(target.length >0){
            if(target[0].lastCooldown > 100){
                deleteTask1(creep.room.visual.roomName)
            }else{
                if(creep.harvest(target[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target[0]);
                }
            } 
        }else{
            if(creep.room.visual.roomName == creep.name.substring(0,6)){
                deleteTask1(creep.name.substring(0,6));
            }
        }   
    }else{
        var creeps =  _.filter(Game.creeps, (x) => x.memory.role == 'carry' && x.memory.target == 'deposit' && x.memory.room ==  creep.room.visual.roomName);
        if(creeps.length >0){
            if(creep.transfer(creeps[0], target[0].depositType) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creeps[0]);
            }
        }
    }
}


/**
 * 搬运 deposit
 * @param {*} creep 
 */
function carryDeposit(creep){
    if(creep.store.getUsedCapacity() == 0 && creep.ticksToLive < 300) {
        suicide(creep)
    }
    if(creep.store.getFreeCapacity() > 0 && creep.ticksToLive > 300){
        const remoteRoome = creep.name.substring(0,6);
        if(creep.room.visual.roomName != remoteRoome){
            creep.moveTo(new RoomPosition( 25, 25, remoteRoome))
        }else{
            const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if(target) {
                if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }else{
                if(creep.store.getFreeCapacity() > 0 && creep.ticksToLive > 300) {
                    var creeps =  _.filter(Game.creeps, (x) => x.memory.role == 'harvest' && x.memory.room ==  creep.room.visual.roomName);
                    if(creeps.length > 0)
                        creep.moveTo(creeps[0]);
                    
                }else{
                    if (creep.room.visual.roomName != creep.name.substring(7,13)) {
                        creep.moveTo(new RoomPosition( 25, 25, creep.name.substring(7,13)))
                    }else {
                        var targets = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                                    return (structure.structureType == STRUCTURE_TERMINAL
                                );
                            }
                        });
                        if(targets.length > 0){
                            creep.moveTo(targets[0]);
                            for(const resourceType in creep.carry) {
                                creep.transfer(targets[0], resourceType);
                            }
                        }
                    }
                }
            }
        }
    }else{
        if (creep.room.visual.roomName != creep.name.substring(7,13)) {
            creep.moveTo(new RoomPosition( 25, 25, creep.name.substring(7,13)))
        }else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TERMINAL
                    );
                }
            });
            if(targets.length > 0){
                creep.moveTo(targets[0]);
                for(const resourceType in creep.carry) {
                    creep.transfer(targets[0], resourceType);
                }
            }
        }
    }

    
}

    

/**
 * 攻击powerbank
 * @param {creep} creep 
 */
function attackPowerBank(creep){
    var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_POWER_BANK);
        }
    });
    // todo 更新 更新 这个房间中 powerbank 的信息
    if(targets.length >0){
        judgeSourceMessage(targets[0]);
        if(creep.attack(targets[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[0]);
        }
    }else{
        // 采集 pb 任务完成  删除 缓存中的任务
        deleteTask(creep.room.visual.roomName);
        suicide(creep);
    }  
}
/**
 * 治疗受伤的creep
 * @param {creep} creep 
 */
function healHurtCreep(creep){
    const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
        filter: function(object) {
            return object.hitsMax > object.hits ;
        }
    });
    if(target) {
        if(creep.heal(target) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
        }
    }else{
        // 没有受伤对象就向 powerbank 移动
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_POWER_BANK);
            }
        });
        if(targets.length>0){
            creep.moveTo(targets[0].pos.x+1,targets[0].pos.y+1);
        }else{
            suicide(creep);
        } 
    }
}
/**
 * 去采集资源 并带回
 * @param {采集资源的creep} creep 
 */
function pickupPowerBank(creep){
    if(creep.store.getUsedCapacity(RESOURCE_POWER) == 0) {
        const remoteRoome = creep.name.substring(0,6);
        if(creep.room.visual.roomName != remoteRoome ){
            creep.moveTo(new RoomPosition( 25, 25, remoteRoome))
        }else{
            const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if(target) {
                if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }else{
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_POWER_BANK);
                    }
                });
                if(targets.length > 0){
                    creep.moveTo(targets[0].pos.x + 3 ,targets[0].pos.y + 3)
                }
            }
        }
     }else{
        if (creep.room.visual.roomName != creep.name.substring(7,13)) {
            creep.moveTo(new RoomPosition(15,37, creep.name.substring(7,13)))
        }else {
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
            }
        }
     }
}


/**
 * 判断当前房间 powerbank 还有多少 hixs 
 * @param {资源} target 
 */
function judgeSourceMessage(target){
    if(target.hits < 400000){
        const scoopPowerBankList =  Memory.reomteSource.scoopPowerBank;
        for(var i in scoopPowerBankList){
            if(target.room.name == scoopPowerBankList[i].room)
            generateCarryCreep(scoopPowerBankList[i]);
        }
    }
}


/**
 * 删除即将过期的任务
 * @param {资源} target 
 */
function deleteTask(room){
    const scoopPowerBankList =  Memory.reomteSource.scoopPowerBank;
    for(var i in scoopPowerBankList){
        if(room == scoopPowerBankList[i].room){
            Memory.reomteSource.scoopPowerBank.splice(i,1);
        }      
    }
}

/**
 * 删除即将过期的任务
 * @param {资源} target 
 */
function deleteTask1(room){
    var scoopDepositList =  Memory.reomteSource.scoopDeposit;
    for(var i in scoopDepositList){
        if(room == scoopDepositList[i].room){
            Memory.reomteSource.scoopDeposit.splice(i,1);
        }      
    }
}



/**
 * oberver 巡视房间
 */
function observerPowerBankTask(room){
    var observer = Game.rooms[room].find(FIND_STRUCTURES, {
        filter: (i) => i.structureType == STRUCTURE_OBSERVER 
    })[0];
    var scoopObserverPowerBankRoomLength = Memory.reomteSource.scoopObserverPowerBankRoomLength;
    Memory.reomteSource.scoopObserverPowerBankRoomLength = (scoopObserverPowerBankRoomLength + 1) % Memory.reomteSource.scoopObserverPowerBankRoom.length;
    if (observer.observeRoom(Memory.reomteSource.scoopObserverPowerBankRoom[Memory.reomteSource.scoopObserverPowerBankRoomLength]) != OK) {
        console.log(' ob失败??  当前ob房间：' + Memory.reomteSource.scoopObserverPowerBankRoom[Memory.reomteSource.scoopObserverPowerBankRoomLength])
    }
    console.log( Game.time + 'ob 房间 ： ' + Memory.reomteSource.scoopObserverPowerBankRoom[Memory.reomteSource.scoopObserverPowerBankRoomLength])
    // ob 完成
    const theRoomName = Memory.reomteSource.scoopObserverPowerBankRoom[scoopObserverPowerBankRoomLength];
    const theRoom = Game.rooms[theRoomName];
    if(!theRoom){
        return console.log(Memory.reomteSource.scoopObserverPowerBankRoom[scoopObserverPowerBankRoomLength] + ' 观察失败')
    }
    const powerBanks = theRoom.find(FIND_STRUCTURES, {
        filter: (structure) => { return structure.structureType == STRUCTURE_POWER_BANK; }
    });
    if(!powerBanks.length){
        return
    }
    var target = powerBanks[0];
    if(!isPbSourceExist(target,Memory.reomteSource.scoopPowerBank)){
        const source = {};
        source.room = target.room.name;
        source.generateRoom = room;
        source.ticksToDecay = target.ticksToDecay;
        source.power = target.power;
        source.hits = target.hits;
        source.flag = true;
        source.x = target.pos.x;
        source.y = target.pos.y;
        Memory.reomteSource.scoopPowerBank.push(source)
    }
}



/**
 * 
 * @param {观察者房间} room 
 */
function observerDepositTask(room){
    var observer = Game.rooms[room].find(FIND_STRUCTURES, {
        filter: (i) => i.structureType == STRUCTURE_OBSERVER 
    })[0];
    var scoopObserverDepositRoomLength = Memory.reomteSource.scoopObserverDepositRoomLength;
    Memory.reomteSource.scoopObserverDepositRoomLength = (scoopObserverDepositRoomLength + 1) % Memory.reomteSource.scoopObserverDepositRoom.length;
    if (observer.observeRoom(Memory.reomteSource.scoopObserverDepositRoom[Memory.reomteSource.scoopObserverDepositRoomLength]) != OK) {
        console.log(roomName + ' ob失败??  当前ob房间：' + Memory.reomteSource.scoopObserverDepositRoom[Memory.reomteSource.scoopObserverDepositRoomLength])
    }
    // ob 完成
    const theRoomName = Memory.reomteSource.scoopObserverDepositRoom[scoopObserverDepositRoomLength];
    const theRoom = Game.rooms[theRoomName];
    if(!theRoom){
        return console.log(Memory.reomteSource.scoopObserverDepositRoom[scoopObserverDepositRoomLength] + '  观察失败')
    }
    const deposits = theRoom.find(FIND_DEPOSITS);
    if(!deposits.length){
        return
    }
    var target = deposits[0];
    if(!isDepositSourceExist(target,Memory.reomteSource.scoopDeposit) && target.lastCooldown < 100){
        const source = {};
        source.room = target.room.name;
        source.generateRoom = room;
        source.ticksToDecay = target.ticksToDecay;
        source.flag = true;
        source.x = target.pos.x;
        source.y = target.pos.y;
        Memory.reomteSource.scoopDeposit.push(source)
    }
}



/**
 * 判断资源是否存在
 * @param {资源} target 
 * @param {资源列表} sourceList 
 */
function isPbSourceExist(target,sourceList){
    var status = false;
    for(var i in sourceList){
        if(sourceList[i].room == target.room.name){
            status = true;
        }   
    }
    return status;
 }

 /**
 * 判断资源是否存在
 * @param {资源} target 
 * @param {资源列表} sourceList 
 */
function isDepositSourceExist(target,sourceList){
    var status = false;
    for(var i in sourceList){
        if(sourceList[i].room == target.room.name)
            status = true;
    }
    return status;
 }


/**
 * 生成攻击工具pb建筑的creep
 * @param {任务} task 
 */
function generateAttackPbCreep(task){
    const name = task.room + ' ' + task.generateRoom + ' ' + 'attack' 
    Game.spawns[getRoomSpwanName(task.generateRoom)].spawnCreep([
        ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,
        ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,
        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
        MOVE,MOVE,MOVE,MOVE,MOVE
    ], name, 
        {memory: {role: 'attack', target: 'pb', worker: true, room: task.room}}); 
}

/**
 * 生成治疗 creep
 * @param {任务} task 
 */
function generateHealCreep(task){
    const name = task.room + ' ' + task.generateRoom +' ' + 'heal' 
    Game.spawns[getRoomSpwanName(task.generateRoom)].spawnCreep([
        HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,
        HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,
        HEAL,HEAL,HEAL,HEAL,HEAL,MOVE,MOVE,MOVE,MOVE,MOVE,
        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE
       
    ], name, 
        {memory: {role: 'heal', target: 'pb', worker: true, room: task.room}});
}

/**
 * 根据资源房间的情况生成对应的creep
 * @param {任务} task 
 */
function generateCarryCreep(task){
    var carryNumber = Math.ceil(task.power / 1500)
    var carrys = _.filter(Game.creeps, (creep) => creep.memory.role == 'carry' && creep.memory.target == 'pb' && creep.memory.room == task.room)
    if(carrys.length < carryNumber){
        const name = task.room + ' ' + task.generateRoom +' ' + 'carry' + Game.time;
        Game.spawns[getRoomSpwanName(task.generateRoom)].spawnCreep([
            CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
            CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
            CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
            MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
            MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE
        ], name, 
            {memory: {role: 'carry', target: 'pb', worker: true, room: task.room}});
    }
}

/**
 * 生成采矿 creep
 * @param {任务} task 
 */
function generateHarvestCreep(task){
    const name = task.room + ' ' + task.generateRoom +' ' + 'harvest' 
    Game.spawns[getRoomSpwanName(task.generateRoom)].spawnCreep([
        WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
        WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
        WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,
        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE
    ], name, 
        {memory: {role: 'harvest', target: 'deposit', worker: true, room: task.room}});
}


/**
 * 生成采矿 creep
 * @param {任务} task 
 */
function generateCarryDepositCreep(task){
    const name = task.room + ' ' + task.generateRoom +' ' + 'carry' 
    Game.spawns[getRoomSpwanName(task.generateRoom)].spawnCreep([
        CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
        CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
        CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE
    ], name, 
        {memory: {role: 'carry', target: 'deposit', worker: true, room: task.room}});
}

