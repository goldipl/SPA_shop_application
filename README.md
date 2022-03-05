# IT SPA

Projekt polega na napisaniu aplikacji Single Page Application dla ośrodka SPA dedykowanego programistom.

Aplikacja powinna umożliwiać: 

- Przeglądanie dostępnych zabiegów
- Dodawanie wybranych zabiegów do koszyka
- Wybór daty przyjazdu i wyjazdu oraz pokoju  
- Rejestrację użytkownika (opcjonalnie)
- Logowanie użytkownika (opcjonalnie)
- Podsumowanie składanego zamówienia

## Booking

Stwórz komponent koszyka, który wyświetla podsumowanie zamówienia.
Koszyk powinien też umożliwiać nanoszenie poprawek do zamówienia.
Użytkownik nie może wybrać daty przyjazdu wcześniejszej niż bieżąca.
Wybrana data wyjazdu nie może być dalsza niż rok od daty przyjazdu.

## Rejestracja

Stwórz komponent rejestracji użytkownika z opcjonalnym miernikiem siły hasła.
Rejestracja polega na zapisaniu danych użytkownika (e-mail i hasła) w pliku `database.json`.
Nie powinna być możliwa rejestracja użytkownika o identycznym adresie e-mail.

## Logowanie

Stwórz komponent logowania użytkownika, który opcjonalnie będzie wyświetlał avatar użytkownika.
Logowanie polega na porównaniu podanych przez użytkownika danych (e-mail i hasła) z tymi w pliku `database.json`.

## Pokoje

Bazę przykładowych pokoi w ośrodku IT SPA znajdziesz w pliku `database.json`.
Możesz dowolnie zmienić istniejące pokoje lub dodać swoje własne. 

## Zabiegi 

Bazę przykładowych zabiegów ośrodka IT SPA znajdziesz w pliku `database.json`.
Możesz dowolnie zmienić istniejące zabiegi lub dodać swoje własne. 

## Koszyk

Stwórz komponent koszyka, który po najechaniu myszką będzie wyświetlał dodane pokoje i zabiegi.
Koszyk musi przetrwać przeładowanie strony, dlatego spróbuj wykorzystać ciasteczka (Cookies).

## Technologie

- HTML, Bootstrap
- CSS, Sass, LESS
- JavaScript, jQuery
- Node, Express

Postaraj się korzystać z ECMAScript 6.

Do interakcji z serwerem bazy danych wykorzystaj `fetch`.
Jeśli lubisz eksperymenty, zainstaluj pakiet `axios`.

## Ocena

Zamieść gotowy projekt na swoim GitHubie.
Postaraj się oddać projekt do końca maja 2020.

## Przykłady

Strony, którymi możesz się inspirować: 

- afrodyta-spa.pl
- bukowypark.pl
- hotelczarnypotok.pl
- hotelniemcza.pl
