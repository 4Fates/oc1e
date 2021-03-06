export default class oc1eItemSheet extends Itemsheet {
    
    get template() {
        return `systems/oc1e/templates/sheets/${this.item.data.type}-sheet.html`;
    }


getData() {
    const baseData = super.getData();
    let sheetData ={
        owner: this.item.isOwner,
        editable: this.isEditable,
        item: baseData.item,
        data: baseData.item.data.data,
        config: CONFIG.oc1e
    };

    return sheetData;
}
}