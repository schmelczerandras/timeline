import { Primitive } from '../primitive';
import { url } from '../../../model/misc';

export class Video implements Primitive {
  public constructor(
    private readonly poster: url,
    private readonly mp4: url,
    private readonly webm: url,
    private readonly options?: string
  ) {}
  public toHTML(disableInnerShadow = false): string {
    return `
        ${!disableInnerShadow ? `<div class="figure-container">` : ''}
          <video ${this.options} poster="${this.poster}">
              <source src="${this.webm}" type="video/webm"/>
              <source src="${this.mp4}" type="video/mp4"/>
          </video>
        ${!disableInnerShadow ? `</div>` : ''}
    `;
  }
}