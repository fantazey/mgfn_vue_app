import AMC from './AMC';
import AntennaRAN from "./AntennaRAN";
import BaseStation from "./BaseStation";
import Site from "./Site";

export default class ModelManager {
  constructor() {
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

  push(item) {
    if (!Object.hasOwnProperty.call(item,'type')) {
      throw new Error('Incorrect payload');
    }
    const type = item.type;
    if (!Object.hasOwnProperty.call(this.typeToModelMap, type)) {
      throw new Error('Unsupported type');
    }
    const obj = new this.typeToModelMap[type](item);
    if (!Object.hasOwnProperty.call(this.modelsByType, type)) {
      this.modelsByType[type] = [];
    }
    this.modelsByType[type].push(obj);
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
