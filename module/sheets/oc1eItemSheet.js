export default class oc1eItemSheet extends Itemsheet {
    
    get template() {
        return `systems/oc1e/templates/sheets/${this.item.data.type}-sheet.html`;
    }


getData() {
    const data = super.getData()

    data.config = CONFIG.oc1e;

    return data;
}}