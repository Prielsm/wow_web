import '../styles.scss';

import '../styles/donjons.scss';
import '../styles/loot.scss';

import { applyDonjonsView } from './views/donjons';
import { applyLootView } from './views/loot';

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.retour-index')) {
    document.body.innerHTML = `<header>
    <div class="big_word one">World</div>
    <div class="small_word">of</div>
    <div class="big_word two">Warcraft</div>
  </header>  
  <main class="main-index">
    <div><img class="donjons-view" src="images/citadelle_couronne_glace.jpg" alt=""></div>
  </main>
  `;
    document.body.className = 'body-index';
  }

  if (e.target.matches('.donjons-view')) {
    console.log('c est encore moi');
    applyDonjonsView();
  }

  if (e.target.matches('.donjon')) {
    applyLootView();
  }
});
