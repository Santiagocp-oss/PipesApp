import { Pipe, PipeTransform } from "@angular/core";
import { EMPTY_SUBSCRIPTION } from "rxjs/internal/Subscription";

@Pipe({
    name:'Mayusculas'
})

export class MayusculasPipe implements PipeTransform{
    transform(valor : string, enMayusuculas: boolean): string {

        // if(enMayusuculas){
        //     return valor.toUpperCase();
        // }else{
            
        //     return valor.toLowerCase();
        // }
        return (enMayusuculas)
        ? valor.toUpperCase()
        :  valor.toLocaleLowerCase();
    }
}
