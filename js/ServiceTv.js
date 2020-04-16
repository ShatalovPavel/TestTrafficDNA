class ServiceTv {

    renderList = (data) =>{
        return data.map((item, index) =>{
           return `<li data-id="${index}" class="${index === 0 ? 'active' : ''}"><img src="${item.img}" alt=""><p>${item.title}</p></li>`
        });

    };
    deleteElement = (data, id) =>{
        return data.filter((item,index)=>{
            if(index !== id)
                return item;
        });
    }
    addElement = (data, name, imgSrc) =>{
        const user = {'title': name,
                      'img': imgSrc
        };
         data.push(user);
         return data;
    }
}