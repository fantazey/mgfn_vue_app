import Model from "./Model";

/**
 * @class AntennaRAN
 * @extends Model
 * @property {bool} isAntenna_RAN
 */

export default class AntennaRAN extends Model {
  constructor(props) {
    super(props);
    this.baseType = props.baseType;
    this.name = props.name;
    this.color = null;
  }

  get mountHeight() {
    return this.getCharacteristic('mountHeight');
  }

  get tiltAngle() {
    const result = +this.getCharacteristic('tiltAngle');
    return result.toFixed(1)
  }

  get azimuth() {
    const result = +this.getCharacteristic('azimuth');
    return result.toFixed(1)
  }

  get supportedStandard() {
    //hard code. this data placed in svg, but not presented in site.json
    return ['2', '3'].includes(this.id) ? 'LTE' : '3G';
  }
}
