import Model from "./Model";

export default class AntennaRAN extends Model {
  constructor(props) {
    super(props);
    this.baseType = props.baseType;
    this.name = props.name;
  }

  get mountHeight() {
    return this.getCharacteristic('mountHeight');
  }

  get tiltAngle() {
    return this.getCharacteristic('tiltAngle');
  }

  get rotation() {
    return this.getCharacteristic('azimuth');
  }

}
