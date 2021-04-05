let lang = prompt('Choose input lang(ru/en)');
let dayArr = [
  ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
  ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
];


if (lang == 'ru') {
  console.log(dayArr[0]);
} else if (lang == 'en') {
  console.log(dayArr[1]);
} else {
  console.log('error');
}


switch (lang) {
  case "ru":
    console.log(dayArr[0]);
    break;
  case "en":
    console.log(dayArr[1]);
    break;
  default:
    console.log('error')
}













let namePerson = prompt('Введите имя:')
let result = (namePerson == 'Артем') ? console.log('директор') :
  (namePerson == 'Максим') ? console.log('преподаватель') :
  console.log('студент');