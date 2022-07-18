// var select = document.querySelector('select');
// select.addEventListener('change',Opt);
//    function Opt(e){
//        console.log(e.type);
//    }
//    console.log(select);

//    var div = document.querySelector('div');
//     div.addEventListener('mouseover',Opt);
//    function Opt(e){
//        console.log(e.type);
//    }
//    console.log(div);

//    var input = document.querySelector('input');
//     input.addEventListener('input',Opt);
//    function Opt(e){
//        console.log(e.type);
//    }
//    console.log(input);

    var form = document.querySelector('form');
    var ulList = document.getElementById('list');
    var filter = document.getElementById('filter');
    form.addEventListener('submit', Opt);
    ulList.addEventListener('click', deleteData);
    filter.addEventListener('keyup', filterItems);
        function Opt(e){
            e.preventDefault();
            var newli = document.createElement("li");
            newli.id ="ListItems";
            var textName = document.getElementById("TextName").value;
            if(textName != ''){
                var liText = document.createTextNode(textName);
                newli.appendChild(liText);
                ulList.appendChild(newli);
                var RemoveBTn = document.createElement("input");
                RemoveBTn.type = 'button';
                RemoveBTn.value='Remove';
                RemoveBTn.className = "bg-red";
                newli.appendChild(RemoveBTn);
            }else{
                alert("Enter Name");
            }
        }
    console.log(form);

    function deleteData(e){
        console.log(e.target.value);
        if(e.target.value ==="Remove"){
            if(confirm("Are you sure")){
                var li = e.target.parentElement;
                ulList.removeChild(li);
            }
        }
    }

    function filterItems(e){
        var text = e.target.value.toLowerCase();
        var items = ulList.getElementsByTagName("li");
        Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
        console.log(itemName);
        });
    }

    var createDiv = document.createElement("main");
     createDiv.className = ("container");

    var body = document.querySelector("body");
     body.appendChild(createDiv);

    var createDivText = document.createTextNode("Hello World");
     createDiv.appendChild(createDivText);

    var h3 = document.createElement("h3");
    createDiv.appendChild(h3);
    h3.appendChild(createDivText);
    h3.style = "background-color:Green; color:white; text-align:center";
