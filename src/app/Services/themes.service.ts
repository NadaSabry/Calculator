import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  update= new EventEmitter();
  mainbg = "hsl(222, 26%, 31%)";
  togglebg_keypadbg = "hsl(223, 31%, 20%)";
  screenbg = "hsl(224, 36%, 15%)";
  //key
  keybg = "hsl(225, 21%, 49%)";
  keyshadow = "hsl(224, 28%, 35%)";
  keybgtoggle = "hsl(6, 63%, 50%)";
  keybgandtoggleshadow = "hsl(6, 70%, 34%)";
  keybg3 = "hsl(30, 25%, 89%)";
  keybgshadow3 = "hsl(28, 16%, 65%)";
  //text
  texttop = "hsl(0, 0%, 100%)";
  textequal="hsl(0, 0%, 100%)";
  textbtn="hsl(221, 14%, 31%)";

  hoverDelReset="hsl(225,52%,76%)";
  hoverBtn="hsl(0,0%,100%)";
  hoverEqual="hsl(6,93%,67%)";

  White= "hsl(0, 0%, 100%)";

  constructor() { }

  toggleMode(modenum: any) {
    if(modenum==1){
      this.mainbg = "hsl(222, 26%, 31%)";
      this.togglebg_keypadbg = "hsl(223, 31%, 20%)";
      this.screenbg = "hsl(224, 36%, 15%)";
      //key
      this.keybg = "hsl(225, 21%, 49%)";
      this.keyshadow = "hsl(224, 28%, 35%)";
      this.keybgtoggle = "hsl(6, 63%, 50%)";
      this.keybgandtoggleshadow = "hsl(6, 70%, 34%)";
      this.keybg3 = "hsl(30, 25%, 89%)";
      this.keybgshadow3 = "hsl(28, 16%, 65%)";
      //text
      this.texttop = "hsl(0, 0%, 100%)";
      this.textequal="hsl(0, 0%, 100%)";
      this.textbtn="hsl(221, 14%, 31%)";

      this.hoverDelReset="hsl(225,52%,76%)";
      this.hoverBtn="hsl(0,0%,100%)";
      this.hoverEqual="hsl(6,93%,67%)";
    }
    else if (modenum == 2) {
      this.mainbg = "hsl(0, 0%, 90%)";
      this.togglebg_keypadbg = "hsl(0, 5%, 81%)";
      this.screenbg = "hsl(0, 0%, 93%)";
      //key
      this.keybg = "hsl(185, 42%, 37%)";
      this.keyshadow = "hsl(185, 58%, 25%)";
      this.keybgtoggle = "hsl(25, 98%, 40%)";
      this.keybgandtoggleshadow = "hsl(25, 99%, 27%)";
      this.keybg3 = "hsl(45, 7%, 89%)";
      this.keybgshadow3 = "hsl(35, 11%, 61%)";
      //text
      this.texttop = "hsl(60, 10%, 19%)";
      this.textequal="hsl(0, 0%, 100%)";
      this.textbtn="hsl(221, 14%, 31%)";

      this.hoverDelReset="hsl(185,41%,56%)";
      this.hoverBtn="hsl(0,0%,100%)";
      this.hoverEqual="hsl(25,100%,61%)";
    }
    else{
      this.mainbg = "hsl(268, 75%, 9%)";
      this.togglebg_keypadbg = "hsl(268, 71%, 12%)";
      this.screenbg = "hsl(268, 71%, 12%)";
      //key
      this.keybg = "hsl(281, 89%, 26%)";
      this.keyshadow = "hsl(285, 91%, 52%)";
      this.keybgtoggle = "hsl(176, 100%, 44%)";
      this.keybgandtoggleshadow = "hsl(177, 92%, 70%)";
      this.keybg3 = "hsl(268, 47%, 21%)";
      this.keybgshadow3 = "hsl(290, 70%, 36%)";
      //text
      this.texttop="hsl(52, 100%, 62%)";
      this.textequal = "hsl(198, 20%, 13%)";
      this.textbtn="hsl(52, 100%, 62%)";

      this.hoverDelReset="hsl(281,56%,44%)";
      this.hoverBtn="hsl(267,54%,44%)";
      this.hoverEqual="hsl(177,100%,79%)";
    }
    this.update.emit();

  }
}
