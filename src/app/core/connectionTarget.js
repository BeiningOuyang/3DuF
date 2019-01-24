export default class ConnectionTarget{
    constructor(componentID, portLabel){
        this.__componentID = componentID;
        this.__portLabel = portLabel;
    }

    get portLabel() {
        return this.__portLabel;
    }
    get componentID() {
        return this.__componentID;
    }

    toJSON(){
        return {"component": this.__componentID, "port": this.__portLabel};
    }
}