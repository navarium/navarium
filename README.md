# Nvarium website projekt

> Hazsnált technológiák: Gridsome(Vue) + TailwindCSS + Markdown

## Telepítés

### Előfeltétel:
- Node 14-es verzió (weboldalrol letölthető a telepítő)
- Yarn - node telepítése után a következő paranccsal telepíthető: `npm install -g yarn`

### Project dependenciák telepítése:
`yarn install`


## Futtatás local környezetben
Minden parancsot a terminalban kell kiadni a projekt könyvtárában (navarium-web)

`yarn develop`

Ezután a http://localhost:8080 url-el érhető el az oldal.


## Deployolás a Github Pages-re
`yarn deploy`
1. lépésben a forráskódból lebuildeli a kirakható csomagot a `./dist` könyvtárba
2. lépésben feltölti a GitHub-ra, a [`gh-pages`](https://github.com/navarium/navarium-web/tree/gh-pages) branch-re, innen fogja a weboldal elérni a resourceokat.


## Forráskód beküldése GitHub-ra
### Terminal használatával
```bash
git pull # vagy explicit: git pull origin main
git add .
git commit -am "COMMIT MESSAGE"
git push # vagy explicit: git push origin main
```
1. sorral letöltöd a GitHub repoból a friss kódot (ha volt).
  Kicsit kifejtbe, minden reponak van neve, a default az `origin` ami jelen esetbe a https://github.com/navarium/navarium-web -re mutat. A `main` pedig az a branch amire beküldöd a kódot.
2. sorral az összes módosított fájlt megjelölöd beküldésre
3. sorral létrehozol egy verziópontot
4. sorral pedig beküldöd a GitHub repo-ba

### VSCode használatával

1. *Source Control* tab kiválasztása
![source control](https://res.cloudinary.com/dvjmebbte/image/upload/v1677918083/develop/SCR-20230304-czj_jvd51n.png)

2. Pull - megegyezik a `git pull` paranccsal
  - vagy a Sync gombbal ha nem változtattál még semmit
  ![Sync](https://res.cloudinary.com/dvjmebbte/image/upload/v1677962687/develop/SCR-20230304-u6r_j4rhcz.png)
  - vagy alul *Commits* lenyíló panelen a `↓` gombbal
  ![pull-button](https://res.cloudinary.com/dvjmebbte/image/upload/v1677962980/develop/SCR-20230304-uav_satcgo.png)
  - vagy a *Source Control* panelen a `…` menüben a `Pull` opcióval
  ![pull-option](https://res.cloudinary.com/dvjmebbte/image/upload/v1677918347/develop/SCR-20230304-d2r_fzcfhy.png)

3. Add - megegyezik a `git add .` paranccsal
A Changes sorban a `+` jelre kattintva az összes fájlt megjelöli hogy commitolható (`Staged` státuszba kerülnek), vagy a fájlok sorában egyesével is megteheted ezt ha csak specifikus fájlokat szeretnél commitolni. Ha egy fájlt mégse szeretnél beküldeni és vissza szeretnéd állítani az állapotát az utolsó commit állapotára, akkor a `+` melletti visszaforduló nyíllal lehet ezt megtenni.
![add](https://res.cloudinary.com/dvjmebbte/image/upload/v1677918537/develop/SCR-20230304-d5s_vm700b.png)

4. Commit - megegyezik a `git commit -am "COMMIT MESSAGE"` paranccsal.
Itt egy rövid üzenetet megadhatsz ami arra szolgál hogy később a commit historiban gyorsan áttekinthető hogy mi történt az egyes commitokban. Egyébként ezt itt a *Source Control* panelen alatt a *Commits* lenyílóban is láthatod.

Ha beírtál valamit, akkor a nagy **Commit** gombbal véglegesítheted.
![commit](https://res.cloudinary.com/dvjmebbte/image/upload/v1677960820/develop/SCR-20230304-tf7_o6leg6.png)
![commit-history](https://res.cloudinary.com/dvjmebbte/image/upload/v1677961087/develop/SCR-20230304-tkl_tyjkbl.png)

5. Push - megegyezik a `git push` paranccsal.
Ugyanazok a lehetőségek mint a 2. pontban a Pull-nál, csak itt értelemszerűen Push gomb és Push menüpont fog kelleni.

## Egyéb eszközök

- TailwindCSS CSS framework - [dokumentáció](https://tailwindcss.com/docs/installation)
- [Cloudinary](https://cloudinary.com) - kép tárhely (bejelentkezés GitHub fiókkal)
- Markdown leíró - [Cheat sheet](https://www.markdownguide.org/cheat-sheet/)



