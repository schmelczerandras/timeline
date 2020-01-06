import { TimelineElement } from '../../../model/portfolio';
import { html } from '../../../model/misc';

import './timeline-element.scss';

export const generate = (
  { date, title, figure, description, more, link }: TimelineElement,
  showMore: string,
  showLess: string
): html => `
    <section class="timeline-element">
        <div class="line">
            <p class="date">${date}</p>
        </div>
        <div class="card">
            <h2>${title}</h2>
            ${figure.toHTML()}
            ${description.toHTML()}
            ${
              more
                ? `
                <div class="more"></div>
                <div class="buttons">
                    <a class="show-more">${showMore}</a>
                    <a class="show-less">${showLess}</a>
                </div>
                `
                : ''
            }
            ${link ? link.toHTML() : ''}
        </div>
    </section>
`;
