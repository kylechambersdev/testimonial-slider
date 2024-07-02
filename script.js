(function(){
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    let index = 0;
    const customers = [];

    function Customer(img, name, text){
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text){
        let Img = `img/${img}.jpg`;
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'Jill', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sit id cumque quod porro facere veniam quis? Mollitia provident voluptatibus consectetur tenetur tempora reprehenderit laudantium exercitationem, magnam aspernatur voluptates hic!'
    );
    createCustomer(1, 'John', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sit id cumque quod porro facere veniam quis? Mollitia provident voluptatibus consectetur tenetur tempora reprehenderit laudantium exercitationem, magnam aspernatur voluptates hic!'
    );
    createCustomer(2, 'Jane', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sit id cumque quod porro facere veniam quis? Mollitia provident voluptatibus consectetur tenetur tempora reprehenderit laudantium exercitationem, magnam aspernatur voluptates hic!'
    );
    createCustomer(3, 'Jack', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sit id cumque quod porro facere veniam quis? Mollitia provident voluptatibus consectetur tenetur tempora reprehenderit laudantium exercitationem, magnam aspernatur voluptates hic!'
    );
    createCustomer(4, 'Jessica', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sit id cumque quod porro facere veniam quis? Mollitia provident voluptatibus consectetur tenetur tempora reprehenderit laudantium exercitationem, magnam aspernatur voluptates hic!'
    );

    btn.forEach(function(button){
        button.addEventListener('click', function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length;
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                    index = 0;
                }
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
})();
