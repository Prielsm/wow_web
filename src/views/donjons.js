const donjonsView = `
<header>
      <img src="images/header_donjons.jpg" class="header-img" alt="">
      <nav>
        <div class="flex">
          <span>Zones</span>
          <img src="svg/more.svg" alt="">
        </div>
        <div class="flex">
          <span>Donjons / Raids</span>
          <img src="svg/more.svg" alt="">
        </div>
        <div class="flex">
          <span>Butins</span>
          <img src="svg/more.svg" alt="">
        </div>
        <img src="svg/search_donjons.svg" class="research" alt="">
      </nav>
    </header>

    <main >
      <a href="#" class="retour-index">Retour à la page d'accueil</a>
      
      <div class="flex flex-wrap justify-around">
      <div id="1" class="donjon lg:w-1/6 md:w-1/4 w-1/2" style="background-image: url(images/accueil.jpg);">
        <div class="modal-donjon">La couronne de glace</div>
      </div>
      <div id="2" class="donjon lg:w-1/6 md:w-1/4 w-1/2" style="background-image: url(images/accueil.jpg);">
        <div class="modal-donjon">La couronne de glace</div>
      </div>
      <div id="3" class="donjon lg:w-1/6 md:w-1/4 w-1/2" style="background-image: url(images/accueil.jpg);">
        <div class="modal-donjon">La couronne de glace</div>
      </div>
      <div id="4" class="donjon lg:w-1/6 md:w-1/4 w-1/2" style="background-image: url(images/accueil.jpg);">
        <div class="modal-donjon">La couronne de glace</div>
      </div>
      <div id="5" class="donjon lg:w-1/6 md:w-1/4 w-1/2" style="background-image: url(images/accueil.jpg);">
        <div class="modal-donjon">La couronne de glace</div>
      </div>
      <div id="6" class="donjon lg:w-1/6 md:w-1/4 w-1/2" style="background-image: url(images/accueil.jpg);">
        <div class="modal-donjon">La couronne de glace</div>
      </div>
      <div id="7" class="donjon lg:w-1/6 md:w-1/4 w-1/2" style="background-image: url(images/accueil.jpg);">
        <div class="modal-donjon">La couronne de glace</div>
      </div>
      <div id="8" class="donjon lg:w-1/6 md:w-1/4 w-1/2" style="background-image: url(images/accueil.jpg);">
        <div class="modal-donjon">La couronne de glace</div>
      </div>
      </div>

    </main>
`;
export function applyDonjonsView() {
  document.body.innerHTML = donjonsView;
  document.body.className = 'body-donjons';
}
