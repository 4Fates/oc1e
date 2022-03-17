export default class oc1eItemSheet extends Itemsheet {
    get template() {
        return `systems/oc1e/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}