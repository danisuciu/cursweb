var size = 25;
for(i = 0; i< size; i++){
    if(i % 2 == 0){
        document.write("<td id='tdblack'></td>");
    }
    else{
        document.write("<td id='tdwhite'></td>");
    }
    if( (i+1) % 5 == 0){
        document.write("<tr>");
    }
}
