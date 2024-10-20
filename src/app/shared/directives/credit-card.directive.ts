import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreditCARD]'
})
export class CreditCARDDirective implements OnInit {

  constructor(
    private _eleRef : ElementRef,
  ) { }

  ngOnInit(): void {
    this.createErrorContainer()
  }

  @HostListener('keyup', ['$event'])
  validatecreaditCard(eve:Event){
    let inputControl = eve.target as HTMLInputElement;
    let val : string = inputControl.value.replace(/\s+/g, "");
    console.log(val, val.length);

    if(val.length > 16){
      val= val.substring(0, 16)
    }
    console.log(/[^\d]/.test(val));
    
    if(/[^\d]/.test(val)){
      console.log(inputControl.nextElementSibling);
      inputControl.nextElementSibling?.classList.remove('d-none')
    }else{
      inputControl.nextElementSibling?.classList.add('d-none')
    }

    let formatedval = this.formatCreditCardVal(val)
    inputControl.value = formatedval;
    
  }

  formatCreditCardVal (data:string): string {
     let chunkArr=[]
     for (let i = 0; i < data.length; i += 4) {
      chunkArr.push(data.slice(i, i + 4))
      
     }
     return  chunkArr.join(' ')
  }

  createErrorContainer(){
    let para = document.createElement('p');
    para.className ="text-danger d-none";
    para.innerHTML = `<strong>please enter valid card details</strong>`;
    this._eleRef.nativeElement.parentElement.append(para)
  }
  

  
}
