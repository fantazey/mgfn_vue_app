const listOfColors = [
  '#11DF71',
  '#FFB932',
  '#BAB9FF',
  '#8186FF',
  '#CBFFB9',
  '#FF8C8C',
  '#9FD3D7'
];

export default class ColorGenerator {
  constructor() {
    this.availableColors = [...listOfColors];
  }

  pickColor() {
    if (this.availableColors.length === 0) {
      throw new Error('Improve palette');
    }
    const index = Math.floor((Math.random() * 100) % this.availableColors.length);
    let colors = this.availableColors.splice(index, 1);
    return colors[0];
  }
}
