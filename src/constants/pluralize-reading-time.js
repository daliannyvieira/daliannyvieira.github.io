export default function pluralizeReadingTime(time) {
  return `${time} ${time > 1 ? 'mins' : 'min'} de leitura`;
}
