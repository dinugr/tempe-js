import _ from 'lodash'
import { Listing } from './modules';



async function component() {
  const element = document.createElement('div');

  var listingAngelBeats = new Listing({title: 'Angel Beats'});
  var listingFateAprocrypha = new Listing({title: 'Fate/Apocrypha'});

  await Promise.all([
    await listingAngelBeats.apiGet(),
    await listingFateAprocrypha.apiGet(),
  ]);

  element.innerHTML = `${listingAngelBeats.template()}${listingFateAprocrypha.template()}`;

  document.body.appendChild(element);
}

component();



