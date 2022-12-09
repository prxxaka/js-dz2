var user = {
    name: 'Дневники вампира',
    releaseDate: '2009',
    mainActor: 'Нина Добрев, Пол Уэсли,  Иэн Сомерхолдер',
    episodes: 171,
    production: {
        executiveProducers: 'Лесли Моргенштейн',
        producer: 'Джули Плек',
        runningTime: '41–49 minutes',
    }
}
console.log('Сериал' + ' ' + user.name + ',' + 'был выпущен в ' + user.releaseDate + ' году.')
console.log('В главных ролях' + ' ' + user.mainActor + '.')
console.log('В ' + user.name + ' ' + user.episodes + ' серий.')
console.log('Над ' + user.name + ' работали ' + user.production.executiveProducers + ' и ' + user.production.producer + '.')
console.log('Длительность серий около ' + user.production.runningTime + '.')


var day = 'Monday'
switch (day) {
    case 'Monday':
    case 'monday':
            console.log( day = 'Понедельник')
        break
    case 'Wednesday':
    case 'wednesday':
            console.log(day = 'Среда')
        break
    case 'Thursday':
    case 'thursday':
            console.log(day = 'Четверг')
        break
    case 'Friday':
    case 'friday':
            console.log(day = 'Пятница')
        break
    case 'Saturday':
    case 'saturday':
            console.log(day = 'Суббота')
        break
    case 'Sunday':
    case 'sunday':
            console.log(day = 'Воскресенье')
        break
}