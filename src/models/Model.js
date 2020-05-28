/**
 * @typedef {Object} ResourceCharacteristic
 * @property {String} name
 * @property {String} value
 */

/**
 * @typedef {Object} ResourceRelationship
 * @property {String} id - related model id
 * @property {String} relationshipType
 */

/**
 * Base model class
 * @class Model
 */
class Model {
  constructor(params) {
    this.id = params.id;
    this.type = params.type;
    this.description = params.description;
    /** @type Array<ResourceCharacteristic> */
    this.resourceCharacteristic = params.resourceCharacteristic;
    /** @type Array<ResourceRelationship> */
    this.resourceRelationship = params.resourceRelationship;
  }

  getCharacteristic(name) {
    const result = this.resourceCharacteristic.find( x => x.name === name );
    return result.value;
  }
}

export default Model;
