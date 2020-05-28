import Model from "./Model";

const GROUNDING_BUILDING = 'building';

export default class AMC extends Model {
  get constructionType() {
    return this.getCharacteristic('constructionType');
  }

  get grounding() {
    return this.getCharacteristic('groundingType');
  }

  get isOnBuilding() {
    return this.grounding.toLowerCase() === GROUNDING_BUILDING;
  }
}
