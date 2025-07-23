export class Project {
  /**
   * @typedef ProjectData

   * @property {string} name
   * @property {string} description
   * @property {string} image
   * @property {string} link
   * @property {string[]} tags
   * @property {string} [icon]
   *
   * @param {ProjectData} data
   */
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.link = data.link;
    this.tags = data.tags || [];
    this.icon = data.icon
  }
}