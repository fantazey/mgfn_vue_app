import Model from './Model';

export default class Site extends Model {
  constructor(props) {
    super(props);
    this.baseType = props.baseType;
    this.name = props.name;
  }

  get address() {
    return this.getCharacteristic('siteAddress');
  }

  get number() {
    return this.getCharacteristic('siteNumber');
  }

  get latitude() {
    return this.getCharacteristic('latitude');
  }

  get longitude() {
    return this.getCharacteristic('longitude');
  }
}
