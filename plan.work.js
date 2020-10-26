var planWork = {
    
    readWork: function(creep){
        const storage = this.getContainer(creep,'storage');
        const terminal = this.getContainer(creep,'terminal');
        
        const plant3 = Memory.plant3;
        const scheduing = plant3.scheduing;
        const task = plant3.task;
        const schedule = plant3.schedule;
        const number = plant3.number;
        const lastNumber = plant3.lastNumber;
        // const plan = schedule.filter(plan => plan.status == 1);
        
        
        // 生产的东西小于预设的值
        if((storage.store.getUsedCapacity(scheduing) - plant3.lastNumber) < number){
            return 0;
        }else{
            // 去开启新的任务
            const plans = schedule.filter(plan => plan.status == 0);
            if(plans.leangth>0){

            }
        }
        
        
        
        
        
        
        
        
        
    },
    
    getContainer: function(creep,containerName){
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == containerName
                );
            }
        });
        return targets[0];
    },
    
};

module.exports = planWork;