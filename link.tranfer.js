var linkTranfer = {

    run: function() {
        const linkFrom = Game.getObjectById('5f94db09e2ad7a0440be60d9');
        const linkTo = Game.getObjectById('5f951a5b4d72c0d9e81fee1f');
        
        linkFrom.transferEnergy(linkTo,600);
	}
};

module.exports = linkTranfer;