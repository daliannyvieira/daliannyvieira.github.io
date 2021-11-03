export function getSticker(event) {
  const colors = ['#70d5fc', '#f16da5', '#f7966f', '#ffd670', '#e6f06e']
  const sizes = [3, 4.5, 6, 7.5, 9]

  const random = Math.floor(Math.random() * colors.length)

  const shape = {
    x: event.pageX,
    y: event.pageY,
    size: sizes[random],
    color: colors[random]
  }

  return shape;
}