var models = [
    {
        name: 'Araba 1',
        image: 'img/araba1.jpg',
        link: 'http://www.arabalar.com.tr/citroen/c4-x/2023/1-2-feel'
    },
    {
        name: 'Araba 2',
        image: 'img/araba2.jpg',
        link: 'http://www.arabalar.com.tr/nissan/x-trail/2022/1-5-platinum-premium-cvt'
    },
    {
        name: 'Araba 3',
        image: 'img/araba3.jpg',
        link: 'http://www.arabalar.com.tr/dacia/jogger/2023/1-0-essential'
    },
    {
        name: 'Araba 4',
        image: 'img/araba4.jpg',
        link: 'http://www.arabalar.com.tr/peugeot/308/2022/1-2-active-prime-at'
    },
    {
        name: 'Araba 5',
        image: 'img/araba5.jpg',
        link: 'http://www.arabalar.com.tr/suzuki/vitara/2020/1-4-gl-plus-at'
    },
    {
        name: 'Araba 6',
        image: 'img/araba6.jpg',
        link: 'http://www.arabalar.com.tr/mercedes/s-serisi/2018/400d-3-0-amg'
    }
];

var index=2;
var slaytCount = models.length;
var interval;
var settings={
    duration: '2000',
    random: false
};

init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click',function(){
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-right').addEventListener('click',function(){
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    });
});

function init(settings){
    
    var prev;
    interval = setInterval(function(){

        if(settings.random){

            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index==prev)
            prev = index;
        }
        else{
            if(slaytCount==index){
                index=0;
            }
            showSlide(index);
            index++;
        }

        showSlide(index);

    },settings.duration)
}

function showSlide(i){
    index = i;

    if(i<0){
        index = slaytCount - 1;
    }
    if(i>=slaytCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image)
    document.querySelector('.card-link').setAttribute('href',models[index].link)
}



