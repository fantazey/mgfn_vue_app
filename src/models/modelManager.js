import AMC from './AMC';
import AntennaRAN from "./AntennaRAN";
import BaseStation from "./BaseStation";
import Site from "./Site";
import ColorGenerator from "../utils/color-generator";

export default class ModelManager {
  constructor() {
    this.colorGenerator = new ColorGenerator();
    this.typeToModelMap = {
      'AMC': AMC,
      'Antenna_RAN': AntennaRAN,
      'BaseStation': BaseStation,
      'Site': Site
    };
    this.modelsByType = {};
  }

  get models() {
    return [].concat(...Object.keys(this.modelsByType).map(
      type => this.modelsByType[type])
    );
  }

  /**
   * @param {Object} item - props for new model record
   */
  push(item) {
    if (!Object.hasOwnProperty.call(item,'type')) {
      throw new Error('Incorrect payload');
    }
    const type = item.type;
    const obj = this.createRecord(type, item);

    if (!Object.hasOwnProperty.call(this.modelsByType, type)) {
      this.modelsByType[type] = [];
    }
    this.modelsByType[type].push(obj);
  }

  /**
   * Create AntennaRAN model record
   * Create instance and set color for it
   * @private
   * @param {Object} props
   * @returns {AntennaRAN}
   */
  createRecordAntenna_RAN(props) {
    const obj = new AntennaRAN(props);
    obj.color = this.colorGenerator.pickColor();
    return obj;
  }

  /**
   * Create model record by type
   * @private
   * @param {string} type
   * @param {Object} props
   * @return {Object}
   */
  createRecordByType(type, props) {

    return new this.typeToModelMap[type](props);
  }

  /**
   * Create model record
   * @private
   * @param {string} type
   * @param {Object} props
   * @returns {Object}
   */
  createRecord(type, props) {
    const createMethod = `createRecord${type}`;
    if (this[createMethod] !== undefined && typeof this[createMethod] === 'function') {
      return this[createMethod](props);
    }

    if (!Object.hasOwnProperty.call(this.typeToModelMap, type)) {
      throw new Error('Unsupported type');
    }

    return this.createRecordByType(type, props);
  }

  /**
   * Find all models by id
   * @param {String} type
   * @private
   * @returns {Array<Model>}
   */
  findAllByType(type) {
    return this.modelsByType[type];
  }

  get site() {
    return this.findAllByType('Site')[0];
  }

  get baseStation() {
    return this.findAllByType('BaseStation')[0];
  }

  get amc() {
    return this.findAllByType('AMC')[0];
  }

  get antennas() {
    return this.findAllByType('Antenna_RAN')
  }
}
