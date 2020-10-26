var tranferMarket = {

    run: function() {
        
        
    //   Memory.plant3.lastNumber = 0;
        // const plant3 = Memory.plant3;
        // const schedule = plant3.schedule;
        // const plan = schedule.filter(plan => plan.status == 1);
        // console.log(JSON.stringify(plan));
        // const list = Memory.plant3.schedule;
        // const scheduing = Memory.plant3.scheduing ;
        // list.forEach(plan => {
        //     console.log(JSON.stringify(plan));
        //     if(scheduing == plan.fourth){
        //         plan.status = 1;
        //     }
        // });
        var times = Game.time % 10;
        if(times == 0){
//             Game.memory.plant3 = {"scheduing":"","schedule":[{"first":"UH","fourth":"XUH2O","second":"OH","status":0,"third":"UH2O"},{"first":"UO","fourth":"XUHO2","second":"OH","status":0,"third":"UHO2"},{"first":"KH","fourth":"XKH2O","second":"OH","status":0,"third":"KH2O"},{"first":"KO","fourth":"XKHO2","second":"OH","status":0,"third":"KHO2"},{"first":"LH","fourth":"XLH2O","second":"OH","status":0,"third":"UH2O"},{"first":"LO","fourth":"XLHO2","second":"OH","status":0,"third":"LHO2"},{"first":"ZH","fourth":"XZH2O","second":"OH","status":0,"third":"ZH2O"},{"first":"ZO","fourth":"XZHO2","second":"OH","status":0,"third":"ZHO2"},{"first":"GH","fourth":"XGH2O","second":"OH","status":0,"third":"GH2O"},{"first":"GO","fourth":"XGHO2","second":"OH","status":0,"third":"GHO2"}]}
// ;
            // var plant3 = Memory.plant3.schedule;
            // plant3.push(plan);
            // console.log(JSON.stringify(Memory.plant3)); 
           
            // console.log(JSON.stringify(Game.pmemory));
            // var test = Game.market.createOrder({
            //         type: ORDER_BUY,
            //         resourceType: RESOURCE_OXYGEN,
            //         price: 0.35,
            //         totalAmount: 46000,
            //         roomName: "E59N29"   
            //     });
            // console.log(JSON.stringify(test));          
             
            // var result = Game.market.cancelOrder('5f942d04beecc7720a382a22');
            // console.log(JSON.stringify(result));
            
            
            // var result = Game.market.extendOrder('5f94d9dabeecc78d0f6f1ebb', 1000000);
            // console.log(JSON.stringify(result));

            
            // var test = Game.market.createOrder({
            //     type: ORDER_SELL,
            //     resourceType: RESOURCE_GHODIUM,
            //     price: 6000000,
            //     totalAmount: 1,
            //     roomName: "E59N29"   
            // });
            // console.log(JSON.stringify(test));
            //5f69b169374a3e475aaa158b
            
            //  var result  = Game.market.deal('5f88c1ff6906544e82767aa7', 20000, "E59N29");
            // console.log(JSON.stringify(result));

            // const order = Game.market.getOrderById('5f927752beecc788a5abed29');
            // console.log(JSON.stringify(order));
            
            // var termainal = Game.getObjectById('5f8c5034afc1632b475bb4dc');
            // var storages = Game.getObjectById('5f845890c20c940aef3c385f');
            // if(termainal.store.getUsedCapacity(RESOURCE_ENERGY) < 40000 && storages.store.getUsedCapacity(RESOURCE_ENERGY) < 5000000){
            //     const order = Game.market.getOrderById('5f927752beecc788a5abed29');
            //     if(order.remainingAmount == 0){
            //         var result = Game.market.extendOrder('5f927752beecc788a5abed29', 100000);
            //     }
            // }
            
            // if(storages.store.getUsedCapacity(RESOURCE_ENERGY) < 100000){
            //     var orderList = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_ENERGY});
            //     var test = Game.market.createOrder({
            //         type: ORDER_BUY,
            //         resourceType: RESOURCE_ENERGY,
            //         price: 0.355,
            //         totalAmount: 100000,
            //         roomName: "E59N29"   
            //     });
            //     console.log(JSON.stringify(test));
            // }
            

            // var orderListZK = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_ENERGY});
            // orderListZK.forEach(order=>{
            //     if(order.price >= 0.4){
            //         var result  = Game.market.deal(order.id, 100000, "E59N29");
            //     }
            // })
            
        //     var orderListUL = Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_UTRIUM_LEMERGITE});
        //     orderListUL.forEach(order=>{
        //         if(order.price <= 0.6){
        //             var result  = Game.market.deal(order.id, 3000, "E59N29");
        //         }
        //     })
        //     var orderListGO = Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_GHODIUM_OXIDE});
        //     orderListGO.forEach(order=>{
        //         if(order.price <= 0.6){
        //             var result  = Game.market.deal(order.id, 3000, "E59N29");
        //         }
        //     })
        //     var orderListH = Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_HYDROGEN});
        //     orderListGO.forEach(order=>{
        //         if(order.price <= 0.45){
        //             var result  = Game.market.deal(order.id, 3000, "E59N29");
        //         }
        //     })
        //     var orderListGH = Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_GHODIUM_HYDRIDE});
        //     orderListGH.forEach(order=>{
        //         if(order.price <= 1.1){
        //             var result  = Game.market.deal(order.id, 3000, "E59N29");
        //         }
        //     })
            
        //     var orderListUO = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_UTRIUM_OXIDE});
        //     orderListUO.forEach(order=>{
        //         if(order.price >= 2){
        //             var result  = Game.market.deal(order.id, 1000, "E59N29");
        //         }
        //     }) 
            
        //     var orderListOH = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_HYDROXIDE});
        //     orderListOH.forEach(order=>{
        //         if(order.price >= 1.7){
        //             var result  = Game.market.deal(order.id, 1000, "E59N29");
        //         }
        //     }) 
            
        //     var orderList = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_GHODIUM});
        //     orderList.forEach(order=>{
        //         if(order.price >= 5){
        //             var result  = Game.market.deal(order.id, 300, "E59N29");
        //         }
        //     }) 
            
        // }
        
        
        // E2S23  baseChemical  E21S28
        
        // const costs = Game.market.calcTransactionCost(10000, 'E59N29', 'E31N45');
        // console.log(costs);
        
                
        // var orderList = Game.market.getAllOrders({roomName: 'E60N30'});
        // console.log(JSON.stringify(orderList));
        
        // var orderList = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_ENERGY});
        // this.list.sort((a, b) => { return b-a })[0].id  

        // vat max  = orderList.sort()[0].price;
        // var list = [];
        // orderList.forEach(order => {
        //     //  console.log(JSON.stringify(order));
        //     const costs = Game.market.calcTransactionCost(10000, 'E59N29', order.roomName);
        //     // console.log(costs);
        //     if(costs <=  8000 ){
        //         console.log(costs);
        //         list.push(order);
        //         console.log(JSON.stringify(order));
        //     }
        // })
        // console.log(JSON.stringify(orderList));
        // console.log(JSON.stringify(max));
        
        
        // const order = Game.market.getOrderById('5f71f2608e1216343bbc7f85');
        // console.log(JSON.stringify(order));
  
        
        // var test =  Game.market.outgoingTransactions;
        // console.log(JSON.stringify(test));
        
        // var test = Game.market.createOrder({
        //     type: ORDER_SELL,
        //     resourceType: CPU_UNLOCK,
        //     price: 1400000,
        //     totalAmount: 1,
        //     roomName: "E59N29"   
        // });
        // console.log(JSON.stringify(test));
        
        // 5f8d131d69065417abe01096

        }
	}
	

	
	
};

module.exports = tranferMarket;