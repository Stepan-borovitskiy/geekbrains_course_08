export { Duration } from "https://moment.github.io/luxon/es6/luxon.js"; // 1

export const formatError = text => `
<span style="color: red;">
    ${text}
</span>
`;

export const sound = new Howl({
    src: ['../public/sound.mp3']
  });