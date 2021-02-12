const donjonsView = `
<header>
<div
  class="header-img"
  style="background-image: url(images/header_donjons.jpg)"
></div>
<nav class="flex justify-between">
  <div class="flex">
    <button class="flex btn-filter">
      <img src="svg/filter.svg" alt="" />
      <span class="filtrer">Filtrer</span>
    </button>    
    <div class="flex filters d-none">
      <!-- FILTRE ZONE -->
      <div>
        <p>Zones</p>
        <select id="zone-select">
          <option value="pandarie">Pandarie</option>
          <option value="kalimdor">Kalimdor</option>
          <option value="royaumeEst">Royaumes de l'Est</option>
          <option value="norfendre">Norfendre</option>
          <option value="outreterre">Outreterre</option>
          <option value="zandalar">Zandalar</option>
          <option value="kulTiras">Kul Tiras</option>
          <option value="ombreterre">Ombreterre</option>
        </select>
      </div>
      <!-- FILTRE TYPE -->
      <div>
        <p>Type</p>
        <select id="type-select">
          <option value="donjon">Donjon</option>
          <option value="raid">Raid</option>
        </select>
      </div>
      <!-- FILTRE BUTINS -->
      <div>
        <p>Butins</p>
        <select id="type-select">
          <option value="monture">Monture</option>
          <option value="pet">Pet</option>
        </select>
      </div>
      <img class="search-filter" src="svg/search_filter.svg" alt="">
    </div>
  </div>

  <div class="donjon-name uppercase">Donjons / Raids</div>

  <div class="flex connection">
    <span class="span-connection">Se connecter</span>
    <img
      src="svg/connection.svg"
      class="icon-connection"
      alt=""
    />
  </div>
</nav>
</header>

<main>
<div class="flex flex-wrap justify-around">
  <div
    id="1"
    class="donjon lg:w-1/6 md:w-1/4 w-1/2"
    style="
      background-image: url(images/citadelle_couronne_glace.jpg);
    "
  >
    <div class="modal-donjon">La couronne de glace</div>
  </div>
  <div
    id="2"
    class="donjon lg:w-1/6 md:w-1/4 w-1/2"
    style="background-image: url(images/descente-aile-noire.jpg)"
  >
    <div class="modal-donjon">Descente de l'aile noire</div>
  </div>
  <div
    id="3"
    class="donjon lg:w-1/6 md:w-1/4 w-1/2"
    style="background-image: url(images/caveaux_mogushan.jpg)"
  >
    <div class="modal-donjon">Caveaux de mogushan</div>
  </div>
  <div
    id="4"
    class="donjon lg:w-1/6 md:w-1/4 w-1/2"
    style="background-image: url(images/bastion_crepuscule.jpg)"
  >
    <div class="modal-donjon">Bastion crépuscule</div>
  </div>
  <div
    id="5"
    class="donjon lg:w-1/6 md:w-1/4 w-1/2"
    style="background-image: url(images/karazhan2.png)"
  >
    <div class="modal-donjon">Karazhan</div>
  </div>
  <div
    id="6"
    class="donjon lg:w-1/6 md:w-1/4 w-1/2"
    style="background-image: url(images/accueil.jpg)"
  >
    <div class="modal-donjon">La couronne de glace</div>
  </div>
  <div
    id="7"
    class="donjon lg:w-1/6 md:w-1/4 w-1/2"
    style="background-image: url(images/accueil.jpg)"
  >
    <div class="modal-donjon">La couronne de glace</div>
  </div>
  <div
    id="8"
    class="donjon lg:w-1/6 md:w-1/4 w-1/2"
    style="background-image: url(images/accueil.jpg)"
  >
    <div class="modal-donjon">La couronne de glace</div>
  </div>
</div>
</main>

<footer>
   <a href="#" class="retour-accueil">> Retour à l'accueil &#60;</a>
</footer>

<!-- MODAL CONNECTION -->
<section class="modal d-none">
<div class="inter-modal">
  <h2>Welcome back!</h2>
  <p class="dark-p">Sign in to your account</p>
  <p class="flex email">
    <span>Email</span>
    <input type="text" />
  </p>
  <p class="flex password">
    <span>Password</span>
    <input type="text" />
  </p>
  <button>Continue</button>
  <p>
    <span class="dark-p">Don't have an account ? </span
    ><span>Sign up</span>
  </p>
  <img class="close" src="svg/close.svg" alt="" />
</div>
</section>
`;
export function applyDonjonsView() {
  document.body.innerHTML = donjonsView;
  document.body.className = 'body-donjons';
}
