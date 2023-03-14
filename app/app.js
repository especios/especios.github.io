"use strinct";


(() => {

    const { Observable, from, pipe, take, fromEvent } = rxjs;
   
    const clicks$ = rxjs.fromEvent( document , 'click')
    clicks$.subscribe( hey => {
        addObjectInPosition(hey.x , hey.y);
    })

    const addObjectInPosition = (x,y) =>  {
        x = x ;
        y = y ;
        let div = document.createElement('div');
            div.setAttribute( 'class','floating');
            div.setAttribute( 'style',`top: ${y}px; left: ${x}px`)
            div.innerHTML = `<div> especios </div>`
            document.body.appendChild(div)
    }

})()