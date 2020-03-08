// Temp
function tempo() {
	var tempo = Number(document.getElementById('pendel').value); // считывание с ползунка
	switch (tempo) {
		case 1:
			bpm = 40;
			console.log('bpm '+bpm);
			frequenz = 600 / bpm * 100;
			bedeutung = 'Grave';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 2:
			bpm = 44;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Largo';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 3:
			bpm = 46;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Largamente';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 4:
			bpm = 48;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Adagio';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 5:
			bpm = 50;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Lento';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 6:
			bpm = 52;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Lentamente';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 7:
			bpm = 54;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Larghetto';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 8:
			bpm = 56;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Andante assai';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 9:
			bpm = 58;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Andante';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 10:
			bpm = 60;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Andante maestoso';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 11:
			bpm = 63;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Comodo';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 12:
			bpm = 66;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Andante non troppo';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 13:
			bpm = 69;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Andante con moto';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 14:
			bpm = 72;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Andantino';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 15:
			bpm = 76;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Moderato assai';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 16:
			bpm = 80;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Moderato';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 17:
			bpm = 84;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Con moto';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 18:
			bpm = 88;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Allegretto moderato';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 19:
			bpm = 92;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Allegretto';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 20:
			bpm = 96;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Allegretto mosso';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 21:
			bpm = 100;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Animato';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 22:
			bpm = 104;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Animato assai';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 23:
			bpm = 108;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Allegro moderato';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 24:
			bpm = 112;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Tempo di marcia';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 25:
			bpm = 116;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Allegro non troppo';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 26:
			bpm = 120;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Allegro';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 27:
			bpm = 138;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Allegro molto';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 28:
			bpm = 144;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Allegro assai';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 29:
			bpm = 152;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Allegro animato';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 30:
			bpm = 160;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Allegro vivace';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 31:
			bpm = 168;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Vivace';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 32:
			bpm = 184;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Presto';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
		case 33:
			bpm = 192;
			frequenz = 600 / bpm * 100;
			bedeutung = 'Prestissimo';
			document.getElementById('bedeutung').innerHTML = bedeutung;
			document.getElementById('bpm').innerHTML = bpm+" bpm";
			break;
	}
}