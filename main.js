var roleHarvester = require('role.harvester');
var roleHarvesters = require('role.harvesters');
var roleOtherHar = require('role.otherHar')
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleUpgraderLink = require('role.upgraderLink');
var roleSpwan = require('role.spwan');
var roleHarCarry = require('role.harCarry');
var linkTranfer = require('link.tranfer');
var rolePowerBank = require('role.powerBank');
var rolePowerHeal = require('role.powerHeal');
var roleMineral = require('role.mineral');
var roleMineralCarry = require('role.mineralCarry');
var tranferMarket = require('tranfer.market');
var labBaseChemical = require('lab.baseChemical');
var rolePowerRangedBank = require('role.powerRangedBank');
var roleSpwanWork = require('role.spwanWork');



module.exports.loop = function () {
    
    var haves = 1;
    
    var roomss = 'E59N30';
    
    linkTranfer.run();
    tranferMarket.run();
    labBaseChemical.run();

    // var otherHars = _.filter(Game.creeps, (creep) => creep.memory.role == 'otherHar');
    // if(otherHars.length < 3) {
    //     var newName = 'o' + Game.time;
    //     Game.spawns['John'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY, MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,MOVE,  MOVE,MOVE, MOVE], newName, 
    //         {memory: {role: 'otherHar'}});        
    // }
    
    
    // var powerBanks = _.filter(Game.creeps, (creep) => creep.memory.role == 'powerBank');
    // if(powerBanks.length <3) {
    //     var newName = 'pa' + Game.time;
    //     Game.spawns['John'].spawnCreep([  ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK, ATTACK, MOVE, MOVE, MOVE,  MOVE, MOVE,  MOVE,  MOVE, MOVE,  MOVE, MOVE], newName, 
    //         {memory: {role: 'powerBank'}});        
    // }
    
    
    
    // var powerHeals = _.filter(Game.creeps, (creep) => creep.memory.role == 'powerHeal');
    // if(powerHeals.length < 6) {
    //     var newName = 'ph' + Game.time;
    //     Game.spawns['John'].spawnCreep([HEAL,HEAL,HEAL,HEAL ,HEAL ,HEAL ,HEAL ,HEAL,HEAL,HEAL,HEAL ,HEAL ,HEAL ,HEAL ,HEAL ,MOVE, MOVE,  MOVE,  MOVE,MOVE,  MOVE,  MOVE, MOVE,  MOVE, MOVE], newName, 
    //         {memory: {role: 'powerHeal'}});        
    // }
    
    
    
    
    var spwans = _.filter(Game.creeps, (creep) => creep.memory.role == 'spwan');
		// 如果农民的数量小于2 
    if(spwans.length <= 1 && spwans[0].ticksToLive < 150  ) {
        // if(spwans.length < 2) {
        var newName = 's' + Game.time;
        // Game.spawns['DAI'].spawnCreep([ CARRY,CARRY  ,MOVE, MOVE], newName, 

        Game.spawns['DAI'].spawnCreep([ CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE, MOVE,  MOVE, MOVE,  MOVE, MOVE, MOVE, MOVE,  MOVE, MOVE], newName, 
            {memory: {role: 'spwan'}});        
    }
    
        
    var spwanWorks = _.filter(Game.creeps, (creep) => creep.memory.role == 'spwanWork');
    if(spwanWorks.length < 1 ) {
        var newName = 'sp' + Game.time;
        Game.spawns['DAI'].spawnCreep([ CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,  MOVE, MOVE,  MOVE, MOVE], newName, 
            {memory: {role: 'spwanWork'}});        
    }
    
    var mineralCarrys = _.filter(Game.creeps, (creep) => creep.memory.role == 'mineralCarry');
    if(mineralCarrys.length < 1  ) {
        var newName = 'mc' + Game.time;
        Game.spawns['John'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,  MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,  MOVE, MOVE], newName, 
            {memory: {role: 'mineralCarry'}});        
    }
    
    // var harCarrys = _.filter(Game.creeps, (creep) => creep.memory.role == 'harCarry');
    // if(harCarrys.length < 1) {
    //     var newName = 'c' + Game.time;
    //     Game.spawns['DAI'].spawnCreep([WORK, CARRY,CARRY,CARRY,CARRY, CARRY,CARRY,CARRY, CARRY, CARRY,  CARRY,  CARRY, MOVE, MOVE, MOVE, MOVE], newName, 
    //         {memory: {role: 'harCarry'}});        
    // }
    
  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    if(harvesters.length < haves) {
      // 定义一个名称 这个名称是由 Harvester 和 游戏时间拼接起来
      // 定义生产的爬虫不能重复
        var newName = 'hs' + Game.time;
      // 输出新爬虫的名称
      // 创建爬虫
        Game.spawns['DAI'].spawnCreep([WORK, WORK,WORK,WORK,WORK, WORK,WORK,CARRY,CARRY, CARRY,CARRY, MOVE,  MOVE, MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }
    
    // var minerals = _.filter(Game.creeps, (creep) => creep.memory.role == 'mineral');
    // if(minerals.length < 1) {
    //     var sources = Game.getObjectById('5bbcb737d867df5e54207e08');
    //     // console.log('Spawning upgraderss  number : ' + sources);
    //     if(sources.mineralAmount > 0){
    //         var newName = 'm' + Game.time;
    //         Game.spawns['DAI'].spawnCreep([WORK, WORK,WORK,WORK,WORK, WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,  MOVE, MOVE], newName, 
    //             {memory: {role: 'mineral'}}); 
    //     }
    // }
    
    
    // var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    // if(builders.length < 7 ){
    //     var newName = 'b' + Game.time;
    //     Game.spawns['John'].spawnCreep( [WORK, WORK,WORK,WORK,WORK, WORK,WORK,WORK,MOVE,MOVE, CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE], newName, 
    //         { memory: { role: 'builder' } } );
    // }
    
    
    var harvesterss = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesters');
    if(harvesterss.length <= 1) {
        if(harvesterss.length < 1){
            var newName = 'h' + Game.time;
            Game.spawns['DAI'].spawnCreep([WORK, WORK,WORK,WORK,WORK,WORK, CARRY,CARRY, CARRY,CARRY,  MOVE,MOVE,  MOVE, MOVE], newName, 
                {memory: {role: 'harvesters'}});
        // }
        }else if(harvesterss.length == 1 &&  harvesterss[0].ticksToLive < 100){
            var newName = 'h' + Game.time;
            Game.spawns['DAI'].spawnCreep([WORK, WORK,WORK,WORK,WORK,WORK, CARRY,CARRY, CARRY,CARRY,  MOVE,MOVE,  MOVE, MOVE], newName, 
                {memory: {role: 'harvesters'}});  
        }
    }
    

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    if(upgraders.length < 1){
        if(upgraders.length < 1){
            var newName = 'up' + Game.time;
            Game.spawns['DAI'].spawnCreep([WORK, WORK,WORK,WORK,WORK,WORK,WORK,WORK, WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE, MOVE,CARRY,CARRY,CARRY, MOVE], newName,
                { memory: { role: 'upgrader' } });
        }
        // }else if(upgraders.length == 1  &&  upgraders[0].ticksToLive < 200){
        //     var newName = 'up' + Game.time;
        //     Game.spawns['DAI'].spawnCreep([WORK, WORK,WORK,WORK,WORK,WORK, WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE, MOVE,CARRY,CARRY,CARRY, MOVE], newName,
        //         { memory: { role: 'upgrader' } });
        // } 
    }
    
    
    
    var upgraderLinks = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgraderLink');
    if(upgraderLinks.length < 2 ){
        var newName = 'ul' + Game.time;
            Game.spawns['John'].spawnCreep([ WORK,WORK,WORK,WORK,WORK,WORK,WORK, WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK, WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE, MOVE,MOVE, MOVE,MOVE,MOVE,MOVE, MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], newName,
            { memory: { role: 'upgraderLink' } });
    } else if(upgraderLinks.length == 5 &&  upgraderLinks[0].ticksToLive < 150){
      var newName = 'ul' + Game.time;
            Game.spawns['John'].spawnCreep([ WORK,WORK,WORK,WORK,WORK,WORK,WORK, WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK, WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE, MOVE,MOVE,MOVE, MOVE,MOVE,MOVE, MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], newName,
            { memory: { role: 'upgraderLink' } });
    } 

    
  // 如果虫巢1 正在孵化
    if(Game.spawns['DAI'].spawning) {
      // Game.creeps[Game.spawns['Spawn1'].spawning.name] 获取正在孵化爬虫的名称
      // 然后用名字获取爬虫
        var spawningCreep = Game.creeps[Game.spawns['DAI'].spawning.name];
      // 在名字为 Spawn1 的虫巢所在的房间显示文本
      // room.visual.text() 函数的参数分别为 文本内容 ，x坐标 ，y坐标 ， 输出文本格式
        Game.spawns['DAI'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['DAI'].pos.x + 1, 
            Game.spawns['DAI'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
    
    if(Game.spawns['John'].spawning) {
      // Game.creeps[Game.spawns['Spawn1'].spawning.name] 获取正在孵化爬虫的名称
      // 然后用名字获取爬虫
        var spawningCreep = Game.creeps[Game.spawns['John'].spawning.name];
      // 在名字为 Spawn1 的虫巢所在的房间显示文本
      // room.visual.text() 函数的参数分别为 文本内容 ，x坐标 ，y坐标 ， 输出文本格式
        Game.spawns['John'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['John'].pos.x + 1, 
            Game.spawns['John'].pos.y, 
            {align: 'left', opacity: 0.8});
    }


    var tower = Game.getObjectById('5f948366d05ff62861f9163d');
    if(tower) {
      //定义一个变量用于接收受损的建筑对象
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
          // 寻在范围内建筑，过滤条件血量抵御最大血量
            filter: (structure) =>   structure.hitsMax -structure.hits > 1000
        });
        if(closestDamagedStructure) {
            //修复受损的对象
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    
    // var tower1 = Game.getObjectById('5f9065f4d372eebb9ad66c68');
    // if(tower1) {
    //     var closestHostile = tower1.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //     if(closestHostile) {
    //         tower1.attack(closestHostile);
    //     }
    // }


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'harvesters') {
            roleHarvesters.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep,0);
        }
        if(creep.memory.role == 'upgraders') {
            roleUpgraders.run(creep);
        }
        if(creep.memory.role == 'otherHar') {
            roleOtherHar.run(creep);
        }
        if(creep.memory.role == 'spwan') {
            roleSpwan.run(creep);
        }
        if(creep.memory.role == 'harCarry') {
            roleHarCarry.run(creep);
        }
        if(creep.memory.role == 'upgraderLink') {
            roleUpgraderLink.run(creep,1);
        }
        if(creep.memory.role == 'powerBank') {
            rolePowerBank.run(creep);
        }
        if(creep.memory.role == 'powerHeal') {
            rolePowerHeal.run(creep);
        }
        if(creep.memory.role == 'mineral') {
            roleMineral.run(creep);
        }// roleMineralCarry rolePowerRangedBank  roleSpwanWork
        if(creep.memory.role == 'mineralCarry') {
            roleMineralCarry.run(creep,1);
        }
        if(creep.memory.role == 'powerRangedBank') {
            rolePowerRangedBank.run(creep);
        }
        if(creep.memory.role == 'spwanWork') {
            roleSpwanWork.run(creep);
        }
        
    }

    
    // 循环获取游戏内爬虫的名称
    for(var name in Memory.creeps) {
        //console.log("    。。。。。。 "  + Game.creeps[name].id);
      // 如果爬虫不存在 ，在内存中清除
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
}