document.addEventListener('DOMContentLoaded', () => {
    var button = document.getElementById('button1');
    button.addEventListener('click', () => {
        valEmail();
        valPassword();
        valCheck();
       });

});

    function valEmail(){
        var email = document.getElementById('email')
        var pole6 = document.getElementById("pole1")
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if(!emailPattern.test(email.value)){
                        pole6.textContent = "Nieprawidłowy adres email"
                    }
                    else{
                        pole6.textContent = ""
                    }
            }

            function valPassword(){
                var password = document.getElementById('passwd')
                var pole4 = document.getElementById('pole2')
    
                    if(password.value === ' '){
                        pole4.textContent = 'pole nie może być puste'
                    }
                    else if(password.value.length < 8){
                        pole4.textContent = 'haslo ma miec co najmniej 8 znakow'
                    }
                    else if(!(/[0-9]/.test(password.value) && !/[!@#$%^&*]/.test(password.value))){
                        pole4.textContent = ' pole musi zawierac cyfry i specialni znaki'
                    }
                    else{
                        pole4.textContent  = ''
                    }
    
                    
                }
                function valTel(){
                    telef = document.getElementById('phone')
                    const telefPattern

                }

function Book(tytul,rok,name_au,surname_au){
    this.tytul = tytul
    this.rok = rok
    this.name_au = name_au
    this.surname_au = surname_au
    this.funk = function (){
        console.log(this.name_au + '- ',this.surname_au)
        console.log(this.tytul + '-',this.name_au + '-',this.rok)

    }
}
    const book1 = new Book('bukvar',1999,'Pavlo','Mysiuk')
    const book2 = new Book('Alphaber',2000,'Rostik','Yaremko')
    const book3 = new Book('bukvar3',2001,'Olek','Vyshnievsky')
    const book4 = new Book('bukvar4',2002,'Olek','Derkach')
    
const books = [book1,book2,book3,book4]

books.forEach(element => {
    element.funk()
});
books.forEach(element => { if(element.rok === 2000)
    element.funk()
})
