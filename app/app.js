"use strinct";


(() => {

    const { Observable, from, pipe, take, fromEvent} = rxjs;
    const print = ( value ) => {
        console.log( value.screenX, value.screenY )
        let el = document.createElement('p');
            el.innerText = JSON.stringify( {x : value.screenX, y: value.screenY} ) ;
        document.body.appendChild( el );
     }

    const observable = rxjs.fromEvent( document , 'click')
    observable.pipe(
    ).subscribe( hey => {
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