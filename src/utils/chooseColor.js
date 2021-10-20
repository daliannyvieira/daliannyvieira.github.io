export function chooseColor(index) {
  switch (index) {
    case 0:
      return "#F583BA";
    case 1:
      return "#6DDAF2";
    case 2:
      return "#92E085";
    case 3:
      return "#F5BD69";
    default:
      return '#F2856D';
  }
}

export function groupBy(list, field) {
  const group = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});
  
  const groupList = group(field);
  const newPosts = groupList(list);

  return newPosts;
}
