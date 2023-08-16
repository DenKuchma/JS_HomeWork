const fields = [
    'email',
    'password',
    'name',
    'dob',
    'gender',
    'zodiac',
    'weight',
    'height',
]; // передали все ключи

const SLIDER_DATA_LENGTH = $('.slider_screen').length; // всязли всю длину слайдера(страничек) по ийдишнику

$('.slider').slick({ //настройка слайдера
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
});

const updateStorage = person => {
    const storage = localStorage.getItem('people'); //получаем тело
    if (!storage) {
        localStorage.setItem('people', JSON.stringify([person])); // если тела нет создаем новое тело с ключом человек то сетаем новий масив 
    } else {
        const prevData = JSON.parse(localStorage.getItem('people'));
        localStorage.setItem('people', JSON.stringify([...prevData, person])); //если уже там что-то есть, берем пред. человека и сетаем в локлал прошлих персон и нашего текущего
    }
}; 

const generateNewPerson = () => { // создание нового тела 
    const result = fields.reduce((acc, item) => { // создаем переменную, берем наш масив с ключами и проходим редюсом
        const value = $('#' + item).val(); // создаем переменную в которой берется айдишник каждого айтема и берем его валюе(значение что там сидит)
            if (value) {
                acc[item] = value; //если не undefined то акамулятору со значением ключа(итем) передаем значение которое там сидит
            }
            return acc; //возврат нашего акамулятора
    }, {});
    return result; //возврат всего тела 
};

const handleSaveButtonClick = () => {
    const newPerson = generateNewPerson(); // генерация нового тела(запуск функции выше)
    updateStorage(newPerson); //пихание в функцию обновления сгенерированое тело
    $('.slider').slick('slickGoTo', SLIDER_DATA_LENGTH); //метод слайдера что бы прыгнуть на нужный слайд(4 в нашем случае из-за длины)
};

$('#save').click(handleSaveButtonClick); // замыкание функции, при клике запуск функции выше


$('.slider').on('afterChange', (_, slide) => { //нижнее подчерк как заглушка, что не надо передавать ничего, афтерчендж 
    if (slide.currentSlide === SLIDER_DATA_LENGTH - 1) { // что б всегда на предЛаст слайде срабатовало
        const people = JSON.parse(localStorage.getItem('people'));
        const resultItems = $('.slider_screen:last-child .list-group-item:not(:first-child) p'); // вибираем все элементы p кроме первого

        const getSumWeight = people.reduce((sum, person) => { // средний вес
            return sum + Number(person.weight || 0);
        }, 0);
        resultItems.eq(0).text('Общий вес: ' + getSumWeight + ' кг');

        const getMatchName = people.filter((el, index, arr) => { // совпадение имени
        return arr.some((i) => i.name === el.name && i !== el); 
        }).map(person => `${person.name} (${person.email})`).join('<br>'); 
        resultItems.eq(1).html('Совпадения по именам:<br>' + getMatchName);

        const getGenderCount = people.reduce( // счетчик генедров
            (acc, el) => {
                if (el.gender) {
                    if (el.gender === 'Male') {
                        return { ...acc, male: acc.male + 1 }; 
                    } else {
                        return { ...acc, female: acc.female + 1 }; 
                    }
                }
                return acc;
            },
            { male: 0, female: 0 }
        );
        resultItems.eq(2).text('Гендеры: ' + `Мужчины: ${getGenderCount.male}, Женщины: ${getGenderCount.female}`);
        
        const getHeigestPeople = [...people].sort((a, b) => b.height - a.height); // самий толстый
        const tallestPerson = getHeigestPeople[0];
        resultItems.eq(4).text('Самый высокий: ' + tallestPerson.name + ' ' + tallestPerson.height + ' см');

        const getWeighestPeople = [...people].sort((a, b) => b.weight - a.weight); // самый длинный
        const heaviestPerson = getWeighestPeople[0];
        resultItems.eq(3).text('Самый тяжелый: ' + heaviestPerson.name + ' ' + heaviestPerson.weight + ' кг');

        
    }
    
});
