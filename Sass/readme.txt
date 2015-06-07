/*!
 * SASS 
 */


//== Putty
//
// Start
// --------------------------------------------------
	Pour utiliser sass naviguez avec putty dans votre projet, allez jusqu'au dossier contenant le scss.scss.

// Développement
// --------------------------------------------------
	Quand on est en phase de développement
		sass watch --style expanded scss.scss : scss.css
		(Utiliser le watch pour que le fichier scss.css soit généré des que l'un des fichier .scss est modifié)

// Compact
// --------------------------------------------------
	Pour sortir un version compact
		sass --style compact scss.scss : scss-compact.css

// Compressé
// --------------------------------------------------
	Pour sortir un version compressé
		sass --style compressed scss.scss : scss-compressed.css

// Pour sortir dans le projet
// --------------------------------------------------
	Pour sortir un version compressé
		sass --style compressed scss.scss : ../style/main.css
		sass watch --style expanded scss.scss : ../style/main.css
		(watch peut être utilisé pour ne pas tapper la ligne de commande tous le temps)


//== Site
//
// Fonctionnement
	Tous le style modifiable du site se trouve dans le dossier theme, ils sont volotairement séparé en plusieur sytles.scss.s
	Et toutes rangé dans le dossier theme.



//== Responsive
//
// Style
// --------------------------------------------------
	Il n'y a pas de feuille responsive.scss, les media-queries sont directement dans les feuilles scss qui les consernes.

// Mixin
// -------------------------
	Une mixin est utilié pour les media-queries (scss/mixins/_responsive.scss), avec des variable en parallèle (scss/_variable.scss)

// Exemple
// -------------------------
	#content {
		display: block;
		width: 50%;
		margin: 0;
		@include responsive(screen-lg) {
			width: 70%;
		}
		@include responsive(screen-md) {
			width: 80%;
		}
		@include responsive(screen-sm) {
			width: 90%;
		}
		@include responsive(screen-xs) {
			width: 100%;
		}
	}