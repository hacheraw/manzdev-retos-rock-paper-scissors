# manzdev-retos-titulo

🌍 **URL del reto**: *https://lenguajejs.com/retos/nivel-facil/rock-paper-scissors/*

## Datos

- 🦄 **Desarrollador/a:** *Hache_raw*
- 🐇 **Link a red social:** *https://twitter.com/hache_raw*
- 🦾 **Perfil:** *Avanzado*
- 💬 **Un comentario breve o frase ingeniosa**: *CSS-in-SVG*

## Observaciones

Como siempre, en vez de ceñirme al ejercicio, he ido más allá por que me gusta complicarme la vida.

- "Aprendí" a usar Inkscape para hacer un SVG con las posibles jugadas.
- Investigué sobre la estructura interna de los SVG y aprendí sobre `<defs>`, `<markers>`, `<filter>`, etc. Además descubrí que se puede meter una etiqueta `<style>` en los SVG. Es más, es la única manera de poder hacer ciertas cosas.
- El jugador elije una jugada haciendo clic en un elemento del SVG, luego la CPU elige (también de manera visual) una jugada. Se determina el resultado y se resalta la jugada.

**Sobretodo me ha ayudado a aprender un montón sobre SVG.**

### Mención especial

Dentro del setInterval, esta línea consigue que pueda recorrer el array de jugadas indefinidamente:

```js
index = (index + 1) % choices.length;
```

> Puedes encontrar otros retos de Manz.dev en: <br>▶ https://lenguajejs.com/retos/
