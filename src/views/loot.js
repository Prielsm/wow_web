const lootView = `
<header>
      <div
        class="header-img"
        style="background-image: url(images/citadelle_couronne_glace.jpg)"
      ></div>
      <nav class="flex justify-between">
        <div class="flex">
        <select id="type-select">
            <option value="boss">Trier par : Boss</option>
            <option value="butin">Trier par : Butin</option>
        </select>
        </div>
        <div class="donjon-name uppercase">Citadelle de la couronne de glace</div>
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
    <main class="flex">
      <!-- MENU GAUCHE -->
      <section class="menu-left"></section>
      <!-- CONTAINER MIDDLE -->
      <section class="container-middle" style="background-image: url(images/citadelle_couronne_glace2.png)">
        <!-- div flex avec la video et les petites cartes -->
        <div class="flex flex-wrap">
          <iframe
            class="video"
            width="440"
            height="255"
            src="https://www.youtube.com/embed/TBxqYBYSrUw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <!-- Cartes localisation et butins -->
          <div>
            <div class="flex localisation">
              <img
                class="img-loc"
                src="images/map_977539.jpg"
                alt=""
              />
              <label for="">
                <h3>Localisation</h3>
                <span>Pandarie</span><br />
                <span>>Voir la carte&#60;</span>
              </label>
            </div>
            <div class="flex butins">
              <img class="img-but" src="images/butins.jpg" alt="" />
              <label for="">
                <h3>Butins</h3>
                <span><strong>1</strong> monture</span><br />
                <span><strong>2</strong> mascottes</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Section boss / loot -->
        <h2>La garde de pierre</h2>
        <div class="flex flex-wrap">
          <div class="mount" style="background-image: url(images/serpent-nuage-astral.png);">
            <h3>Serpent nuage astral</h3>
            <div class="modal-loot"><img class="checked" src="svg/checked.svg"</img></div>

          </div>
          <div class="mount" style="background-image: url(images/serpent-nuage-astral.png);">
            <h3>Serpent nuage astral</h3>
            <div class="modal-loot"><img class="checked" src="svg/checked.svg"</img></div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="pet" style="background-image: url(images/phenix-royal.png);">
            <h3>Phénix royal</h3>
            <div class="modal-loot"><img class="checked" src="svg/checked.svg"</img></div>
          </div>
          <div class="pet" style="background-image: url(images/jeune-sabre-fantomatique.png);">
            <h3>Jeune sabre fantomatique</h3>
            <div class="modal-loot"><img class="checked" src="svg/checked.svg"</img></div>
          </div>          
          <div class="pet" style="background-image: url(images/chien-fantomatique.png);">
            <h3>Chien fantomatique</h3>
            <div class="modal-loot"><img class="checked" src="svg/checked.svg"</img></div>
          </div>          
        </div>
        <div class="flex flex-wrap">
          <div class="item" style="background-image: url(images/couronne_de_malheur2.jpg);">
            <h3>Couronne de malheur</h3>
          </div>
          <div class="item" style="background-image: url(images/spallieres_voyageur_eternel.jpg);">
            <h3>Spallières du voyageur éternel</h3>
          </div>          
          <div class="item" style="background-image: url(images/garde_verite.jpg);">
            <h3>Garde-Vérité</h3>
          </div>          
        </div>
      </section>
      <!-- MENU DROITE -->
      <section class="menu-right"></section>      
    </main>

    <footer>
      <a href="#" class="retour-donjons">> Retour à la page des donjons &#60;</a>
    </footer>

    <section class="modal d-none">
      <div class="inter-modal">
        <h2>Welcome back!</h2>
        <p class="dark-p">Sign in to your account</p>
        <p class="flex email">
          <span>Email</span>
          <input type="text">
        </p>
        <p class="flex password">
          <span>Password</span>
          <input type="text">
        </p>
        <button>Continue</button>
        <p><span class="dark-p">Don't have an account ? </span><span>Sign up</span></p>
        <img class="close" src="svg/close.svg" alt="">
      </div>
    </section>
`;

export function applyLootView() {
  document.body.innerHTML = lootView;
  document.body.className = 'body-loot';
}
