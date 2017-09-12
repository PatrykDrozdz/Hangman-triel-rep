var  pass = "Próbna Hasła";

pass = pass.toUpperCase();

var lenght = pass.length;

var pass_covered="";

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

for(i=0; i<lenght; i++){
    
    if(pass.charAt(i)===" "){
        pass_covered = pass_covered + " ";
    } else {
        pass_covered = pass_covered + "-";
    }
    
}

function write_pass(){
    document.getElementById("password-to-guess").innerHTML = pass_covered;
}

function write_alfabet(){
    
    var div_cont = "";
    
    for(i=0; i<35; i++){
         
         var let = "letter" + i;
         
        div_cont = div_cont +'<div class="letter" id="'+let+'" onclick="check('+i+')">'+letters[i]+'</div>';
        
        if((i+1)%7===0){
        
            div_cont = div_cont +'<div class="last-letter"></div>';
            
        }
        
    }
    
    document.getElementById("alfabet").innerHTML = div_cont;
    
    write_pass();
    
}

String.prototype.set_sing = function(place, sign){
    
    if(place>this.length -1 ){
        return this.toString();
    } else {
        return this.substr(0, place) + sign + this.substr(place+1);
    }
    
};

function check(value){
    
    for(i=0; i<lenght; i++){
        
        if(pass.charAt(i)===letters[value]){
            pass_covered = pass_covered.set_sign(i, letters[value]);
            //alert(i);
        }
        
    }
    
    write_pass();
    
}

window.onload = write_alfabet;