import Model from './Model';

const COVER_INDOOR = 'indoor';
const COVER_OUTDOOR = 'outdoor';

export default class BaseStation extends Model {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  /**
   * @return String
   */
  get cover() {
    return this.getCharacteristic('coverType').toLowerCase();
  }

  get isIndoor() {
    return this.cover === COVER_INDOOR;
  }

  get isOutdoor() {
    return this.cover === COVER_OUTDOOR;
  }

  /**
   * @return Array<String>
   */
  get cabinet() {
    return this.getCharacteristic('cabinet')
  }

}
