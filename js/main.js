//id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
//url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
//description, строка — описание фотографии. Описание придумайте самостоятельно.
//likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200
//comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30.


import { similarPhotos } from './data';


console.log(similarPhotos);


