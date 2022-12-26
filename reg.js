document.getElementById("idnumber").oninput = function(){ 
    if(this.value.length > 1){ 
    if(this.value.charAt(0)!=2 || this.value.charAt(1) != 1){ 
                this.value =this.value.replace(this.value, '2'); 
     } 
    }else { 
                 if(this.value.charAt(0) != 2){ 
            this.value = this.value.replace(this.value, ''); 
        } 
    } 
    } 