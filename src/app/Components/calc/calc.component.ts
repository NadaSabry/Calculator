import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemesService } from 'src/app/Services/themes.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})

export class CalcComponent implements OnInit {

  mapNumber = [7, 8, 9, 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x', '='];
  onScreen = "";
  term1 = -1e9;
  operate = "";

  constructor(private theme: ThemesService) {

  }
  bgbtn = this.theme.togglebg_keypadbg;
  ngOnInit(): void {
    this.changeStyle();
    this.clickEquation();
    this.theme.update.subscribe(() => {
      this.changeStyle();
    });
  }
  changeStyle() {
    const screen = document.getElementById("screen") as HTMLElement;
    const equal = document.getElementById("equal") as HTMLElement;
    const btn = document.querySelectorAll("#normalbtn") as NodeListOf<HTMLElement>;
    const DelReset = document.querySelectorAll("#DelReset") as NodeListOf<HTMLElement>;

    this.bgbtn = this.theme.togglebg_keypadbg;
    screen.style.backgroundColor = this.theme.screenbg;

    //click
    btn.forEach((bt, index) => {
      // console.log(typeof(this.mapNumber[index])," , ");
      /*
      bt.addEventListener("click",()=>{
       this.clickbtn(bt,index);
      });
      */

      bt.style.backgroundColor = this.theme.keybg3;
      bt.style.boxShadow = '0px 5px 1px ' + this.theme.keybgshadow3;
      bt.style.color = this.theme.textbtn;
      bt.addEventListener("mouseover", () => {
        bt.style.backgroundColor = this.theme.hoverBtn;
      });
      bt.addEventListener("mouseout", () => {
        bt.style.backgroundColor = this.theme.keybg3;
      });
    });

    DelReset.forEach((bt, index) => {
      bt.style.backgroundColor = this.theme.keybg;
      bt.style.boxShadow = '0px 4px 1px ' + this.theme.keyshadow;
      bt.style.color = this.theme.White;
      bt.addEventListener("mouseover", () => {
        bt.style.backgroundColor = this.theme.hoverDelReset;
      });
      bt.addEventListener("mouseout", () => {
        bt.style.backgroundColor = this.theme.keybg;
      });

      //click
      /*
      bt.addEventListener("click",()=>{
        if(index==1){
          this.onScreen="";
          this.term1=-1e9;
          this.operate="";
        }
        else{
          this.onScreen=this.onScreen.substring(0,this.onScreen.length-1);
        }
      });
      */


    })
    equal.style.backgroundColor = this.theme.keybgtoggle;
    equal.style.boxShadow = '0px 5px 1px ' + this.theme.keybgandtoggleshadow;
    equal.style.color = this.theme.textequal;
    equal.addEventListener("mouseover", () => {
      equal.style.backgroundColor = this.theme.hoverEqual;
    });
    equal.addEventListener("mouseout", () => {
      equal.style.backgroundColor = this.theme.keybgtoggle;
    });

    //click
    /*
    equal.addEventListener("click", () => {
      this.clickbtn(equal, 15);
      console.log(this.term1, " ");
      if (this.term1 == -1e9 || Number.isNaN(this.term1)) {
        this.onScreen = "Syntax Error";
      } else {
        this.onScreen = String(this.term1);
      }
    });
    */
  }

  clickEquation() {
    const equal = document.getElementById("equal") as HTMLElement;
    const btn = document.querySelectorAll("#normalbtn") as NodeListOf<HTMLElement>;
    const DelReset = document.querySelectorAll("#DelReset") as NodeListOf<HTMLElement>;

    /// 1
    btn.forEach((bt, index) => {
      bt.addEventListener("click", () => {
        this.clickbtn(bt, index);
      });
    });

    /// 2
    DelReset.forEach((bt, index) => {
      bt.addEventListener("click", () => {
        if (index == 1) {
          this.onScreen = "";
          this.term1 = -1e9;
          this.operate = "";
        }
        else {
          this.onScreen = this.onScreen.substring(0, this.onScreen.length - 1);
        }
      })
    });

    equal.addEventListener("click", () => {
      this.clickbtn(equal, 15);
      console.log(this.term1, " ");
      if (this.term1 == -1e9 || Number.isNaN(this.term1)) {
        this.onScreen = "Syntax Error";
      } else {
        this.onScreen = String(this.term1);
      }
    });
  }

  clickbtn(bt: any, index: number) {
    if (typeof (this.mapNumber[index]) == "number" || index == 11) {
      this.onScreen += this.mapNumber[index];
    }
    else if (this.onScreen != "") {
      let str = "";
      for (let i = 0; i < this.onScreen.length; i++) {
        if (this.onScreen[i] == '+' || this.onScreen[i] == '-' || this.onScreen[i] == 'x' || this.onScreen[i] == '/') {
          str = "";
        }
        else {
          str += this.onScreen[i];
        }
      }
      console.log("str= ", str);
      let numfloat = parseFloat(str);
      this.onScreen += this.mapNumber[index];

      if (this.term1 == -1e9) {
        this.term1 = numfloat;
      }
      else if (this.operate == '+') {
        this.term1 += numfloat;
      }
      else if (this.operate == '-') {
        this.term1 -= numfloat;
      }
      else if (this.operate == 'x') {
        this.term1 *= numfloat;
      }
      else if (this.operate == '/') {
        if (numfloat == 0) {
          this.onScreen = "Syntax Error";
          this.term1 = -1e9;
        } else {
          this.term1 /= numfloat;
        }
      }
      this.operate = String(this.mapNumber[index]);

      // console.log(numfloat , " " , this.term1);
    }
  }

}
