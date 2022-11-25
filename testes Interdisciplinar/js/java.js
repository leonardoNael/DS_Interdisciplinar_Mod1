var imgs = ["LogoDrag1", "LogoDrag2", "LogoDrag3", "LogoDrag4"];

function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop1(ev)
{
    var data = ev.dataTransfer.getData("Text");
    if(data == imgs[2])
    {
        ev.target.appendChild(document.getElementById(data));
        ev.preventDefault();
    }
}

function drop2(ev)
{
    var data = ev.dataTransfer.getData("Text");
    if(data == imgs[1])
    {
        ev.target.appendChild(document.getElementById(data));
        ev.preventDefault();
    }
}

function drop3(ev)
{
    var data = ev.dataTransfer.getData("Text");
    if(data == imgs[0])
    {
        ev.target.appendChild(document.getElementById(data));
        ev.preventDefault();
    }
}

function drop4(ev)
{
    var data = ev.dataTransfer.getData("Text");
    if(data == imgs[3])
    {
        ev.target.appendChild(document.getElementById(data));
        ev.preventDefault();
    }
}