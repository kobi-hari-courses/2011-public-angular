import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CoreValidators {
    public static minWords(count: number): ValidatorFn {
        return (control: AbstractControl) => this.testMinWords(control, count);
    }

    private static testMinWords(control: AbstractControl, count: number): null | ValidationErrors {
        const val = control?.value;  
        
        if (typeof(val) !== 'string') return null;
        const words = val.split(' ').filter(w => w.length > 0);

        if (words.length >= count) return null;

        return {'minWords': {
            requiredWords: count, 
            actualWords: words.length
        }};
    }
}