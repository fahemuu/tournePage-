
// programmation à la barbare:
//codage de la premiere idée venu ,sans recherche d'optimisation 

var list = [
    "image/0.jpg",
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg"
];

var interval;



//Si on click sur le boutton suivant
var count = 0;
$('#suiv').click(
    function ()
    {
        clearInterval(interval);

        if (count === 4)
        {
            $('img').attr("src", list[0])
            $('img').fadeOut(0, function ()
            {
                $(this).fadeIn(500);
            })
            count = 1;
        }
        else
        {
            $('img').attr("src", list[count])
            $('img').fadeOut(0, function ()
            {
                $(this).fadeIn(500);
            })
            count++;
        }
        foo()
    })

$('#prec').click(
    function ()
    {
        clearInterval(interval);
        if (count === 0)
        {
            $('img').attr("src", list[3])
            $('img').fadeOut(0, function ()
            {
                $(this).fadeIn(500);
            })

            count = 3
        }
        else
        {
            count--;
            $('img').attr("src", list[count]);
            $('img').fadeOut(0, function ()
            {
                $(this).fadeIn(500);
            })
        }
        foo()
    })


function foo()
{
    interval = setInterval(function ()
    {

        $('img').attr("src", list[count])
        $('img').fadeOut(0, function ()
        {
            $(this).fadeIn(500);
        })
        //console.log($('img').attr("src"))
        count++;
        if (count === 4)
            count = 0;
    }, 3000);
}
foo()