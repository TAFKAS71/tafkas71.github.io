(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"ebf01c24a8f480a5756ce0cedb874c02-7.html":"Il restauro del film \"FRANCESCO D'ASSISI\" di Liliana Cavani in anteprima all'Auditorium Parco della Musica.\n\nCinecittà Digital in collaborazione con i","archive-may-2001.html":"Archives for May 2001","archive-september-2011.html":"Archives for September 2011","archive-august-2016.html":"Archives for August 2016","c668622c6cd7f90e8e4c423e34166cd5-1.html":"Recuperate, con le nuove tecnologie digitali, alcune scene del meraviglioso film di Vittorio De Sica.\n\n\nGrazie alle sempre più sviluppate tecnologie d","d12a33ee6fa289631ee0c7397d7df27d-0.html":"Restaurata la sequenza del funerale con l'ausilio del primo sistema per gli effetti visivi in Italia.\n\n\nCon l’ausilio del sistema per gli effetti digi","c1897672d13f80c8a150264e1766fbf1-18.html":"\"PORTIERE DI NOTTE\" di Liliana Cavani al Festival del Cinema di Venezia 2018.\n\nDopo La notte di San Lorenzo, presentato domenica scorsa, tocca a Il po","archive-november-2007.html":"Archives for November 2007","archive-november-2010.html":"Archives for November 2010","8895030c0f7962f791466af2641da938-8.html":"\"IL SORPASSO\" e \"IL MATTATORE\"di Dino Risi sono stati restaurati con la collaborazione di SKY","archive-october-2004.html":"Archives for October 2004","archive-january-2020.html":"Archives for January 2020","82d223c6e52fd9e560a283867601a53c-3.html":"Restauro del film \"INFERNO di DANTE\".\n\nCinecittà Digital in collaborazione con Istituto Luce e Bayer ha terminato il restauro di una pellicola del 190","archive-april-2016.html":"Archives for April 2016","archive-june-2007.html":"Archives for June 2007","9dc1f329b55ab37a40a85f8aba0d129c-9.html":"La versione restaurata di \"AMICI MIEI\" di Mario Monicelli ottiene un grandissimo successo al Festival di Lione.\n\n\nDavanti ad oltre 400 persone, dopo 6","c9f26444a49e7843de08f2038cb5328a-5.html":"\"LA VIA DEL PETROLIO\", opera prima di Bernardo Bertolucci, alla Mostra di Venezia interamente restaurato in digitale.\n\nPer festeggiare la lunghissima ","2e7bb76e36eeeb0e00b574f142879404-16.html":"\"PROGETTO FELLINI 100\" il restauro di tutta l'opera del Maestro Fellini in 4k.\n\nLa retrospettiva dei film restaurati di Fellini nel 2020 viaggerà per ","archive-august-2005.html":"Archives for August 2005","archive-september-2006.html":"Archives for September 2006","3770cf4d885560eba2aa990d44bdcbf9-11.html":"\"TUTTI A CASA\" di Luigi Comencini alla 73a edizione del Festival del cinema di Venezia, restaurato in 4K in occasione del centenario del regista.\n\nIl ","archive-september-1996.html":"Archives for September 1996","e5c995a26edfff33b42a2cb4ed99c456-6.html":"\"MATRIMONIO ALL'ITALIANA\" di Vittorio De Sica è stato presentato alla 2a Edizione della Festa del Cinema di Roma, interamente restaurato in digitale.\n","732a1c3715017fb4eb34895f4e932eee-4.html":"\"ROMA CITTÀ APERTA\" di Roberto Rossellini è stato presentato alla Festa del Cinema di Roma interamente restaurato in digitale.\n\nIn occasione del cente","archive-september-2018.html":"Archives for September 2018","7164396e5950e66d1bd138d164b497c1-13.html":"\"STORIA D'AMORE\" di Francesco Maselli. Restaurato in 4K il film che è valso la Coppa Volpi ad una giovanissima Valeria Golino.\n\nIl restauro è stato re","d6536e682331b711ebf18afa4d912c0c-2.html":"\"CRONACA DI UN AMORE\" di Michelangelo Antonioni restaurato interamente in digitale.\n\nDopo un lungo periodo di trattative e di test di fattibilità, la ","archive-june-2008.html":"Archives for June 2008","e04c4630a8e753c09de214d17a9ce3dd-10.html":"\"TOTÒ 3D\" di Mario Mattoli è stato presentato alla 6a edizione della Festa del Cinema di Roma, interamente restaurato in digitale ed in 3D.\n\nLa Filmau"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();