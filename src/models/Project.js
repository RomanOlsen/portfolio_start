export class Project {
  /**
   * @typedef ProjectData

   * @property {string} name
   * @property {string} description
   * @property {string} image
   * @property {string} link
   * @property {string[]} tags
   * @property {string} [icon]
   * @property {string} [date]
   * @property {string} [github]
   * 
   * @param {ProjectData} data
   */
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.link = data.link;
    this.tags = data.tags || [];
    this.icon = data.icon,
      this.date = new Date(data.date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      });
    this.github = data.github;
  }
}